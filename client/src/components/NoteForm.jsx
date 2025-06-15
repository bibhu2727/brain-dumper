import { useNoteStore } from '../store/noteStore';
export function NoteForm() {
  const addNote = useNoteStore(state => state.addNote);
  const handleSubmit = (e) => { e.preventDefault(); const content = e.target.elements.note.value; addNote(content); e.target.reset(); };
  return ( <form onSubmit={handleSubmit} className="note-form"> <textarea name="note" placeholder="What's on your mind? Dump a thought here..." required /> <button type="submit" className="primary-button">Dump Thought</button> </form> );
}
