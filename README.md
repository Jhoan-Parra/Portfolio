# 🚀 Jhoan | Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Modern, responsive portfolio with galaxy-themed aesthetics built with React, Vite, and Tailwind CSS.**

[🌐 Live Demo](#) · [📧 Contact](mailto:jhoan.dev@email.com) · [🐛 Report Bug](../../issues)

</div>

---

## ✨ Features

- 🎨 **Galaxy-themed design** with animated particle background
- 📱 **Fully responsive** — looks great on mobile, tablet, and desktop
- ⚡ **Blazing fast** — powered by Vite for instant HMR and optimized builds
- 🧩 **Modular architecture** — clean, reusable React components
- 🌙 **Dark mode aesthetic** with glassmorphism effects
- 🎯 **SEO optimized** with proper meta tags and semantic HTML

## 🛠️ Tech Stack

| Category       | Technology                  |
| -------------- | --------------------------- |
| **Framework**  | React 19                    |
| **Build Tool** | Vite 6                      |
| **Styling**    | Tailwind CSS 4              |
| **Fonts**      | Inter, Space Grotesk        |
| **Deployment** | Vercel                      |

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionWrapper.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (included with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/jhoan/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
# Generate the optimized production build
npm run build

# Preview the production build locally
npm run preview
```

## 🌐 Deploy on Vercel

This project is pre-configured for seamless deployment on **Vercel**.

### Option 1 — Import from Git (recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub / GitLab / Bitbucket repository
3. Vercel will auto-detect the Vite framework and apply the correct settings
4. Click **Deploy** — that's it! 🎉

### Option 2 — Vercel CLI

```bash
# Install the Vercel CLI globally
npm i -g vercel

# Deploy from the project root
vercel
```

### Configuration

The `vercel.json` file included in this project handles:

- ✅ SPA client-side routing (all routes redirect to `index.html`)
- ✅ Security headers (XSS protection, content type sniffing, clickjacking)
- ✅ Aggressive caching for static assets in `/assets/`
- ✅ Clean URLs without `.html` extensions

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with 💜 by <strong>Jhoan</strong>
</div>
