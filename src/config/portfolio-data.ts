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
  // Company logos will be fetched from Clearbit API automatically
  experience: [
    {
      title: "Software Engineer Intern",
      company: "Scotiabank",
      url: "https://www.scotiabank.com/",
      period: "Jan 2026 - Present",
      companyDomain: "scotiabank.com",
    },
    {
      title: "AI Software Developer Intern",
      company: "Statistics Canada",
      url: "https://www.statcan.gc.ca",
      period: "May 2025 - Sep 2025",
      companyDomain: "canada.ca", 
    },
    {
      title: "Full-Stack Developer Intern",
      company: "Department of National Defence",
      url: "https://www.canada.ca/en/department-national-defence.html",
      period: "Sep 2024 - Jan 2025",
      companyDomain: "canada.ca",
    },
    {
      title: "Data Analyst Intern",
      company: "MindBridge AI",
      url: "https://www.mindbridge.ai",
      period: "Jan 2024 - May 2024",
      companyDomain: "mindbridge.ai",
    },
    {
      title: "Software Developer Intern",
      company: "Payments Canada",
      url: "https://www.payments.ca",
      period: "May 2023 - Sep 2023",
      companyDomain: "payments.ca",
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
