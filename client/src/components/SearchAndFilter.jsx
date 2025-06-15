import { useNoteStore } from '../store/noteStore'; import { useLiveQuery } from 'dexie-react-hooks'; import { db } from '../lib/db';
export function SearchAndFilter() {
  const { searchTerm, setSearchTerm, activeCategory, setActiveCategory } = useNoteStore();
  const notes = useLiveQuery(() => db.thoughts.toArray(), []);
  const categories = ['All', ...new Set(notes?.map(n => n.category) || [])];
  return (
    <div className="search-filter">
      <input type="search" placeholder="Search thoughts..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)}
            style={{ padding: '0.25rem 0.75rem', borderRadius: '16px', border: '1px solid', borderColor: activeCategory === cat ? 'var(--primary-accent)' : 'var(--border-color)', backgroundColor: activeCategory === cat ? 'var(--primary-accent)' : 'transparent', color: activeCategory === cat ? 'white' : 'var(--text-primary)' }}
          >{cat}</button>
        ))}
      </div>
    </div>
  );
}
