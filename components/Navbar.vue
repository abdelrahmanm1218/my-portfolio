<script setup lang="ts">
import { useDisplay } from 'vuetify';

const { smAndUp } = useDisplay()

const links = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Skills', to: '/skills' },
  { text: 'Projects', to: '/projects' },
  { text: 'Experience', to: '/experience' },
]
</script>

<template>
  <v-app-bar class="px-4" :elevation="0" rounded>
  <template v-slot:append>
    <v-app-bar-nav-icon v-if="!smAndUp"></v-app-bar-nav-icon>
  </template>

  <!-- Logo on the left -->
  <div class="logo-container d-flex align-center cursor-pointer" @click="$router.push('/')">
          <v-img
        src="/am-logo.png"
        alt="Logo"
        width="48"
        height="48"
        class="rounded-circle"
        cover
      />
  </div>

  <!-- Spacer to push navigation to center -->
  <v-spacer />
  <v-spacer/>

  <!-- Navigation Links - Centered -->
  <div v-if="smAndUp" class="d-flex">
    <v-btn
      v-for="link in links"
      :key="link.text"
      variant="text"
      rounded="lg"
      :to="link.to"
    >
      {{ link.text }}
    </v-btn>
  </div>

  <!-- Spacer to push contact button to the right -->
  <v-spacer />
  <v-spacer />

  <!-- CTA Button on the right -->
  <v-btn 
    v-if="smAndUp" 
    color="brand"  
    rounded="lg" 
    variant="elevated" 
    href="mailto:abdelrahmannali14@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Send email to abdelrahmannali14@gmail.com"
  >
    Contact
  </v-btn>
  
</v-app-bar>
</template>

<style scoped>
/* Navbar styling */
.v-app-bar {
  background-color: var(--color-card) !important;
  border-bottom: 1px solid var(--color-border);
}
</style>