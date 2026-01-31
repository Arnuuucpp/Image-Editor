🎨 Image Editor Web App
A modern, browser-based image editing web application built using HTML, CSS, and Vanilla JavaScript. This project focuses on clean UI, state-driven JavaScript logic, and real-world image editing features without using any external libraries.

🚀 Live Demo
👉 Vercel Link:
[ Add your Vercel deployment link here ]

📸 Screenshots
[ Screenshot 1 – Editor UI ]
[ Screenshot 2 – Filters & Presets ]
[ Screenshot 3 – Image Upload & Preview ]

✨ Features
📤 Upload and preview images
🎚️ Real-time image filters (Brightness, Contrast, Saturation, Blur)
🎨 One-click professional presets
🔄 Reset image to default state
📥 Download edited image
🚫 Smart disabled controls before image upload
💡 Clean UI with glassmorphism effect
⚡ Fast and lightweight (no frameworks)

🧠 Core JavaScript Logic (How It Works)
1. State-Based Architecture

The entire editor is driven by JavaScript state, not direct DOM manipulation.
imageLoaded → Controls whether features are enabled
filters object → Stores current filter values
activePreset → Tracks selected preset
UI always reflects the current state.

2. Filter System

Sliders update the filters object
A single applyFilters() function applies changes to the image
Prevents duplicated logic and keeps code clean

3. Presets

Presets are predefined filter objects
Clicking a preset:
Updates filter state
Updates slider UI
Highlights active preset
Presets do not directly manipulate the DOM

4. Disabled Controls Logic

Filters, reset, and download buttons remain disabled until an image is uploaded
Improves UX and prevents invalid actions

5. Download Feature

Edited image is rendered on a canvas
Filters are applied programmatically
Final image is exported and downloaded

🛠️ Tech Stack

HTML5
CSS3
Vanilla JavaScript
Canvas API
No frameworks. No libraries. Pure fundamentals.

📂 Project Structure
├── index.html
├── style.css
├── theme.css
├── script.js
└── img/


📌 Future Improvements


Before / After comparison
Crop & rotate tools
Keyboard shortcuts
React version of the editor

...........................................................................................

THANK YOUUU!!