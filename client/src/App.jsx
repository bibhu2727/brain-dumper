import { useEffect } from 'react'; import { useNoteStore } from './store/noteStore'; import { useLiveQuery } from 'dexie-react-hooks'; import { db } from './lib/db'; import { AnimatePresence } from 'framer-motion'; import { NoteForm } from './components/NoteForm'; import { SearchAndFilter } from './components/SearchAndFilter'; import { CategoryHeader } from './components/CategoryHeader'; import { NoteCard } from './components/NoteCard'; import { ThemeToggle } from './components/ThemeToggle'; import { SummaryModal } from './components/SummaryModal'; import { Download, BrainCircuit } from 'lucide-react'; import './App.css';
function App() {
  const { theme, toggleTheme, exportToMarkdown, syncWithServer, searchTerm, activeCategory } = useNoteStore();
  const notes = useLiveQuery(() => db.thoughts.orderBy('createdAt').reverse().toArray(), []);
  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);
  useEffect(() => { syncWithServer(); const interval = setInterval(syncWithServer, 30000); return () => clearInterval(interval); }, []);
  const filteredNotes = notes?.filter(note => note.content.toLowerCase().includes(searchTerm.toLowerCase()) && (activeCategory === 'All' || note.category === activeCategory)) || [];
  const groupedNotes = filteredNotes.reduce((acc, note) => { const key = note.isPinned ? '📌 Pinned' : note.category; if (!acc[key]) { acc[key] = []; } acc[key].push(note); return acc; }, {});
  const sortedCategories = Object.keys(groupedNotes).sort((a, b) => { if (a === '📌 Pinned') return -1; if (b === '📌 Pinned') return 1; if (a === 'Uncategorized') return 1; if (b === 'Uncategorized') return -1; return a.localeCompare(b); });
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-title"><BrainCircuit size={32} className="logo-icon" /><h1>Brain Dump v2</h1></div>
        <div className="header-actions">
          <button onClick={exportToMarkdown} className="icon-button" title="Export to Markdown"><Download size={20} /></button>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </header>
      <main>
        <NoteForm />
        <SearchAndFilter />
        <AnimatePresence>
          <div className="notes-list">
            {sortedCategories.map(category => (
              <div key={category}>
                <CategoryHeader category={category} notes={groupedNotes[category]} />
                <AnimatePresence>
                  {groupedNotes[category].map(note => <NoteCard key={note.id} note={note} />)}
                </AnimatePresence>
              </div>
            ))}
            {notes && filteredNotes.length === 0 && <p className="empty-state">No thoughts found. Time for a brain dump!</p>}
          </div>
        </AnimatePresence>
      </main>
      <SummaryModal />
    </div>
  );
}
export default App;
