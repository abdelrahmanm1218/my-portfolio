/**
 * Color System Composable
 * Provides easy access to the project's color palette
 */

export const useColors = () => {
  // Brand colors
  const brand = {
    primary: '#123524',
    hover: '#0d291b',
    light: 'rgba(18, 53, 36, 0.1)',
    lighter: 'rgba(18, 53, 36, 0.05)',
  }

  // Neutral colors
  const neutral = {
    background: '#f8f9fa',
    card: '#ffffff',
    text: '#1a1a1a',
    textMuted: '#6c757d',
    textLight: '#adb5bd',
    border: '#e0e0e0',
    divider: '#e0e0e0',
    surface: '#ffffff',
    surfaceVariant: '#f1f3f4',
  }

  // Shadow colors
  const shadow = {
    light: 'rgba(0, 0, 0, 0.1)',
    medium: 'rgba(0, 0, 0, 0.15)',
    dark: 'rgba(0, 0, 0, 0.25)',
  }

  // CSS custom properties getters
  const getCSSVar = (varName: string) => {
    if (process.client) {
      return getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
    }
    return ''
  }

  // Utility functions for dynamic color usage
  const getBrandColor = (variant: keyof typeof brand = 'primary') => brand[variant]
  const getNeutralColor = (variant: keyof typeof neutral) => neutral[variant]
  const getShadowColor = (variant: keyof typeof shadow = 'light') => shadow[variant]

  // Color validation
  const isValidHex = (color: string): boolean => {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)
  }

  // Convert hex to rgba
  const hexToRgba = (hex: string, alpha: number = 1): string => {
    if (!isValidHex(hex)) return hex
    
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  return {
    // Color palettes
    brand,
    neutral,
    shadow,
    
    // Utility functions
    getCSSVar,
    getBrandColor,
    getNeutralColor,
    getShadowColor,
    isValidHex,
    hexToRgba,
    
    // Common color combinations for quick access
    colors: {
      primary: brand.primary,
      background: neutral.background,
      surface: neutral.surface,
      text: neutral.text,
      border: neutral.border,
    }
  }
}
