# 🎨 Image Gallery
A lightweight, responsive web gallery featuring dynamic category filtering, a seamless lightbox modal, keyboard navigation, and a custom inline SVG background.


## ⚡ Key Features
* **Dynamic Filtering:** Filter gallery items instantly without page reloads.
* **Full-Screen Lightbox:** Modal view supporting Next/Previous cycling through currently visible items.
* **Keyboard Shortcuts:** Built-in support for `Esc` (Close), `←` (Previous), and `→` (Next).
* **Hand-Coded SVG Background:** Features a custom, lightweight SVG pattern generated entirely in code to avoid extra HTTP requests.
* **Responsive Layout:** Adaptive multi-column grid powered by CSS Grid and Flexbox.


## 🛠️ Tech Stack
* **HTML5** – Semantic element structure.
* **CSS3** – CSS Grid, Flexbox, custom media queries, and inline SVG data URIs.
* **JavaScript (ES6+)** – Vanilla JS for DOM updates, event handling, and state management.


## 📂 Project Structure
index.html       # Markup for gallery and lightbox modal
style.css        # Layout, custom theme, and inline SVG pattern
script.js        # Filtering logic and modal interaction


## 💡 What I Learned
* **Generating & Embedding SVGs:** Learned how to create custom inline SVG vectors directly in CSS using `data:image/svg+xml`. This reduced external image requests while maintaining sharp background patterns at any screen resolution.
* **Array State Tracking:** Dynamic array synchronization to ensure lightbox navigation only loops through active, non-hidden items.
* **Accessible UI Flow:** Toggling layout scroll-locks when modals are open and respecting `prefers-reduced-motion` settings.


## 🔗 Links
* **Live Site:** https://swastika2209.github.io/codealpha_tasks1/
* **Source Code:** https://github.com/swastika2209/codealpha_tasks1
