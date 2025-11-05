# Personal Portfolio Website

A modern, customizable portfolio website inspired by minimalist design principles. Built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **🎨 Clean Design**: Minimalist black theme with card-based layout
- **📱 Fully Responsive**: Looks great on all devices
- **⚡ Easy to Edit**: All content in one centralized config file
- **🔌 Dynamic APIs**: Live data from GitHub and Letterboxd
- **🎬 Letterboxd Integration**: Automatically fetches your recent movie watches with posters and ratings
- **💻 GitHub Integration**: Shows real-time commits and activity
- **🏢 Company Logos**: Automatic logo fetching from Clearbit API
- **🗺️ Interactive Map**: Dark themed map showing your location
- **🕐 Live Clock**: Displays current time in your timezone
- **🎭 GLSL Shader Hero**: Custom WebGL shader with flowing organic patterns
- **🎯 Work Experience**: Professional journey with company branding

## 🚀 Quick Start

### 1. Install Dependencies

```bash
bun install
```

### 2. Run Development Server

```bash
bun run dev
```

The website will be available at `http://localhost:3000`

### 3. Customize Your Content

**All content is in ONE file**: `src/config/portfolio-data.ts`

Open this file and update:
- Personal information (name, tagline, location)
- Social links (GitHub, LinkedIn, Twitter)
- Work experience
- GitHub repositories
- Movies you've watched
- About me sections
- Map location

📖 **See [CONTENT-GUIDE.md](./CONTENT-GUIDE.md) for detailed editing instructions**

## 📁 Project Structure

```
evan-portfolio/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx           # Main page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── hero-section.tsx   # Hero with background
│   │   ├── experience-card.tsx
│   │   ├── github-card.tsx
│   │   ├── movies-card.tsx
│   │   ├── clock-card.tsx
│   │   ├── about-card.tsx
│   │   └── map-card.tsx
│   └── config/
│       └── portfolio-data.ts  # ⭐ EDIT THIS FILE!
├── public/                    # Static assets
│   └── hero-bg.jpg           # Hero background image
└── CONTENT-GUIDE.md          # Content editing guide
```

## 🎨 Customization

### Change Hero Background

1. Add your image to `public/` folder
2. Edit `src/components/hero-section.tsx`
3. Update the `backgroundImage` URL

### Change Colors/Theme

Edit Tailwind colors in:
- `src/app/globals.css` (CSS variables)
- `tailwind.config.ts` (Theme config)

### Add/Remove Sections

Edit the grid layout in `src/app/page.tsx`

## 🛠️ Built With

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Leaflet** - Interactive maps
- **Geist Font** - Typography
- **Bun** - Package manager & runtime

## 📦 Deployment

### Deploy to Netlify

1. Build the project:
   ```bash
   bun run build
   ```

2. Deploy the `out/` folder to Netlify

Or use the automated deployment:
```bash
bun run deploy
```

## 🎯 Content Management

All editable content is centralized in `src/config/portfolio-data.ts`:

- ✅ Personal info
- ✅ Social links
- ✅ Work experience
- ✅ GitHub repos
- ✅ Movies/TV shows
- ✅ About sections
- ✅ Map location

**No need to edit component files!** Just update the config and you're done.

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Made with ❤️ using Same.new
