/**
 * PORTFOLIO DATA CONFIGURATION
 *
 * This file contains ALL editable content for your portfolio website.
 * Simply edit the values below to customize your site!
 *
 * 📖 See CONTENT-GUIDE.md for detailed instructions
 */

export const portfolioData = {
  // ============================================
  // PERSONAL INFORMATION
  // ============================================
  personal: {
    name: "ARUN SABARATNAM", // Your full name (displayed in hero section)
    tagline: "Software ENgineering Student at the University of Ottawa", // Main tagline
    subtitle: "building stuff", // Optional subtitle
    location: "Ottawa, ON", // Your city/location (shown in clock and map)
    email: "asaba059@uottawa.ca", // Your email address
    timezone: "America/Toronto", // IANA timezone for live clock (e.g., "America/New_York", "Europe/London")
  },

  // ============================================
  // SOCIAL MEDIA LINKS & API INTEGRATION
  // ============================================
  social: {
    github: {
      url: "https://github.com/arunsabaratnam99",
      username: "arunsabaratnam99", // Used for GitHub API
    },
    linkedin: {
      url: "https://www.linkedin.com/in/arunsabaratnam/",
      username: "arunsabaratnam",
    },
    resume: {
      url: "/resume.pdf",
      label: "Resume",
    },
    letterboxd: {
      username: "arunsa", // Your Letterboxd username for RSS feed
      url: "https://letterboxd.com/arunsa/",
    },
    leetcode: {
      username: "aruns6969",
      url: "https://leetcode.com/u/aruns6969/",
    },
  },

  // ============================================
  // WORK EXPERIENCE
  // ============================================
  // Add or remove entries as needed. Most recent should be first.
  // Company logos are fetched from Brandfetch API
  // Add domain field for logo fetching (e.g., "scotiabank.com")
  experience: [
    {
      title: "Software Engineer Intern",
      company: "Scotiabank",
      url: "https://www.scotiabank.com/",
      period: "Jan 2026 - Present",
      domain: "scotiabank.com",
    },
    {
      title: "AI Software Developer Intern",
      company: "Statistics Canada",
      url: "https://www.statcan.gc.ca",
      period: "May 2025 - Sep 2025",
      domain: "canada.ca",
    },
    {
      title: "Full-Stack Developer Intern",
      company: "Department of National Defence",
      url: "https://www.canada.ca/en/department-national-defence.html",
      period: "Sep 2024 - Jan 2025",
      domain: "canada.ca",
    },
    {
      title: "Data Analyst Intern",
      company: "MindBridge AI",
      url: "https://www.mindbridge.ai",
      period: "Jan 2024 - May 2024",
      domain: "mindbridge.ai",
    },
    {
      title: "Software Developer Intern",
      company: "Payments Canada",
      url: "https://www.payments.ca",
      period: "May 2023 - Sep 2023",
      domain: "payments.ca",
    },
  ],

  // ============================================
  // ABOUT ME
  // ============================================
  // Each line becomes a bullet point in the About section
  about: [
    "i'm interested in software development and building new solutions",
    "i enjoy watching movies and tv shows",
    "i like to work on coding projects and learn new technologies",
    "i study software engineering at the university of ottawa",
  ],

  // ============================================
  // PROJECTS
  // ============================================
  // Add your projects here. Each project can have:
  // - title: Project name
  // - description: Brief description
  // - techStack: Array of technologies used
  // - github: (optional) GitHub repo URL
  // - liveUrl: (optional) Live demo URL
  // - image: (optional) Screenshot/thumbnail URL
  // - gradient: (optional) Custom gradient if no image (e.g., "bg-gradient-to-br from-blue-600/20 to-purple-600/20")
  projects: [
    {
      title: "What The Tech",
      description: "AI-powered web app that extracts GitHub repository context into explorable knowledge hubs. Built at uOttaHack 8.",
      techStack: ["Next.js", "TypeScript", "React", "Supabase", "Gemini AI", "shadcn/ui", "TailwindCSS"],
      github: "https://github.com/arunsabaratnam99/what_the_tech_uottahack8",
      liveUrl: "https://what-the-tech-uottahack8.vercel.app/",
      image: "/what-the-tech.jpg",
      gradient: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
    },
    {
      title: "Fordward",
      description: "Flutter mobile app for Ford EV drivers to find nearby charging stations with real-time availability and route optimization. Built at uOttaHack 6.",
      techStack: ["Flutter", "Dart", "Firebase", "Google Maps API", "Python", "Flask"],
      github: "https://github.com/KYLEKHAI/fordward",
      image: "/fordward.png",
      gradient: "bg-gradient-to-br from-blue-600/20 to-indigo-600/20",
    },
    {
      title: "ApplyMe",
      description: "Job application automation platform that aggregates jobs from LinkedIn, Indeed, and more, with smart autofill and application tracking.",
      techStack: ["TypeScript", "React", "Cloudflare Workers", "PostgreSQL", "OAuth", "Browser Extension"],
      github: "https://github.com/arunsabaratnam99/applyme",
      liveUrl: "https://aapplyme.netlify.app",
      image: "/applyme.png",
      gradient: "bg-gradient-to-br from-green-600/20 to-teal-600/20",
    },
    // Add more projects below...
  ],

  // ============================================
  // MAP CONFIGURATION
  // ============================================
  // Set your location coordinates for the interactive map
  // Find coordinates: Google Maps → Right-click location → Copy coordinates
  map: {
    center: [-75.6972, 45.4215], // [longitude, latitude] - Ottawa (Mapbox format)
    zoom: 11, // Zoom level to show city like Evan's map shows Toronto
    marker: {
      lat: 45.4215, // Latitude of your location
      lng: -75.6972, // Longitude of your location
    },
  },
}
