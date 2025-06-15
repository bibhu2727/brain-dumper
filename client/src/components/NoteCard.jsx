import { useState } from 'react'; import { useNoteStore } from '../store/noteStore'; import { motion } from 'framer-motion'; import { Pin, PinOff, Trash2, Edit, Save, X } from 'lucide-react';
export function NoteCard({ note }) {
  const { deleteNote, updateNoteContent, togglePin } = useNoteStore();
  const [isEditing, setIsEditing] = useState(false); const [editText, setEditText] = useState(note.content);
  const handleSave = () => { updateNoteContent(note.id, editText); setIsEditing(false); };
  const cardVariants = { initial: { opacity: 0, y: 20, scale: 0.95 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, x: -100, transition: { duration: 0.3 } } };
  return (
    <motion.div layout variants={cardVariants} initial="initial" animate="animate" exit="exit" className={`note-card status-${note.status}`}>
      <div className="note-card-actions">
        {isEditing ? ( <> <button onClick={handleSave} className="icon-button" title="Save"><Save size={16} /></button> <button onClick={() => setIsEditing(false)} className="icon-button" title="Cancel"><X size={16} /></button> </> ) : ( <> <button onClick={() => togglePin(note.id)} className="icon-button" title={note.isPinned ? 'Unpin' : 'Pin'}>{note.isPinned ? <PinOff size={16} /> : <Pin size={16} />}</button> <button onClick={() => setIsEditing(true)} className="icon-button" title="Edit"><Edit size={16} /></button> <button onClick={() => deleteNote(note.id)} className="icon-button" title="Delete"><Trash2 size={16} /></button> </> )}
      </div>
      <div className="note-card-content">
        {isEditing ? ( <textarea value={editText} onChange={(e) => setEditText(e.target.value)} autoFocus style={{ width: '100%', minHeight: '80px', border: '1px solid var(--border-color)', background: 'transparent' }} /> ) : ( <p>{note.content}</p> )}
      </div>
      {!isEditing && ( <div className="note-card-footer"> <span>{new Date(note.createdAt).toLocaleString()}</span> <span>{note.category}</span> </div> )}
    </motion.div>
  );
}
