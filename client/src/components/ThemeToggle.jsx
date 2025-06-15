import { Sun, Moon } from 'lucide-react'; import { motion } from 'framer-motion';
export function ThemeToggle({ theme, toggleTheme }) {
  return ( <button onClick={toggleTheme} className="icon-button" title="Toggle Theme"> <motion.div key={theme} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.2 }}> {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />} </motion.div> </button> );
}
