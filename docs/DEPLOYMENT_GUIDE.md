# Deployment Guide

This guide covers the deployment process for Abdelrahman Mahmoud's portfolio website across different platforms.

## Table of Contents

- [Overview](#overview)
- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [Other Platforms](#other-platforms)
- [Environment Configuration](#environment-configuration)
- [Performance Optimization](#performance-optimization)
- [Monitoring](#monitoring)
- [Troubleshooting](#troubleshooting)

## Overview

The portfolio website is built with Nuxt 4 and can be deployed as:
- **Server-Side Rendered (SSR)** - Full Nuxt application
- **Static Site Generated (SSG)** - Pre-rendered static files
- **Single Page Application (SPA)** - Client-side only

### Build Outputs

- **SSR**: `.output` directory (recommended for Vercel)
- **SSG**: `.output/public` directory (for static hosting)
- **SPA**: `.output/public` directory with client-side routing

## Vercel Deployment (Recommended)

Vercel is the recommended platform for this Nuxt 4 portfolio due to its excellent Nuxt support and performance.

### 1. Connect Repository

1. **Sign up/Login** to [Vercel](https://vercel.com)
2. **Import your repository** from GitHub/GitLab/Bitbucket
3. **Select the repository** containing your portfolio

### 2. Configure Build Settings

**Framework Preset**: Nuxt.js
**Build Command**: `npm run build`
**Output Directory**: `.output`
**Install Command**: `npm install`

### 3. Environment Variables

Add these environment variables in Vercel dashboard:

```env
NODE_ENV=production
NITRO_PRESET=vercel
```

### 4. Domain Configuration

1. **Custom Domain**: Add your domain in Vercel dashboard
2. **DNS Configuration**: Update DNS records as instructed
3. **SSL Certificate**: Automatically provisioned by Vercel

### 5. Deployment Commands

```bash
# Deploy to Vercel
vercel

# Deploy to production
vercel --prod

# Set up automatic deployments
# Connect your Git repository for automatic deployments
```

### 6. Vercel Configuration File

Create `vercel.json` in your project root:

```json
{
  "framework": "nuxt",
  "buildCommand": "npm run build",
  "outputDirectory": ".output",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "functions": {
    "app/server/**/*.ts": {
      "runtime": "nodejs18.x"
    }
  }
}
```

## Netlify Deployment

Netlify is excellent for static site generation (SSG) deployments.

### 1. Build Configuration

**Build Command**: `npm run generate`
**Publish Directory**: `.output/public`
**Node Version**: 18 (or higher)

### 2. Netlify Configuration

Create `netlify.toml` in your project root:

```toml
[build]
  command = "npm run generate"
  publish = ".output/public"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### 3. Environment Variables

Add in Netlify dashboard:

```env
NODE_ENV=production
NITRO_PRESET=netlify
```

## Other Platforms

### AWS Amplify

1. **Connect repository** to AWS Amplify
2. **Build settings**:
   - Build Command: `npm run build`
   - Output Directory: `.output`
3. **Environment variables**:
   ```env
   NODE_ENV=production
   NITRO_PRESET=node
   ```

### DigitalOcean App Platform

1. **Create new app** from Git repository
2. **Build settings**:
   - Build Command: `npm run build`
   - Output Directory: `.output`
3. **Environment**: Node.js 18

### Railway

1. **Connect repository** to Railway
2. **Build settings**:
   - Build Command: `npm run build`
   - Start Command: `node .output/server/index.mjs`
3. **Environment variables**:
   ```env
   NODE_ENV=production
   PORT=3000
   ```

### Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
```

Build and run:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Environment Configuration

### Production Environment

Create `.env.production`:

```env
NODE_ENV=production
NITRO_PRESET=vercel
NITRO_HOST=0.0.0.0
NITRO_PORT=3000
```

### Development Environment

Create `.env.development`:

```env
NODE_ENV=development
NITRO_PRESET=node
```

### Environment-Specific Configuration

Update `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  // ... existing config
  
  runtimeConfig: {
    // Private keys (server-side only)
    apiSecret: process.env.API_SECRET,
    
    // Public keys (client-side)
    public: {
      apiBase: process.env.API_BASE || '/api',
      siteUrl: process.env.SITE_URL || 'https://abdelrahman-mahmoud-portfolio.vercel.app'
    }
  },
  
  nitro: {
    preset: process.env.NITRO_PRESET || 'node'
  }
})
```

## Performance Optimization

### Build Optimization

1. **Enable compression**:
   ```typescript
   // nuxt.config.ts
   nitro: {
     compressPublicAssets: true,
     minify: true
   }
   ```

2. **Optimize images**:
   ```typescript
   // nuxt.config.ts
   image: {
     quality: 80,
     format: ['webp', 'avif', 'jpg']
   }
   ```

3. **Bundle analysis**:
   ```bash
   npm run build -- --analyze
   ```

### Caching Strategy

1. **Static assets**:
   ```typescript
   // nuxt.config.ts
   nitro: {
     storage: {
       redis: {
         driver: 'redis',
         url: process.env.REDIS_URL
       }
     }
   }
   ```

2. **CDN configuration**:
   - Configure CDN for static assets
   - Set proper cache headers
   - Enable gzip compression

### Core Web Vitals

Monitor and optimize:

- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

## Monitoring

### Performance Monitoring

1. **Vercel Analytics** (if using Vercel):
   - Real user metrics
   - Core Web Vitals
   - Performance insights

2. **Google Analytics**:
   - User behavior
   - Page performance
   - Conversion tracking

3. **Lighthouse CI**:
   ```yaml
   # .github/workflows/lighthouse.yml
   name: Lighthouse CI
   on: [push]
   jobs:
     lighthouse:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: treosh/lighthouse-ci-action@v10
           with:
             urls: |
               https://your-site.vercel.app
             configPath: './lighthouserc.json'
   ```

### Error Monitoring

1. **Sentry**:
   ```typescript
   // plugins/sentry.client.ts
   import * as Sentry from '@sentry/vue'
   
   export default defineNuxtPlugin((nuxtApp) => {
     Sentry.init({
       app: nuxtApp.vueApp,
       dsn: process.env.SENTRY_DSN,
       environment: process.env.NODE_ENV
     })
   })
   ```

2. **Logging**:
   ```typescript
   // server/utils/logger.ts
   export const logger = {
     info: (message: string) => console.log(`[INFO] ${message}`),
     error: (message: string, error?: Error) => console.error(`[ERROR] ${message}`, error),
     warn: (message: string) => console.warn(`[WARN] ${message}`)
   }
   ```

## Troubleshooting

### Common Deployment Issues

#### 1. Build Failures

```bash
# Clear cache and rebuild
rm -rf node_modules
rm -rf .nuxt
rm -rf .output
npm install
npm run build
```

#### 2. Environment Variables

- Ensure all required environment variables are set
- Check for typos in variable names
- Verify variable values are correct

#### 3. Port Issues

```typescript
// nuxt.config.ts
nitro: {
  port: process.env.PORT || 3000,
  host: process.env.HOST || '0.0.0.0'
}
```

#### 4. Memory Issues

```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### Debug Commands

```bash
# Check build output
npm run build -- --verbose

# Preview production build
npm run preview

# Check bundle size
npm run build -- --analyze

# Test production build locally
npm run build && node .output/server/index.mjs
```

### Performance Issues

1. **Bundle size too large**:
   - Analyze bundle with `npm run build -- --analyze`
   - Remove unused dependencies
   - Implement code splitting

2. **Slow page loads**:
   - Optimize images
   - Enable compression
   - Use CDN for static assets

3. **SEO issues**:
   - Verify meta tags
   - Check structured data
   - Test with Google Search Console

### Rollback Strategy

1. **Vercel**: Use deployment history to rollback
2. **Netlify**: Use deploy history
3. **Manual**: Deploy previous commit

```bash
# Rollback to previous commit
git checkout HEAD~1
npm run build
# Deploy manually
```

## Best Practices

### Security

1. **Environment variables**: Never commit sensitive data
2. **HTTPS**: Always use HTTPS in production
3. **Headers**: Set security headers
4. **Dependencies**: Keep dependencies updated

### Performance

1. **Caching**: Implement proper caching strategies
2. **Compression**: Enable gzip/brotli compression
3. **Images**: Optimize and use modern formats
4. **Code splitting**: Split code into smaller chunks

### Monitoring

1. **Uptime**: Monitor site availability
2. **Performance**: Track Core Web Vitals
3. **Errors**: Monitor and fix errors quickly
4. **Analytics**: Track user behavior

### Maintenance

1. **Updates**: Keep dependencies updated
2. **Backups**: Regular backups of configuration
3. **Testing**: Test deployments in staging
4. **Documentation**: Keep deployment docs updated

## Resources

### Documentation

- [Nuxt 4 Deployment](https://nuxt.com/docs/getting-started/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)

### Tools

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

### Monitoring Services

- [Vercel Analytics](https://vercel.com/analytics)
- [Google Analytics](https://analytics.google.com/)
- [Sentry](https://sentry.io/)




