# Portfolio Content Guide

This guide explains how to easily customize all content on your portfolio website.

## 📝 Editing Your Content

All portfolio content is centralized in **one single file**: `src/config/portfolio-data.ts`

This makes it incredibly easy to update your information without touching any component code!

---

## 🔌 **DYNAMIC FEATURES**

Your portfolio now includes several **automatic integrations** that pull live data:

### 🎬 Letterboxd Integration
- **Automatically fetches** your recent movie watches from Letterboxd
- Shows movie posters, ratings, and watch dates
- Updates every hour automatically
- **Setup**: Just add your Letterboxd username in the config file

### 💻 GitHub Integration
- **Automatically fetches** your recent commits and activity
- Shows repository names, commit messages, and timestamps
- Updates every 5 minutes
- **Setup**: Just add your GitHub username in the config file

### 🏢 Company Logos
- **Automatically fetches** company logos from Clearbit
- Displays logos next to your work experience
- Falls back to company initials if logo not found
- **Setup**: Add company domain (e.g., "google.com") in the config

---

## 🎯 What You Can Edit

### 1. Personal Information

```typescript
personal: {
  name: "ARUN SABARATNAM",              // Your name (shown in hero)
  tagline: "...",                        // Main tagline under your name
  subtitle: "...",                       // Optional second line
  location: "Ottawa, ON",                // Your city/location
  email: "asaba059@uottawa.ca",         // Your email
  timezone: "America/Toronto",           // Your timezone (for clock)
}
```

**Timezone Options**: Use IANA timezone names like:
- `America/New_York`
- `America/Los_Angeles`
- `America/Chicago`
- `Europe/London`
- `Asia/Tokyo`

[Full timezone list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

---

### 2. Social Links & API Integration

```typescript
social: {
  github: {
    url: "https://github.com/arunsabaratnam99",
    username: "arunsabaratnam99",    // 🔌 Used for GitHub API
  },
  linkedin: {
    url: "https://www.linkedin.com/in/arunsabaratnam/",
    username: "arunsabaratnam",
  },
  twitter: {
    url: "https://twitter.com/arunsabaratnam",
    username: "arunsabaratnam",
  },
  letterboxd: {
    username: "arunsa",              // 🔌 Used for Letterboxd RSS feed
    url: "https://letterboxd.com/arunsa/",
  },
}
```

**Important**:
- The GitHub username fetches your public commits automatically
- The Letterboxd username fetches your public watches automatically

---

### 3. Work Experience (with Auto Company Logos!)

```typescript
experience: [
  {
    title: "Software Engineer Intern",     // Your job title
    company: "Tech Company",                // Company name
    url: "https://example.com",            // Company website
    period: "Summer 2025",                 // Time period
    companyDomain: "example.com",          // 🔌 For auto logo fetching
  },
  // Add more experiences...
]
```

**To add more experiences**: Just copy the block and add another entry!

**Company Logo Tips**:
- Use the root domain (e.g., "google.com" not "www.google.com")
- Logos are fetched from Clearbit automatically
- If logo not found, shows company initial (e.g., "G" for Google)

---

### 4. About Me Section

```typescript
about: [
  "i'm interested in software development",
  "i enjoy watching movies",
  "i like to work on coding projects",
  "i study computer science at university",
]
```

Each item becomes a bullet point (automatically prefixed with `-`).

---

### 5. Map Configuration

```typescript
map: {
  center: [45.4215, -75.6972],    // [latitude, longitude]
  zoom: 13,                        // Zoom level (1-20)
  marker: {
    lat: 45.4215,
    lng: -75.6972,
  },
}
```

**How to get coordinates**:
1. Go to [Google Maps](https://maps.google.com)
2. Right-click on your location
3. Click the coordinates to copy them
4. Format as `[latitude, longitude]`

---

## 🎨 Customizing the Hero Background

The hero section features a **custom GLSL shader** written in WebGL that creates flowing, organic patterns!

### Understanding the Shader

The background uses:
- **WebGL/GLSL** for GPU-accelerated rendering
- **Perlin noise** for organic flowing patterns
- **Fractal Brownian Motion (FBM)** for multi-layered depth
- **Real-time animation** that continuously evolves

### Customizing Colors

To change the color palette:

1. Open `src/components/shader-background.tsx`
2. Find the color definitions in the fragment shader:
   ```glsl
   vec3 color1 = vec3(0.10, 0.10, 0.10); // Darkest
   vec3 color2 = vec3(0.16, 0.14, 0.10); // Dark brown
   vec3 color3 = vec3(0.24, 0.19, 0.13); // Medium brown
   vec3 color4 = vec3(0.42, 0.32, 0.20); // Gold-brown
   vec3 color5 = vec3(0.73, 0.65, 0.50); // Lightest gold
   ```
3. Modify these RGB values (range 0.0 to 1.0)

**Example Color Palettes**:
- **Blue Ocean**: `vec3(0.0, 0.1, 0.2)` → `vec3(0.2, 0.4, 0.6)`
- **Purple Twilight**: `vec3(0.1, 0.0, 0.2)` → `vec3(0.5, 0.2, 0.6)`
- **Green Forest**: `vec3(0.05, 0.1, 0.05)` → `vec3(0.2, 0.5, 0.3)`

### Adjusting Animation Speed

To change how fast the patterns move:

1. Find this line: `float t = u_time * 0.08;`
2. Change `0.08` to:
   - Slower: `0.04` (half speed)
   - Faster: `0.16` (double speed)

### Adjusting Pattern Scale

To change the size/density of patterns:

1. Find this line: `vec2 pos = st * 3.0;`
2. Change `3.0` to:
   - Larger patterns: `2.0` or `1.5`
   - Smaller patterns: `4.0` or `5.0`

---

## 🚀 Quick Start

1. **Edit content**: Open `src/config/portfolio-data.ts`
2. **Update usernames**: Add your GitHub and Letterboxd usernames
3. **Update work experience**: Add company domains for logos
4. **Save the file**: The website updates automatically!
5. **Check the preview**: See your dynamic data appear

---

## 💡 Tips

- **GitHub commits** appear within 5 minutes of pushing
- **Letterboxd movies** update within 1 hour of logging
- Keep company domains simple (just "company.com")
- Test timezone changes to ensure clock displays correctly
- Add at least 3-4 work experiences for best visual balance

---

## 🔧 Advanced Customization

### Changing Map Theme
The map uses CartoDB Dark Matter style. To change:
1. Open `src/components/map-card.tsx`
2. Replace the TileLayer URL with another style:
   - Light: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`
   - Satellite: Use Mapbox tiles (requires API key)

### Adjusting Animation Speed
1. Open `src/components/hero-section.tsx`
2. Find `animation: gradientFlow 15s`
3. Change `15s` to faster (e.g., `10s`) or slower (e.g., `20s`)

---

## 🐛 Troubleshooting

**Movies not showing?**
- Verify your Letterboxd username is correct
- Make sure your profile is public
- Check that you have recent watches logged

**GitHub commits not appearing?**
- Verify your GitHub username is correct
- Make sure you have recent public commits
- Check that your GitHub profile is public

**Company logos not loading?**
- Verify the domain is correct (e.g., "google.com")
- Some companies may not have logos in Clearbit
- The fallback (first letter) will show instead

**Clock not updating?**
- Check that your timezone format is correct
- Use IANA timezone names only

**Map not showing?**
- Verify coordinates are in `[latitude, longitude]` format
- Ensure zoom level is between 1-20

---

## 📞 Need Help?

If you encounter any issues, check:
1. Browser console for errors (F12)
2. That all usernames are properly formatted
3. That there are no missing commas in the config file
4. API endpoints are responding at `/api/letterboxd` and `/api/github`

---

Happy customizing! 🎉

**Features:**
- ✅ Letterboxd RSS Integration
- ✅ GitHub API Integration
- ✅ Automatic Company Logos
- ✅ Animated Gradient Hero
- ✅ Dark Map Theme
- ✅ Live Clock
