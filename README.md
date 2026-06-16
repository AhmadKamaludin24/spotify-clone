# Spotify Clone UI 🎵

A beautiful and responsive user interface clone of Spotify, focused on delivering a premium, modern design. Built as a "slicing design" project to practice and demonstrate advanced UI development skills using React and Tailwind CSS.

## ✨ Features

- **Modern & Premium Design**: Replicates the dark, sleek aesthetic of Spotify.
- **Dynamic Music Carousel**: Smooth, scrollable horizontal list of trending songs and artists with hover animations.
- **Real-time API Integration (Dummy Data)**: Implements iTunes API data to fetch and display high-quality cover arts, titles, and artists seamlessly without 404 broken images.
- **Micro-interactions**: Subtle hover effects (e.g., play button reveal, card scale) to make the interface feel alive.
- **Custom Scrollbars**: Hidden scrollbars (`hide-scrollbar`) for a cleaner look.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/) (with TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Source**: Custom JSON integrated with Apple Music/iTunes API for cover images.

## 📂 Folder Structure

```text
src/
├── components/
│   ├── MusicCard.tsx      # Individual song/artist card component with hover effects
│   └── MusicCarousel.tsx  # Horizontal scrolling carousel wrapper
├── data/
│   └── songs.json         # Dummy data containing songs and cover URLs
├── lib/
│   └── api.ts             # API utilities
├── pages/
│   ├── HomePage.tsx       # Main dashboard/home screen
│   └── Layout.tsx         # Global app layout
├── index.css              # Global styles & Tailwind directives
```

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Spotify
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App
To start the development server, run:
```bash
npm run dev
```
Then, open your browser and visit the local URL provided in your terminal (usually `http://localhost:5173`).

## 🎨 Design Focus
This project strongly emphasizes **Aesthetics and User Experience (UX)**. Special attention was given to:
- Creating a harmonious dark mode color palette.
- Using dynamic hover states to encourage interaction.
- Structuring a clean and maintainable component hierarchy.
