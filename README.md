# ZEditor - Web-based Code Editor

A powerful web-based code editor inspired by VSCode, built with Next.js and Monaco Editor.

![ZEditor](https://img.shields.io/badge/ZEditor-v1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black)
![Monaco Editor](https://img.shields.io/badge/Monaco-0.45.0-blue)

## ✨ Features

- 📝 **Monaco Editor** - The same editor that powers VSCode
- 🎨 **Syntax Highlighting** - Support for TypeScript, JavaScript, HTML, CSS, JSON, Markdown, and more
- 📁 **File Explorer** - Navigate your project structure with an intuitive tree view
- 🔍 **Search Panel** - Search across files (UI ready)
- 🧩 **Extensions Panel** - Manage editor extensions
- ⚙️ **Settings** - Customize your editor experience
- 🌐 **No Backend Required** - Pure frontend application that runs entirely in the browser
- ⚡ **Fast & Responsive** - Built with Next.js for optimal performance
- 🎯 **VSCode-like Experience** - Familiar interface for developers

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📦 Deploy to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/zeditor-web)

### Manual Deploy

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

That's it! Vercel will automatically detect Next.js and deploy your app.

### Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Editor**: [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **Styling**: CSS Modules
- **Deployment**: [Vercel](https://vercel.com)

## 📂 Project Structure

```
zeditor-web/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Editor.tsx          # Main editor component
│   ├── TitleBar.tsx        # Top title bar
│   ├── ActivityBar.tsx     # Left icon sidebar
│   ├── Sidebar.tsx         # File explorer & panels
│   ├── EditorArea.tsx      # Monaco editor container
│   ├── StatusBar.tsx       # Bottom status bar
│   └── *.module.css        # Component styles
├── public/                 # Static assets
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🎨 Customization

### Theme Colors

Edit color variables in `app/globals.css`:

```css
:root {
  --bg-0: #0d1117;
  --bg-1: #161b22;
  --accent: #2f81f7;
  /* ... */
}
```

### Editor Options

Modify Monaco options in `components/EditorArea.tsx`:

```typescript
options={{
  fontSize: 14,
  fontFamily: "'JetBrains Mono', monospace",
  minimap: { enabled: true },
  // ...
}}
```

## 🔧 Environment Variables

No environment variables required! This is a pure frontend app.

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Known Limitations

- **No File System Access**: This is a browser-based editor. Files exist only in memory.
- **No Git Integration**: Git operations require backend support.
- **Limited Search**: Search functionality is UI-only (can be extended).

## 🔮 Future Enhancements

- [ ] LocalStorage persistence for files
- [ ] Import/Export files
- [ ] Multiple editor layouts (split view)
- [ ] Terminal emulator
- [ ] Theme customization UI
- [ ] Keyboard shortcuts panel
- [ ] File upload/download
- [ ] Collaborative editing (with backend)

## 💡 Usage Tips

1. **Open Files**: Click on files in the Explorer panel
2. **Close Tabs**: Click the × button or use middle-click
3. **Switch Panels**: Use the Activity Bar icons on the left
4. **Edit Code**: Full IntelliSense and syntax highlighting
5. **Dirty Indicator**: ● shows unsaved changes

## 📞 Support

For issues and questions, please open an issue on GitHub.

## 🎉 Acknowledgments

- Monaco Editor team at Microsoft
- VSCode for design inspiration
- Next.js team for the amazing framework

---

**Made with ❤️ using Next.js and Monaco Editor**
