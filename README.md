# Abdelrahman Mahmoud - Portfolio Website

A modern, responsive portfolio website built with Nuxt 4, Vue 3, and Vuetify. This project showcases Abdelrahman Mahmoud's skills, experience, and projects as a Frontend Developer.

## 🚀 Live Demo

[View Portfolio](https://abdelrahman-mahmoud-portfolio.vercel.app)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Color System](#color-system)
- [SEO & Meta Tags](#seo--meta-tags)
- [Deployment](#deployment)
- [Contributing](#contributing)

## ✨ Features

- **Modern Design**: Clean, professional design with a custom color system
- **Responsive Layout**: Fully responsive across all devices
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: Built with accessibility best practices
- **Contact Integration**: Direct email contact functionality
- **Social Media Integration**: LinkedIn and GitHub profile links

## 🛠 Tech Stack

### Core Technologies
- **Nuxt 4** - Vue.js framework for server-side rendering
- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vuetify 3** - Material Design component framework

### UI & Styling
- **Vuetify Components** - Pre-built UI components
- **Material Design Icons** - Icon library
- **Custom CSS Variables** - Consistent color system
- **Bootstrap Vue 3** - Additional UI components (available)

### Development Tools
- **Vite** - Fast build tool
- **Nuxt DevTools** - Development utilities
- **ESLint** - Code linting (recommended)

### SEO & Performance
- **Nuxt Sitemap** - Automatic sitemap generation
- **Structured Data** - JSON-LD schema markup
- **Meta Tags** - Comprehensive SEO meta information
- **Google Site Verification** - Search console integration

## 📁 Project Structure

```
portfolio/
├── app/                    # App-level configuration
├── assets/
│   └── css/
│       └── colors.css     # Custom color system
├── components/
│   └── Navbar.vue         # Navigation component
├── composables/
│   └── useColors.ts       # Color system composable
├── layouts/               # Layout components
├── pages/
│   ├── index.vue          # Home page
│   └── about.vue          # About page
├── plugins/
│   └── vuetify.ts         # Vuetify configuration
├── public/
│   ├── am-logo.png        # Logo file
│   └── favicon.ico        # Favicon
├── server/
│   └── routes/
│       └── sitemap.xml.ts # Sitemap generation
├── nuxt.config.ts         # Nuxt configuration
└── package.json           # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

## 💻 Development

### Adding New Pages

1. Create a new `.vue` file in the `pages/` directory
2. Use the existing page structure as a template
3. Import and use the `Navbar` component
4. Add proper meta tags using `useHead`

Example:
```vue
<script setup>
import Navbar from '~/components/Navbar.vue'
import { useHead } from '#app'

useHead({
  title: "Page Title"
})
</script>

<template>
  <Navbar />
  <!-- Your page content -->
</template>
```

### Styling Guidelines

The project uses a custom color system defined in `assets/css/colors.css`:

- **Brand Colors**: Primary green (`#123524`) and secondary blue (`#123452`)
- **Neutral Colors**: Background, card, text, and border colors
- **Utility Classes**: Predefined classes for common styling needs

Use the `useColors` composable for dynamic color access:

```vue
<script setup>
const { brand, neutral, getBrandColor } = useColors()
</script>
```

### Component Development

- Follow Vue 3 Composition API patterns
- Use TypeScript for type safety
- Implement responsive design with Vuetify's grid system
- Ensure accessibility with proper ARIA labels and semantic HTML

## 🎨 Color System

The project implements a comprehensive color system with CSS custom properties:

### Brand Colors
- **Primary**: `#123524` (Dark Green)
- **Secondary**: `#123452` (Dark Blue)
- **Hover States**: Darker variations for interactive elements

### Neutral Colors
- **Background**: `#f8f9fa` (Light Gray)
- **Card**: `#ffffff` (White)
- **Text**: `#1a1a1a` (Dark Gray)
- **Border**: `#e0e0e0` (Light Gray)

### Usage Examples

```css
/* Using CSS variables */
.my-component {
  background-color: var(--color-brand);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

/* Using utility classes */
<div class="bg-brand text-primary border-default">
```

## 🔍 SEO & Meta Tags

The project includes comprehensive SEO optimization:

### Meta Tags
- Title and description for each page
- Open Graph tags for social media sharing
- Twitter Card meta tags
- Google Site Verification

### Structured Data
- JSON-LD schema markup for person/portfolio
- Includes skills, experience, and social profiles

### Sitemap
- Automatic sitemap generation via `@nuxtjs/sitemap`
- Includes all pages and proper URLs

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `.output`
   - Install Command: `npm install`
3. **Deploy automatically** on git push

### Other Platforms

The project can be deployed to any platform that supports Node.js:

- **Netlify**: Use `npm run generate` for static export
- **AWS Amplify**: Configure build settings for Nuxt
- **DigitalOcean App Platform**: Deploy as Node.js app

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow Vue 3 and Nuxt 4 best practices
- Use TypeScript for type safety
- Maintain consistent code formatting
- Test responsive design across devices
- Ensure accessibility compliance

## 📝 License

This project is private and proprietary. All rights reserved.

## 📞 Contact

- **Email**: abdelrahmannali14@gmail.com
- **LinkedIn**: [Abdelrahman Mahmoud](https://www.linkedin.com/in/abdelrahman-mahmoud-63031522a)
- **GitHub**: [abdelrahmanm1218](https://github.com/abdelrahmanm1218)

---

**Built with ❤️ using Nuxt 4, Vue 3, and Vuetify**
