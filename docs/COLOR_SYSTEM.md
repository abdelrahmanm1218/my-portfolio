# Color System Documentation

This document explains how to use the centralized color system in your Nuxt portfolio project.

## Color Palette

### Brand Colors
- **Primary Brand**: `#123524` (Dark green)

### Neutral Colors (Light Theme)
- **Background**: `#f8f9fa` (Very light gray)
- **Card/Surface**: `#ffffff` (White)
- **Text**: `#1a1a1a` (Almost black/dark gray)
- **Border/Divider**: `#e0e0e0` (Light gray)

## Usage Methods

### 1. CSS Custom Properties (Recommended for custom styling)

```css
.my-component {
  background-color: var(--color-brand);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}
```

Available CSS variables:
- `--color-brand`
- `--color-background`
- `--color-card`
- `--color-text`
- `--color-border`
- `--color-divider`
- `--color-brand-hover`
- `--color-brand-light`
- `--color-brand-lighter`

### 2. Vuetify Theme Colors (Recommended for Vuetify components)

```vue
<template>
  <v-btn color="brand">Brand Button</v-btn>
  <v-btn color="primary">Primary Button</v-btn>
  <v-card color="surface">Card</v-card>
</template>
```

Available Vuetify colors:
- `primary` / `brand` (both map to #123524)
- `background`
- `surface`
- `surface-variant`

### 3. Composable (For dynamic color usage in JavaScript)

```vue
<script setup>
import { useColors } from '~/composables/useColors'

const { brand, neutral, getBrandColor, hexToRgba } = useColors()

// Direct access
const primaryColor = brand.primary
const backgroundColor = neutral.background

// With opacity
const brandWithOpacity = hexToRgba(brand.primary, 0.5)
</script>
```

### 4. Utility Classes

```vue
<template>
  <div class="bg-brand text-white">Brand background</div>
  <div class="bg-background text-primary">Default background</div>
  <div class="text-brand">Brand colored text</div>
</template>
```

Available utility classes:
- Background: `.bg-brand`, `.bg-background`, `.bg-card`, `.bg-surface`
- Text: `.text-brand`, `.text-primary`, `.text-muted`
- Border: `.border-brand`, `.border-default`

## Examples

### Custom Card Component
```vue
<template>
  <div class="custom-card">
    <h3 class="card-title">Title</h3>
    <p class="card-content">Content</p>
  </div>
</template>

<style scoped>
.custom-card {
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px var(--color-shadow-light);
}

.card-title {
  color: var(--color-brand);
  margin-bottom: 8px;
}

.card-content {
  color: var(--color-text);
}
</style>
```

### Dynamic Color Usage
```vue
<script setup>
import { useColors } from '~/composables/useColors'

const { getBrandColor, hexToRgba } = useColors()

const buttonStyle = computed(() => ({
  backgroundColor: getBrandColor(),
  boxShadow: `0 4px 12px ${hexToRgba(getBrandColor(), 0.3)}`
}))
</script>

<template>
  <button :style="buttonStyle">Dynamic Button</button>
</template>
```

## Best Practices

1. **Use CSS custom properties** for custom components and styling
2. **Use Vuetify theme colors** for Vuetify components (v-btn, v-card, etc.)
3. **Use the composable** when you need dynamic color manipulation
4. **Use utility classes** for quick styling and prototyping
5. **Avoid hardcoded hex values** in your components - always use the color system

## Extending the Color System

To add new colors, update these files:
1. `assets/css/colors.css` - Add CSS custom properties
2. `plugins/vuetify.ts` - Add to Vuetify theme
3. `composables/useColors.ts` - Add to composable

## File Locations

- **CSS Variables**: `assets/css/colors.css`
- **Vuetify Theme**: `plugins/vuetify.ts`
- **Composable**: `composables/useColors.ts`
- **Global Import**: `nuxt.config.ts`
