# ZEditor - Deployment Guide

Complete guide to deploy ZEditor to Vercel.

## 🚀 Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js application.

### Method 1: One-Click Deploy (Fastest)

1. Click the "Deploy to Vercel" button in README
2. Authorize Vercel to access your GitHub account
3. The project will be automatically deployed
4. Your app will be live at: `https://your-project.vercel.app`

### Method 2: GitHub Integration

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/zeditor-web.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: `Next.js` (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your app is live! 🎉

### Method 3: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # First deployment (will ask configuration questions)
   vercel
   
   # Deploy to production
   vercel --prod
   ```

4. **Your app will be deployed to:**
   - Preview: `https://zeditor-web-xxx.vercel.app`
   - Production: `https://zeditor-web.vercel.app`

## 🌐 Custom Domain Setup

### On Vercel:

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain (e.g., `editor.yourdomain.com`)
4. Follow DNS configuration instructions
5. Wait for SSL certificate (automatic, ~1 minute)

### DNS Configuration:

**For root domain (example.com):**
```
A Record: 76.76.21.21
```

**For subdomain (editor.example.com):**
```
CNAME: cname.vercel-dns.com
```

## ⚙️ Environment Variables

ZEditor doesn't require any environment variables since it's a pure frontend app!

If you add backend features later, you can add them in Vercel:
1. Go to Project Settings
2. Click "Environment Variables"
3. Add your variables
4. Redeploy

## 🔧 Build Configuration

### Build Command
```bash
npm run build
```

### Output Directory
```
.next
```

### Node Version
The project uses Node.js 18+ (defined in package.json engines if needed)

### Install Command
```bash
npm install
```

## 📊 Performance Optimization

Vercel automatically provides:
- ✅ Edge CDN (global distribution)
- ✅ Image optimization
- ✅ Automatic HTTPS
- ✅ Gzip/Brotli compression
- ✅ HTTP/2 & HTTP/3
- ✅ Serverless functions (if needed)

## 🔄 Continuous Deployment

Every push to your main branch will:
1. Trigger automatic build
2. Run tests (if configured)
3. Deploy to production
4. Update your live site

Preview deployments for pull requests are also automatic!

## 🐛 Troubleshooting

### Build Fails

**Error: Cannot find module 'next'**
```bash
# Solution: Ensure dependencies are in package.json
npm install
```

**Error: Monaco editor not loading**
```bash
# Solution: Check webpack config in next.config.js
# Ensure SSR is disabled for Monaco components
```

### Deployment Issues

**Build succeeds but app doesn't load**
- Check browser console for errors
- Verify all imports use correct paths
- Ensure no server-only code in client components

**Monaco editor shows blank screen**
- This is normal on first load (CDN loading)
- Editor loads from CDN after page load
- Add loading state (already implemented)

## 📱 Other Deployment Options

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next

# Functions directory (optional)
netlify/functions
```

### Cloudflare Pages

1. Connect your GitHub repo
2. Build command: `npm run build`
3. Build output directory: `.next`
4. Deploy

### Self-Hosted

```bash
# Build
npm run build

# Start production server
npm start

# Or use PM2
pm2 start npm --name "zeditor" -- start
```

### Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
docker build -t zeditor .
docker run -p 3000:3000 zeditor
```

## 🔐 Security Best Practices

1. **Content Security Policy** - Already configured in next.config.js
2. **HTTPS Only** - Automatic with Vercel
3. **No Sensitive Data** - Pure frontend, no backend secrets
4. **XSS Protection** - React/Next.js handles this
5. **Regular Updates** - Keep dependencies updated

## 📈 Monitoring

### Vercel Analytics (Built-in)
- Page views
- Performance metrics
- Error tracking
- Geographic distribution

### Add Custom Analytics (Optional)

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🎯 Production Checklist

- [ ] Test locally with `npm run build && npm start`
- [ ] Remove console.logs from production code
- [ ] Optimize images (if any)
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Set up custom domain (optional)
- [ ] Configure analytics (optional)
- [ ] Set up error monitoring (optional)
- [ ] Add SEO meta tags (optional)

## 🆘 Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Monaco Editor**: https://microsoft.github.io/monaco-editor/

## 🎉 Success!

After deployment, your ZEditor will be accessible at:
- **Production**: `https://your-project.vercel.app`
- **Custom Domain**: `https://your-domain.com` (if configured)

Share your editor with the world! 🌍

---

**Happy Coding!** 🚀
