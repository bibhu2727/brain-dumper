# 🧠 Brain Dump Organizer v2.0 ✨

**Capture every fleeting thought. Find anything, instantly. Your second brain, automatically sorted.**



Brain Dump Organizer is a smart note-taking application designed to be the ultimate starting point for your ideas. Instead of a messy, unstructured list of notes, this app uses AI to automatically categorize your thoughts, making them instantly organized and retrievable. Built with a modern, offline-first architecture, it's fast, reliable, and a joy to use.

---

## 🚀 Key Features

This isn't just a simple notepad. It's a powerhouse of features designed for productivity:

*   ✅ **AI-Powered Categorization:** Just write down a thought, and the app's AI engine automatically assigns a relevant category (e.g., "Work Project," "Grocery List," "Tech Idea").
*   🧠 **AI-Generated Summaries:** With a single click, generate a concise summary for all the thoughts within a specific category. Transform your raw notes into actionable insights!
*   🔍 **Instant Search & Filtering:** A powerful search bar and dynamic category filters allow you to find any thought in seconds.
*   📌 **Pinning for Priority:** Pin your most important thoughts to keep them at the top, ensuring you never lose track of what matters most.
*   ✍️ **Full CRUD Functionality:** Seamlessly **C**reate, **R**ead, **U**pdate, and **D**elete your thoughts with a clean and intuitive interface.
*   🎨 **Sleek UI with Dark Mode:** A beautifully designed interface with both light and dark themes to suit your preference and reduce eye strain. Your choice is automatically saved.
*   💾 **Offline-First Architecture:** Built with IndexedDB, the app works perfectly even without an internet connection. Your notes are saved locally first, then synced in the background.
*   📤 **Export to Markdown:** Your data is yours. Export all your thoughts into a neatly organized Markdown file anytime.
*   ✨ **Slick Animations:** The UI is brought to life with smooth, subtle animations powered by Framer Motion, providing a premium user experience.

---

## 🛠️ Tech Stack

This project is built with a modern, robust, and scalable tech stack, perfect for a high-performance MNC environment.

*   **Frontend:**
    *   **Framework:** [React](https://reactjs.org/)
    *   **Build Tool:** [Vite](https://vitejs.dev/)
    *   **State Management:** [Zustand](https://github.com/pmndrs/zustand) (Simple, modern state management)
    *   **Animation:** [Framer Motion](https://www.framer.com/motion/)
    *   **Offline Storage:** [Dexie.js](https://dexie.org/) (A powerful wrapper for IndexedDB)
    *   **Icons:** [Lucide React](https://lucide.dev/)
*   **Backend:**
    *   **Framework:** [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/)
*   **AI Service:**
    *   **Gateway:** [OpenRouter API](https://openrouter.ai/)
    *   **Model:** `google/gemini-flash-1.5` (Fast, capable, and free)

---

## 🏁 Getting Started

Ready to run the project locally? It's simple.

### **Prerequisites**

*   [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
*   [Git](https://git-scm.com/)

### **Installation & Setup**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/brain-dump-organizer.git
    ```

2.  **Navigate into the project directory:**
    ```bash
    cd brain-dump-organizer
    ```

3.  **Install all dependencies for the client and server:**
    ```bash
    npm run install:all
    ```

4.  **Set up your environment variables:**
    *   Navigate into the `server` directory: `cd server`
    *   Copy the example environment file: `cp .env.example .env`
    *   Open the new `.env` file and add your OpenRouter API key. You can get one for free from [openrouter.ai/keys](https://openrouter.ai/keys).

    Your `server/.env` file should look like this:
    ```
    OPENROUTER_API_KEY="sk-or-xxxxxxxxxxxxxxxxxxxxxxxx"
    PORT=3001
    ```

5.  **Run the application:**
    *   Navigate back to the root project directory: `cd ..`
    *   Start the development servers for both the client and server:
        ```bash
        npm run dev
        ```

6.  **Open the app!**
    *   Your browser should automatically open to `http://localhost:5173` (or the next available port).

---

## 🔮 Future Roadmap

This project has a bright future! Here are some features on the horizon:

*   [ ] **Merging Thoughts:** Select multiple related thoughts and merge them into a single, cohesive note.
*   [ ] **Advanced Tagging:** Add multiple custom tags to thoughts for even more granular organization.
*   [ ] **Set Reminders:** Attach a due date or reminder to a thought and receive a notification.

---

## 📄 License

This project is proudly licensed under the MIT License. See the `LICENSE` file for details.

---

*This project was designed and developed with professional standards. Ready for the next challenge!*