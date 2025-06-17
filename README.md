# 🧠 Brain Dump Organizer v2.0 ✨

**Capture every fleeting thought. Find anything, instantly. Your second brain, automatically sorted.**

---

## 🚀 Live Demo in Action!

This project is fully deployed and live for you to test. Click the preview below to see it in action!

<a href="https://brain-dump-v2.netlify.app/" target="_blank">
  <img src="https://img.shields.io/badge/LIVE%20DEMO-Click%20to%20Launch!-brightgreen?style=for-the-badge&logo=netlify" alt="Live Demo on Netlify">
</a>
<br>
<a href="https://brain-dump-v2.netlify.app/" target="_blank">
  <img src="https://user-images.githubusercontent.com/10996454/203243129-4e781474-2795-4a25-a13f-561494a85810.gif" alt="App Preview GIF">
</a>
*(Note: The backend is on a free-tier server, so the first categorization might take 30-60 seconds to "wake up" the server. Subsequent requests will be fast!)*

---

## ✅ Key Features

This isn't just a simple notepad. It's a powerhouse of features designed for productivity:

*   **AI-Powered Categorization:** Just write down a thought, and the app's AI engine automatically assigns a relevant category.
*   🧠 **AI-Generated Summaries:** With a single click, generate a concise summary for all the thoughts within a specific category.
*   🔍 **Instant Search & Filtering:** A powerful search bar and dynamic category filters allow you to find any thought in seconds.
*   📌 **Pinning for Priority:** Pin your most important thoughts to keep them at the top.
*   ✍️ **Full CRUD Functionality:** Seamlessly **C**reate, **R**ead, **U**pdate, and **D**elete your thoughts.
*   🎨 **Sleek UI with Dark Mode:** A beautifully designed interface with both light and dark themes.
*   💾 **Offline-First Architecture:** Built with IndexedDB, the app works perfectly even without an internet connection.
*   📤 **Export to Markdown:** Your data is yours. Export all your thoughts into a neatly organized Markdown file.
*   ✨ **Slick Animations:** The UI is brought to life with smooth animations powered by Framer Motion.

---

## 🛠️ Tech Stack & Deployment

This project is built with a modern, robust, and scalable tech stack, deployed on a world-class, free-tier infrastructure.

*   **Frontend:**
    *   **Framework:** [React](https://reactjs.org/) & [Vite](https://vitejs.dev/)
    *   **State Management:** [Zustand](https://github.com/pmndrs/zustand)
    *   **Offline Storage:** [Dexie.js](https://dexie.org/)
    *   **Deployment:** **[Netlify](https://www.netlify.com/)** - Deployed via their seamless GitHub integration for continuous deployment.
*   **Backend:**
    *   **Framework:** [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/)
    *   **Deployment:** **[Render](https://render.com/)** - Hosted as a free-tier Web Service, perfect for scalable and reliable API hosting.
*   **AI Service:**
    *   **Gateway:** [OpenRouter API](https://openrouter.ai/)
    *   **Model:** `google/gemini-flash-1.5`

---

## 🏁 Getting Started Locally

Want to run the project on your own machine? It's simple.

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
    *   Navigate into the `server` directory and copy `.env.example` to `.env`.
    *   Add your own OpenRouter API key.

5.  **Run the application locally:**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173`.

---

## 🔮 Future Roadmap

This project has a bright future! Here are some features on the horizon:

*   [ ] **Merging Thoughts:** Select multiple related thoughts and merge them into a single, cohesive note.
*   [ ] **Advanced Tagging:** Add multiple custom tags to thoughts for even more granular organization.
*   [ ] **Set Reminders:** Attach a due date or reminder to a thought and receive a notification.

---

## 📄 License

This project is proudly licensed under the MIT License.

---

*A huge thank you to the teams at Netlify and Render for providing the incredible free-tier platforms that make hosting modern full-stack applications accessible to everyone.*