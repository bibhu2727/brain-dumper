import { Brain } from 'lucide-react'; import { useNoteStore } from '../store/noteStore';
export function CategoryHeader({ category, notes }) {
  const generateSummary = useNoteStore(state => state.generateSummary);
  if (category === '📌 Pinned') return <h2 className="category-header">{category}</h2>;
  return ( <div className="category-header"> <h2>{category}</h2> <button onClick={() => generateSummary(category, notes)} className="icon-button" title={`Summarize ${category}`}><Brain size={16} /></button> </div> );
}
