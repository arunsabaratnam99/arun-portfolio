# Arun's Portfolio

A modern, dynamic portfolio website built with Next.js 15, featuring live integrations with GitHub, Letterboxd, LeetCode, and automatic company logo fetching.

## ✨ Features

- 🎬 **Letterboxd Integration** - Automatically displays recent movie watches
- 💻 **GitHub Integration** - Shows recent commits and activity
- 📊 **LeetCode Stats** - Displays coding problem-solving stats
- 🏢 **Company Logos** - Fetches company logos from Brandfetch API
- 🗺️ **Interactive Map** - Mapbox integration showing your location
- ⏰ **Live Clock** - Real-time clock with your timezone
- 🎨 **Shader Background** - Beautiful animated WebGL background

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/arunsabaratnam99/arun-portfolio.git
   cd arun-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables** (optional but recommended)
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` and add your Brandfetch API key for better logo loading.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Customization

All content is centralized in one file: `src/config/portfolio-data.ts`

See the [CONTENT-GUIDE.md](./CONTENT-GUIDE.md) for detailed instructions on customizing:
- Personal information
- Social links
- Work experience
- Projects
- Skills
- And more!

## 🔑 API Keys

### Brandfetch (Optional, Recommended)
For automatic company logo fetching:
1. Sign up at [brandfetch.com](https://brandfetch.com/)
2. Get your free API key
3. Add to `.env.local`: `BRANDFETCH_API_KEY=your_key_here`

Without an API key, company logos will gracefully fall back to colorful initial badges.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with Turbopack
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **APIs**: GitHub, Letterboxd RSS, LeetCode, Brandfetch
- **Maps**: Mapbox GL
- **3D Graphics**: WebGL/GLSL shaders

## 📦 Deployment

### Netlify (Recommended)
1. Push your changes to GitHub
2. Connect your repo to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy!

The site is configured for Netlify in `netlify.toml`.

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 🤝 Contributing

Feel free to open issues or submit PRs if you find bugs or have improvements to suggest.