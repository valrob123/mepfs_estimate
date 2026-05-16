# Engineer Portfolio Website

A modern, professional portfolio website for engineers built with React + Vite.

## 🚀 Features

- Modern, responsive design
- Smooth animations and transitions
- Professional color scheme
- Mobile-friendly layout
- Print-ready sections
- Fast performance with Vite
- Clean component architecture
- SEO optimized

## 📋 Prerequisites

Before you begin, ensure you have installed:
- Node.js (LTS version recommended - v18 or higher)
- npm (comes with Node.js)
- Git

## 🛠️ Installation & Setup

### Step 1: Extract the Project
Extract the `engineer-portfolio` folder to your desired location.

### Step 2: Navigate to Project Directory
```bash
cd engineer-portfolio
```

### Step 3: Install Dependencies
```bash
npm install
```

This will install all required packages including:
- React
- React DOM
- Vite
- Lucide React (icons)
- React Icons

### Step 4: Start Development Server
```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:3000`

## 📁 Project Structure

```
engineer-portfolio/
├── node_modules/          # Dependencies (created after npm install)
├── public/               # Public assets
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Experience.jsx
│   │   ├── Experience.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx           # Main App component
│   ├── App.css           # App styles
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
├── .gitignore            # Git ignore rules
├── index.html            # HTML template
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🎨 Customization

### Update Your Information

1. **Personal Details** - Edit `src/components/Hero.jsx`:
   - Replace "Your Name" with your actual name
   - Update the professional title
   - Modify the description

2. **About Section** - Edit `src/components/About.jsx`:
   - Update your bio and experience
   - Modify statistics (years, projects, satisfaction rate)

3. **Skills** - Edit `src/components/Skills.jsx`:
   - Add/remove skill categories
   - Update technical proficiency levels

4. **Projects** - Edit `src/components/Projects.jsx`:
   - Add your actual projects
   - Update descriptions and technologies
   - Add project links

5. **Experience** - Edit `src/components/Experience.jsx`:
   - Add your work history
   - Update job titles and descriptions

6. **Contact** - Edit `src/components/Contact.jsx`:
   - Update email address
   - Modify contact form endpoint
   - Add social media links

### Customize Colors

Edit CSS variables in `src/index.css`:
```css
:root {
  --color-navy: #0A2647;
  --color-electric-blue: #2C74B3;
  --color-sky-blue: #144272;
  /* Modify these to your preferred colors */
}
```

### Add Your Photo

Replace the placeholder in `src/components/Hero.jsx`:
1. Add your photo to `public/` folder
2. Import and use it in the Hero component

## 🏗️ Build for Production

Create an optimized production build:
```bash
npm run build
```

The build files will be in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Deploy

### GitHub Pages
```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Run:
```bash
npm run deploy
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🔧 Git Setup

### Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Engineer portfolio website"
```

### Connect to GitHub
```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🖨️ Print Optimization

The website includes print-optimized styles for creating PDF versions of your portfolio.

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use, modify `vite.config.js`:
```javascript
server: {
  port: 3001, // Change to any available port
  open: true
}
```

### Module Not Found Errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Ensure you're using Node.js LTS version:
```bash
node --version  # Should be v18 or higher
```

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section
2. Review component documentation in code comments
3. Ensure all dependencies are properly installed

## 🎯 Next Steps

1. Customize content with your information
2. Add your actual projects and experience
3. Upload your professional photo
4. Test on multiple devices
5. Deploy to production
6. Share your portfolio!

---

**Happy Coding! 🚀**
