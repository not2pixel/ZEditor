# ZEditor - Quick Start Guide

Get your web-based code editor running in 3 minutes!

## 🚀 Option 1: Deploy to Vercel (No Local Setup)

**Fastest way - Just 3 clicks!**

1. **Extract the zip file**
   ```bash
   unzip zeditor-web.zip
   cd zeditor-web
   ```

2. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/zeditor-web.git
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select `zeditor-web`
   - Click "Deploy"
   
   ✅ Done! Your editor is live in ~2 minutes

## 💻 Option 2: Run Locally

**For local development:**

```bash
# 1. Extract files
unzip zeditor-web.zip
cd zeditor-web

# 2. Install dependencies (takes ~1 minute)
npm install

# 3. Run development server
npm run dev
```

**Open http://localhost:3000** 🎉

## 📦 What's Included

```
zeditor-web/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Editor.tsx         # Main editor logic
│   ├── TitleBar.tsx       # Top bar
│   ├── ActivityBar.tsx    # Left sidebar icons
│   ├── Sidebar.tsx        # File explorer & panels
│   ├── EditorArea.tsx     # Monaco editor
│   └── StatusBar.tsx      # Bottom bar
├── public/                # Static files
│   └── favicon.svg        # ZEditor logo
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── next.config.js         # Next.js config
└── README.md             # Full documentation
```

## ✨ Features Ready to Use

- ✅ Monaco Editor (VSCode's editor)
- ✅ Syntax highlighting (TS, JS, HTML, CSS, JSON, MD)
- ✅ File explorer with folder tree
- ✅ Tab management
- ✅ Search panel (UI ready)
- ✅ Extensions panel
- ✅ Settings panel
- ✅ Status bar with file info
- ✅ Dark theme (GitHub style)
- ✅ Responsive design

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start           # Start production server

# Deploy
vercel              # Deploy to Vercel (requires Vercel CLI)
vercel --prod       # Deploy to production
```

## 🌐 Deploy to Other Platforms

### Netlify
1. Connect repository
2. Build: `npm run build`
3. Publish: `.next`

### Cloudflare Pages
1. Connect repository
2. Build: `npm run build`
3. Output: `.next`

### Self-Hosted
```bash
npm run build
npm start
# Or with PM2
pm2 start npm --name "zeditor" -- start
```

## 🎯 First Steps After Deployment

1. **Open your editor** at your Vercel URL
2. **Click files** in the Explorer panel to edit
3. **Try the Monaco editor** - full IntelliSense!
4. **Switch panels** using Activity Bar icons
5. **Customize settings** in the Settings panel

## 📝 Customize Your Editor

### Change Theme Colors
Edit `app/globals.css`:
```css
:root {
  --bg-0: #0d1117;        /* Background color */
  --accent: #2f81f7;      /* Accent color */
  --text-primary: #e6edf3; /* Text color */
}
```

### Change Editor Font
Edit `components/EditorArea.tsx`:
```typescript
fontFamily: "'Your Font', monospace"
```

### Add More Sample Files
Edit `components/Editor.tsx` in the `useEffect` hook

## 🐛 Troubleshooting

**Editor not loading?**
- Clear browser cache
- Check browser console for errors
- Monaco loads from CDN (may take a few seconds)

**Build fails?**
- Delete `node_modules` and `.next`
- Run `npm install` again
- Run `npm run build`

**Can't deploy to Vercel?**
- Check you're logged in: `vercel login`
- Check project is pushed to GitHub
- Verify `package.json` exists

## 📚 Learn More

- **Full README**: See `README.md` for complete documentation
- **Deployment Guide**: See `DEPLOYMENT.md` for detailed deploy instructions
- **Next.js Docs**: https://nextjs.org/docs
- **Monaco Editor**: https://microsoft.github.io/monaco-editor/

## 🆘 Need Help?

1. Check the browser console for errors
2. Read `README.md` for detailed info
3. Read `DEPLOYMENT.md` for deployment help
4. Open an issue on GitHub

## 🎉 You're Ready!

Your web-based code editor is:
- ✅ Built with modern tech (Next.js + Monaco)
- ✅ Ready to deploy (no backend needed)
- ✅ Fully functional (edit code now!)
- ✅ Customizable (change anything!)

**Enjoy coding in the browser!** 🚀

---

**Time to first deployment: ~3 minutes** ⚡
