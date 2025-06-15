import { AnimatePresence, motion } from 'framer-motion'; import { X } from 'lucide-react'; import { useNoteStore } from '../store/noteStore';
export function SummaryModal() {
  const { summaryData, closeSummary } = useNoteStore();
  const { isOpen, category, summary, isLoading } = summaryData;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="modal-content" initial={{ y: 50, scale: 0.9, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: 50, scale: 0.9, opacity: 0 }}>
            <button onClick={closeSummary} className="icon-button close-button"><X size={24} /></button>
            <h2>Summary for: {category}</h2>
            {isLoading ? <div className="loading-spinner"></div> : <p className="summary-text">{summary}</p>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
