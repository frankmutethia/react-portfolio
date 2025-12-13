# React Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with dark/light theme support
- 📱 Fully responsive design
- ⚡ Built with Vite for fast development and builds
- 🎭 Smooth animations and transitions
- 🧩 Component-based architecture with shadcn/ui
- 📝 TypeScript for type safety

## Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **React Router** - Client-side routing
- **next-themes** - Theme management
- **Lottie React** - Animations

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd react-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/       # React components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── ui/          # shadcn/ui components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── assets/          # Images and static assets
└── App.tsx          # Root component
```

## Customization

1. **Personal Information**: Update the content in:
   - `src/components/Hero.tsx` - Name, title, bio
   - `src/components/About.tsx` - About section
   - `src/components/Experience.tsx` - Work experience
   - `src/components/Projects.tsx` - Project showcase
   - `src/components/Contact.tsx` - Contact information

2. **Styling**: Modify colors and themes in `src/index.css`

3. **Images**: Replace images in `src/assets/` with your own

## Deployment

Build the project for production:

```bash
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any other static hosting service

## License

MIT
