// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/colors.css'
  ],
  plugins: [
    '~/plugins/vuetify.ts',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Abdelrahman Mahmoud - Frontend Developer Portfolio',
      link:[
        {rel: 'icon', type: 'image/x-icon', href: '/am-logo.png'}, //change this to my logo
        { rel: 'canonical', href: 'https://abdelrahman-mahmoud-portfolio.vercel.app' }, // Replace with your actual URL
      ],
      meta:[
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Frontend Developer with 2 years of experience in Vue, Nuxt, Angular, TypeScript, and modern web technologies. Building scalable and responsive user interfaces. also have experience as a Backend Developer using Python, Django, MVT, MySQL' },
        { name: 'keywords', content: 'frontend developer, vue.js, nuxt.js, angular, typescript, javascript, python, djanog, api, backend development, web developer, portfolio, abdelrahman mahmoud,' },
        { name: 'author', content: 'Abdelrahman Mahmoud' },
        { name: 'robots', content: 'index, follow' },
        { name: 'google-site-verification', content: '-lv4_8Y8Rs2jxCu57EeSYVkhdSfTz6BhK42HnyBJGjU' },

        //og graph
        { property: 'og:title', content: 'Abdelrahman Mahmoud - Frontend Developer Portfolio' },
        { property: 'og:description', content: 'Frontend Developer with experience in Vue, Nuxt, Angular, TypeScript to build scalable and responsive User Interfaces' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://abdelrahman-mahmoud-portfolio.vercel.app' },
        { property: 'og:image', content: '/am-logo.png' },
        { property: 'og:site_name', content: 'Abdelrahman Mahmoud Portfolio' },

        //twitter card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Abdelrahman Mahmoud - Frontend Developer Portfolio' },
        { name: 'twitter:description', content: 'Frontend Developer with experience in Vue, Nuxt, Angular, TypeScript' },
        { name: 'twitter:image', content: '/am-logo.png' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Abdelrahman Mahmoud',
            jobTitle: 'Frontend Developer',
            description: 'Frontend Developer with experience in Vue, Nuxt, Angular, TypeScript',
            url: 'https://abdelrahman-mahmoud-portfolio.vercel.app', 
            sameAs: [
              // Add your social media profiles here
              'https://www.linkedin.com/in/abdelrahman-mahmoud-63031522a',
              'https://github.com/abdelrahmanm1218',

            ],
            knowsAbout: ['Vue.js', 'Nuxt.js', 'Angular', 'TypeScript', 'JavaScript', 'Web Development', 'Frontend Development',  'Vuetify', 'Bootstrap', 'Ant-Design', "Git", 'Github', 'Pyhton', 'Django', 'APIs', 'REST API', 'SQL', 'MySQL', 'Backend Development'],
            alumniOf: 'Computer Engineering'
          })
        }
      ]
    }
  }, 
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

})
