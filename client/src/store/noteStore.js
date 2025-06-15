import { create } from 'zustand'; import { db } from '../lib/db'; import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
const useNoteStore = create((set, get) => ({
  searchTerm: '', activeCategory: 'All', theme: localStorage.getItem('theme') || 'light',
  summaryData: { isOpen: false, category: '', summary: '', isLoading: false },
  setSearchTerm: (term) => set({ searchTerm: term }),
  setActiveCategory: (category) => set({ activeCategory: category }),
  toggleTheme: () => { const newTheme = get().theme === 'light' ? 'dark' : 'light'; localStorage.setItem('theme', newTheme); set({ theme: newTheme }); },
  addNote: async (content) => { if (!content.trim()) return; await db.thoughts.add({ content, category: 'Uncategorized', status: 'pending', createdAt: new Date(), isPinned: false }); get().syncWithServer(); },
  deleteNote: async (id) => { await db.thoughts.delete(id); },
  updateNoteContent: async (id, newContent) => { await db.thoughts.update(id, { content: newContent, category: 'Uncategorized', status: 'pending' }); get().syncWithServer(); },
  togglePin: async (id) => { const note = await db.thoughts.get(id); if (note) { await db.thoughts.update(id, { isPinned: !note.isPinned }); } },
  syncWithServer: async () => {
    const pendingNotes = await db.thoughts.where('status').equals('pending').toArray(); if (pendingNotes.length === 0) return;
    for (const note of pendingNotes) {
      try {
        const res = await axios.post(`${API_URL}/categorize`, { thought: note.content });
        await db.thoughts.update(note.id, { category: res.data.category, status: 'synced' });
      } catch (error) { console.error(`Failed to sync note ${note.id}:`, error); await db.thoughts.update(note.id, { status: 'error' }); }
    }
  },
  generateSummary: async (category, thoughts) => {
    set({ summaryData: { isOpen: true, category, summary: '', isLoading: true } });
    try {
        const res = await axios.post(`${API_URL}/summarize`, { thoughts, category });
        set({ summaryData: { isOpen: true, category, summary: res.data.summary, isLoading: false } });
    } catch (error) { set({ summaryData: { isOpen: true, category, summary: 'Sorry, could not generate a summary.', isLoading: false } }); }
  },
  closeSummary: () => set({ summaryData: { isOpen: false, category: '', summary: '', isLoading: false } }),
  exportToMarkdown: async () => {
    const notes = await db.thoughts.toArray(); let markdownContent = "# Brain Dump\n\n";
    const categories = [...new Set(notes.map(n => n.category))];
    categories.forEach(category => {
        markdownContent += `## ${category}\n\n`;
        notes.filter(n => n.category === category).forEach(note => { markdownContent += `- ${note.content.replace(/\n/g, ' ')}\n`; });
        markdownContent += "\n";
    });
    const blob = new Blob([markdownContent], { type: 'text/markdown' }); const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `braindump-export-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  },
}));
export { useNoteStore };
