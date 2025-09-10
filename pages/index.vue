<script setup>
    import { useHead } from '#app';
    import Navbar from '~/components/Navbar.vue';
    import { useDisplay } from 'vuetify';
    import MiniAbout from '~/components/miniAbout.vue';
    import Skills from '~/components/Skills.vue';
    const {smAndUp} = useDisplay()
    useHead({
        title: "Abdelrahman Mahmoud | Full Stack Engineer"
    })

  const experiences = useExperience();
  </script>

<template>
    <Navbar/>
     
      <!-- HERO SECTION -->
      <Hero/>
  
      <!-- ABOUT ME -->
      <MiniAbout/>
      <!-- <section class="py-16">
        <v-container>
          <h2 class="section-title mb-6">About Me</h2>
          <p class="mb-6">
            I'm a Computer Engineering graduate with almost 2 years of hands-on experience in building
            reusable UI components and delivering user-friendly interfaces. I enjoy working in Agile
            environments and bringing designs to life with pixel-perfect precision.
          </p>
          <v-chip-group column>
            <v-chip color="brand" text-color="white">Vue.js</v-chip>
            <v-chip color="brand" text-color="white">Nuxt</v-chip>
            <v-chip color="brand" text-color="white">Vuetify</v-chip>
            <v-chip color="brand" text-color="white">TypeScript</v-chip>
            <v-chip color="brand" text-color="white">Angular</v-chip>
          </v-chip-group>
        </v-container>
      </section> -->
  
      <!-- SKILLS -->
       <Skills/>
      <!-- <section id="skills" class="bg-light py-16">
        <v-container>
          <h2 class="section-title mb-8">Skills & Tools</h2>
          <v-row>
            <v-col cols="12" md="4">
              <h3 class="text-h6 font-weight-bold mb-4">Frontend</h3>
              <ul>
                <li>Vue.js, Nuxt.js, Vuetify, TypeScript, Angular</li>
              </ul>
            </v-col>
            <v-col cols="12" md="4">
              <h3 class="text-h6 font-weight-bold mb-4">Other</h3>
              <ul>
                <li>Python, Django, APIs, SQL</li>
              </ul>
            </v-col>
            <v-col cols="12" md="4">
              <h3 class="text-h6 font-weight-bold mb-4">Tools</h3>
              <ul>
                <li>Git, Git-Flow, Figma, Agile/Scrum</li>
              </ul>
            </v-col>
          </v-row>
        </v-container>
      </section> -->
  
      <!-- PROJECTS -->
     <Projects/>
  
      <!-- EXPERIENCE TIMELINE -->
      <section v-if="smAndUp" class="bg-light py-16">
        <v-container>
          <h2 class="section-title mb-8">Experience</h2>
          <v-timeline align="start">
            <v-timeline-item
              v-for="(exp, i) in experiences"
              :key="i"
              :dot-color="'brand'"
            >
              <template #opposite>
                <strong>{{ exp.date }}</strong>
              </template>
              <v-card>
                <v-card-title>{{ exp.role }}</v-card-title>
                <v-card-subtitle>{{ exp.company }}</v-card-subtitle>
                <v-card-text>{{ exp.desc }}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-container>
      </section> 
  
      <!-- CONTACT -->
      <section class="py-16">
        <v-container>
          <h2 class="section-title mb-8">Contact</h2>
          <v-form>
            <v-text-field label="Name"></v-text-field>
            <v-text-field label="Email"></v-text-field>
            <v-textarea label="Message"></v-textarea>
            <v-btn color="brand" class="mt-4">Send Message</v-btn>
          </v-form>
        </v-container>
      </section>
  
      <!-- FOOTER -->
      <v-footer color="brand" dark padless>
        <v-col class="text-center py-4">
          © {{ new Date().getFullYear() }} Abdelrahman Mahmoud
        </v-col>
      </v-footer>
  </template>
  
  
  
  <style scoped>
  
  
  .bg-light {
    background-color: var(--color-background);
  }
  
  .section-title {
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-brand);
  }
  
  /* These are now handled by Vuetify theme, but keeping for specificity if needed */
  .v-btn[color="brand"] {
    background-color: var(--color-brand) !important;
    color: white !important;
  }
  
  .v-btn[color="brand"][variant="outlined"] {
    background-color: transparent !important;
    border: 2px solid var(--color-brand) !important;
    color: var(--color-brand) !important;
  }
  
  .v-btn[color="brand"]:hover {
    background-color: var(--color-brand-hover) !important;
  }
  
  .v-btn[color="brand"][variant="outlined"]:hover {
    background-color: var(--color-brand-light) !important;
  }
  </style>
  