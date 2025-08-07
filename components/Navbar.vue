<script setup lang="ts">
import { useDisplay } from 'vuetify';

const {smAndUp} = useDisplay()

const links = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Skills', to: '/skills' },
  { text: 'Projects', to: '/projects' }
]
</script>

<template>
  <v-app-bar class="px-4" :elevation="2" rounded>
  <template v-slot:prepend>
    <v-app-bar-nav-icon v-if="!smAndUp"></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>Logo</v-app-bar-title>

  <v-spacer />

  <!-- Navigation Links -->

  <div v-if="smAndUp" class="d-flex mx-auto">
      <v-btn
        v-for="link in links"
        :key="link.text"
        variant="text"
        density="comfortable"
        :to="link.to"
      >
        {{ link.text }}
      </v-btn>
    </div>
    <v-spacer/>
    <!-- CTA Button -->
    <v-btn v-if="smAndUp" color="primary" rounded="lg" variant="elevated" to="/contact">
      Contact
    </v-btn>

    <!-- Download CV Link -->
   <a v-if="smAndUp" href="https://linkedin.com" id="download-cv">
      Download CV
    </a> 

    



</v-app-bar>
</template>

<style scoped>
 #download-cv {
  text-decoration: underline;
  color: inherit;
  transition: color 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    color: blue
  }
 }
</style>