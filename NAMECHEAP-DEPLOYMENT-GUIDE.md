# 🚀 Deploy Birding with Cob to Namecheap Hosting

## Option 1: Shared Hosting with Node.js (Budget-Friendly)

### Prerequisites
- Namecheap shared hosting plan with Node.js support
- Domain connected to hosting
- cPanel access

### Step 1: Prepare Your App for Deployment

1. **Create a production build:**
```bash
cd wingquest
npm run build
```

2. **Create a server.js file** (required for shared hosting):
```javascript
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
```

3. **Update package.json scripts:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "node server.js",
    "lint": "next lint"
  }
}
```

### Step 2: Upload to Namecheap

1. **Login to cPanel**
2. **Find "Setup Node.js App"** in the Software section
3. **Click "Create Application"**
4. **Configure:**
   - **Node.js version:** Latest available (14+ recommended)
   - **Application root:** `/public_html` (or subdomain folder)
   - **Application URL:** Your domain
   - **Application startup file:** `server.js`
   - **Environment:** `production`

5. **Upload your files** via File Manager or FTP:
   - All project files except `node_modules`
   - Include: `package.json`, `server.js`, `.next/`, `public/`, `src/`

### Step 3: Install Dependencies

1. **Open Terminal** in cPanel (or use the Node.js app terminal)
2. **Navigate to your app directory:**
```bash
cd /home/yourusername/public_html
```

3. **Install dependencies:**
```bash
npm install
```

4. **Build the app** (if not done locally):
```bash
npm run build
```

### Step 4: Start Your App

1. **In the Node.js App interface**, click "Start App"
2. **Your app should now be running** at your domain!

### Step 5: Environment Variables

1. **In cPanel Node.js App**, add environment variables:
   - `NODE_ENV=production`
   - `PORT=3000` (or assigned port)

## Option 2: VPS Hosting (Recommended)

### Why VPS is Better:
- ✅ Full Node.js control
- ✅ Latest versions
- ✅ Better performance
- ✅ Process managers (PM2)
- ✅ SSL certificates
- ✅ Custom domains

### VPS Setup Steps:

1. **Order Namecheap VPS** ($6.88/month+)
2. **Install Node.js:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. **Install PM2** (process manager):
```bash
sudo npm install -g pm2
```

4. **Upload and setup your app:**
```bash
git clone your-repo
cd birding-with-cob
npm install
npm run build
```

5. **Start with PM2:**
```bash
pm2 start npm --name "birding-app" -- start
pm2 startup
pm2 save
```

6. **Setup Nginx** (reverse proxy):
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔧 Troubleshooting Common Issues

### Shared Hosting Issues:

**App won't start:**
- Check Node.js version compatibility
- Verify `server.js` exists and is correct
- Check error logs in cPanel

**API routes not working:**
- Ensure all API files are uploaded
- Check file permissions (755 for directories, 644 for files)

**Images not loading:**
- Upload images to `public/uploads/` folder
- Check file paths are correct

**Memory issues:**
- Optimize your build size
- Consider VPS if app is too large

### Performance Optimization:

1. **Enable compression** in next.config.js:
```javascript
const nextConfig = {
  compress: true,
  images: {
    unoptimized: true
  }
}
```

2. **Optimize images** before uploading
3. **Use CDN** for static assets if needed

## 📊 Cost Comparison

| Option | Monthly Cost | Pros | Cons |
|--------|-------------|------|------|
| **Shared Hosting** | $2-5 | Cheap, Easy setup | Limited resources, restrictions |
| **VPS** | $7-15 | Full control, Better performance | Requires server management |
| **Vercel** | $0-20 | Zero config, Great performance | Can get expensive with usage |

## 🎯 Recommendation

**For Birding with Cob:**
- **Start with Shared Hosting** if budget is tight
- **Upgrade to VPS** when you need better performance
- **Consider Vercel** for zero-maintenance deployment

Your app should work well on Namecheap shared hosting since it's not too resource-intensive!
