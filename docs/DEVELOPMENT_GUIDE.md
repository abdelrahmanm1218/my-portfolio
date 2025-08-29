# Development Guide

This guide provides comprehensive information for developers working on Abdelrahman Mahmoud's portfolio website.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Architecture](#project-architecture)
- [Development Workflow](#development-workflow)
- [Component Guidelines](#component-guidelines)
- [Styling Guidelines](#styling-guidelines)
- [Testing](#testing)
- [Performance Optimization](#performance-optimization)
- [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites

- **Node.js**: Version 18 or higher
- **Package Manager**: npm or yarn
- **Code Editor**: VS Code (recommended)
- **Browser**: Chrome, Firefox, Safari, or Edge

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Development Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run generate` | Generate static site |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint (if configured) |
| `npm run type-check` | Run TypeScript type checking |

## Project Architecture

### Nuxt 4 Structure

The project follows Nuxt 4 conventions:

```
portfolio/
├── app/                    # App-level configuration
├── assets/                 # Static assets (CSS, images)
├── components/             # Vue components
├── composables/            # Reusable composables
├── layouts/                # Layout components
├── pages/                  # Route pages
├── plugins/                # Nuxt plugins
├── public/                 # Public static files
├── server/                 # Server-side code
└── nuxt.config.ts          # Nuxt configuration
```

### Key Technologies

- **Nuxt 4**: Vue.js framework with SSR/SSG
- **Vue 3**: Composition API
- **TypeScript**: Type safety
- **Vuetify 3**: UI component library
- **Vite**: Build tool

### File Naming Conventions

- **Components**: PascalCase (e.g., `Navbar.vue`)
- **Pages**: kebab-case (e.g., `about.vue`)
- **Composables**: camelCase with `use` prefix (e.g., `useColors.ts`)
- **CSS**: kebab-case (e.g., `colors.css`)

## Development Workflow

### 1. Feature Development

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the component guidelines
   - Use the established color system
   - Ensure responsive design

3. **Test your changes**
   - Test on different screen sizes
   - Check accessibility
   - Verify performance

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### 2. Code Review Process

- Self-review before submitting
- Ensure all tests pass
- Check for accessibility issues
- Verify responsive design
- Review performance impact

### 3. Deployment

- Automatic deployment on main branch
- Manual deployment available for feature branches
- Preview deployments for testing

## Component Guidelines

### Vue 3 Composition API

Always use the Composition API with `<script setup>`:

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useColors } from '~/composables/useColors'

// Props
interface Props {
  title: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  description: ''
})

// Reactive data
const isVisible = ref(false)

// Computed properties
const { brand } = useColors()
const titleColor = computed(() => brand.primary)

// Methods
const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}
</script>

<template>
  <div class="component">
    <h2 :style="{ color: titleColor }">{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
    <button @click="toggleVisibility">Toggle</button>
  </div>
</template>
```

### Component Structure

1. **Script section** (Composition API)
2. **Template section** (Vue template)
3. **Style section** (Scoped CSS)

### Props and Events

```vue
<script setup lang="ts">
// Props with TypeScript
interface Props {
  title: string
  items: string[]
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false
})

// Events
const emit = defineEmits<{
  click: [item: string]
  update: [value: string]
}>()

const handleClick = (item: string) => {
  emit('click', item)
}
</script>
```

### Component Naming

- Use descriptive, semantic names
- Follow Vue.js naming conventions
- Use PascalCase for component names
- Include component type in name (e.g., `UserCard.vue`)

## Styling Guidelines

### CSS Architecture

The project uses a hybrid approach:

1. **Vuetify components** for UI elements
2. **Custom CSS** for specific styling
3. **CSS custom properties** for theming
4. **Utility classes** for quick styling

### CSS Organization

```vue
<style scoped>
/* 1. Layout styles */
.component {
  display: flex;
  flex-direction: column;
}

/* 2. Typography */
.title {
  font-size: 1.5rem;
  font-weight: bold;
}

/* 3. Colors and theming */
.content {
  color: var(--color-text);
  background-color: var(--color-card);
}

/* 4. Responsive design */
@media (max-width: 768px) {
  .component {
    padding: 1rem;
  }
}

/* 5. Animations and transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>
```

### Responsive Design

Use Vuetify's responsive utilities:

```vue
<template>
  <!-- Responsive grid -->
  <v-row>
    <v-col cols="12" md="6" lg="4">
      <v-card>Content</v-card>
    </v-col>
  </v-row>
  
  <!-- Responsive display -->
  <div class="d-none d-md-block">Desktop only</div>
  <div class="d-block d-md-none">Mobile only</div>
</template>
```

### Color System Usage

```vue
<template>
  <!-- Using Vuetify colors -->
  <v-btn color="brand">Primary Button</v-btn>
  
  <!-- Using CSS variables -->
  <div class="custom-element">Custom styled element</div>
</template>

<style scoped>
.custom-element {
  background-color: var(--color-brand);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}
</style>
```

## Testing

### Manual Testing Checklist

- [ ] **Functionality**: All features work as expected
- [ ] **Responsive Design**: Test on mobile, tablet, desktop
- [ ] **Accessibility**: Keyboard navigation, screen readers
- [ ] **Performance**: Page load times, smooth interactions
- [ ] **Cross-browser**: Chrome, Firefox, Safari, Edge
- [ ] **SEO**: Meta tags, structured data

### Browser Testing

Test on these browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Device Testing

Test on these devices:
- Desktop (1920x1080+)
- Tablet (768px-1024px)
- Mobile (320px-768px)

## Performance Optimization

### Code Splitting

- Use dynamic imports for large components
- Lazy load images and heavy content
- Implement route-based code splitting

### Image Optimization

```vue
<template>
  <!-- Optimized image loading -->
  <v-img
    src="/image.jpg"
    lazy-src="/image-placeholder.jpg"
    aspect-ratio="16/9"
    cover
  />
</template>
```

### Bundle Optimization

- Use tree shaking
- Minimize dependencies
- Optimize imports

### Caching Strategy

- Implement proper cache headers
- Use service workers for offline support
- Optimize static asset delivery

## Troubleshooting

### Common Issues

#### 1. Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules
rm -rf .nuxt
npm install
npm run dev
```

#### 2. Vuetify Issues

```bash
# Ensure Vuetify is properly configured
# Check plugins/vuetify.ts
# Verify CSS imports in nuxt.config.ts
```

#### 3. TypeScript Errors

```bash
# Run type checking
npm run type-check

# Check tsconfig.json configuration
# Ensure proper type definitions
```

#### 4. Styling Issues

- Check CSS custom properties
- Verify Vuetify theme configuration
- Ensure proper CSS specificity

### Debug Tools

- **Vue DevTools**: Browser extension for Vue debugging
- **Nuxt DevTools**: Built-in development utilities
- **Browser DevTools**: Network, performance, console

### Performance Monitoring

- **Lighthouse**: Performance audits
- **WebPageTest**: Detailed performance analysis
- **Core Web Vitals**: Real user metrics

## Best Practices

### Code Quality

1. **Follow Vue 3 best practices**
2. **Use TypeScript for type safety**
3. **Write clean, readable code**
4. **Add meaningful comments**
5. **Follow consistent formatting**

### Performance

1. **Optimize bundle size**
2. **Use lazy loading**
3. **Implement proper caching**
4. **Monitor Core Web Vitals**
5. **Optimize images and assets**

### Accessibility

1. **Use semantic HTML**
2. **Provide alt text for images**
3. **Ensure keyboard navigation**
4. **Maintain color contrast**
5. **Test with screen readers**

### SEO

1. **Use proper meta tags**
2. **Implement structured data**
3. **Optimize page titles**
4. **Create descriptive URLs**
5. **Generate sitemaps**

## Resources

### Documentation

- [Nuxt 4 Documentation](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/)
- [Vuetify 3 Documentation](https://vuetifyjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

### Tools

- [Vue DevTools](https://devtools.vuejs.org/)
- [Nuxt DevTools](https://nuxt.com/docs/guide/development/devtools)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)

### Learning Resources

- [Vue.js Style Guide](https://vuejs.org/style-guide/)
- [Nuxt.js Best Practices](https://nuxt.com/docs/guide/concepts/best-practices)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)





