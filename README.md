# Abdelrahman Mahmoud - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer. Built with Nuxt.js and Vuetify for optimal performance and user experience.

## 🚀 Features

- **Responsive Design**: Optimized for all devices, with special attention to mobile performance
- **Modern Tech Stack**: Vue 3, Nuxt 4, TypeScript, and Vuetify
- **SEO Optimized**: Server-side rendering with meta tags and sitemap
- **Performance Focused**: Tree-shaken components and optimized bundle size
- **Dark/Light Theme Support**: Custom color system with theme switching capability
- **Interactive Components**: Timeline for experience, project showcases, skill cards
- **Image Optimization**: Automatic WebP conversion and lazy loading

## 🛠️ Tech Stack

- **Framework**: Nuxt 4
- **UI Library**: Vuetify 3 (tree-shaken for performance)
- **Language**: TypeScript
- **Styling**: CSS Variables with custom color system
- **Icons**: Material Design Icons
- **Image Optimization**: Nuxt Image with WebP support
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Prepare Nuxt**
   ```bash
   npm run postinstall
   ```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Build & Deployment

### Build for Production
```bash
npm run build
```

### Generate Static Site
```bash
npm run generate
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
├── assets/
│   └── css/
│       └── colors.css          # Custom color system
├── components/
│   ├── Hero.vue               # Hero section
│   ├── Navbar.vue             # Navigation bar
│   ├── Skills.vue             # Skills showcase
│   ├── projects.vue           # Projects display
│   ├── experience.vue         # Experience timeline
│   ├── miniAbout.vue          # About section
│   └── Footer.vue             # Site footer
├── composables/
│   ├── useExperience.ts       # Experience data
│   ├── useProjects.ts         # Projects data
│   ├── useSkills.ts           # Skills data
│   └── useSocials.ts          # Social links
├── pages/
│   └── index.vue              # Main page
├── plugins/
│   └── vuetify.ts             # Vuetify configuration
├── public/
│   ├── icons/                 # Technology icons
│   ├── images/
│   │   └── projects/          # Project screenshots
│   └── robots.txt             # SEO
├── server/
│   └── routes/
│       └── sitemap.xml.ts     # Dynamic sitemap
└── docs/
    └── COLOR_SYSTEM.md        # Color system documentation
```

## 🎨 Color System

The project uses a custom color system defined in `assets/css/colors.css`. Key colors:

- **Brand**: `#123524` (Dark green)
- **Accent**: `#C9A66B` (Gold)
- **Background**: `#f8f9fa` (Light gray)
- **Surface**: `#ffffff` (White)

See `docs/COLOR_SYSTEM.md` for detailed color usage guidelines.

## ⚡ Performance Optimizations

### Recent Optimizations (April 2026)

1. **Removed Unused Dependencies**
   - Eliminated Bootstrap packages (`bootstrap`, `bootstrap-vue-3`, `bootstrap-vue-next`)
   - Saved ~500KB+ bundle size

2. **Code Cleanup**
   - Removed unused `UnderDevelopmentCard.vue` component
   - Removed unused `useColors.ts` composable

### Performance Benefits
- **Faster Load Times**: Especially on mobile devices due to removed unused dependencies
- **Reduced Bundle Size**: ~500KB+ savings from removed packages
- **Better Core Web Vitals**: Improved LCP and FID scores

**Note**: Vuetify tree-shaking was attempted but reverted due to compatibility issues with Nuxt 4 deployment on Vercel. The full Vuetify import ensures stable deployment while still benefiting from the dependency cleanup.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 600px
- **Tablet**: 600px - 960px
- **Desktop**: > 960px

Uses Vuetify's responsive utilities and custom CSS for optimal display across devices.

## 🔧 Configuration

### Nuxt Config (`nuxt.config.ts`)
- Server-side rendering enabled
- Nuxt Image module for optimization
- Sitemap generation
- Custom head meta tags

### Vuetify Setup (`plugins/vuetify.ts`)
- Tree-shaken component imports
- Custom theme with brand colors
- Material Design Icons integration

## 📊 SEO & Meta Tags

- Dynamic meta titles and descriptions
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Robots.txt and sitemap.xml

## 📞 Contact

**Abdelrahman Mahmoud**
- Email: abdelrahmannali14@gmail.com
- LinkedIn: https://www.linkedin.com/in/abdelrahman-mahmoud45/
- GitHub: https://github.com/abdelrahmanm1218

---

Built with ❤️ using Nuxt.js and Vuetify
