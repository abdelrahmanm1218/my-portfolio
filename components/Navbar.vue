<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useSocials } from '#imports';

const { smAndUp } = useDisplay()
let socials = ref()

const links = [
  { text: 'Home', to: '#hero' },
  { text: 'About', to: '#about' },
  // { text: 'Skills', to: '#skills' },
  { text: 'Projects', to: '#projects' },
  { text: 'Experience', to: '#experience' },
]

const drawer = ref(false)
const activeLink = ref('#hero')

const handleScroll = () => {
  const sections = ['hero', 'about', 'projects', 'experience']
  const scrollY = window.scrollY + window.innerHeight / 2 // middle of viewport
  let closest = ''
  let minDistance = Infinity
  sections.forEach(id => {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      const sectionMiddle = rect.top + rect.height / 2
      const distance = Math.abs(sectionMiddle - window.innerHeight / 2)
      if (distance < minDistance) {
        minDistance = distance
        closest = id
      }
    }
  })
  if (closest) activeLink.value = '#' + closest
}

onMounted(()=> {
  socials.value = useSocials()
  window.addEventListener('scroll', handleScroll)
  handleScroll() // initial check
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>

  <v-app-bar class="px-4" :elevation="1" rounded color="background">
    
    <template v-slot:append>
      <v-app-bar-nav-icon  v-if="!smAndUp" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template> 

  <!-- Logo on the left -->
    <div class="logo-container d-flex align-center cursor-pointer ml-4" @click="$router.push('/')">
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
        :href="link.to"
        style="color:var(--color-text)"
        class="nav-btn"
        :class="{ 'active-link': activeLink === link.to }"
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
      color="accent"  
      rounded="lg" 
      variant="elevated" 
      href="mailto:abdelrahmannali14@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Send email to abdelrahmannali14@gmail.com"
      class="mr-4"
    >
      Contact
    </v-btn>
  
</v-app-bar>

  <v-navigation-drawer class="pa-2" v-model="drawer" :location="$vuetify.display.mobile? 'right': undefined" temporary>
    <v-list>
      <v-list-item v-for="link in links" :key="link.text" class="drawer-link pa-2">
        <v-list-item-title class="pa-0" style="color: var(--color-text);">
          <a :href="link.to" class="drawer-link-anchor" @click="drawer = false">{{ link.text }}</a>
        </v-list-item-title>
      </v-list-item>

    </v-list>
    <v-btn 
        style="display: flex; align-items: center;"
        color="accent"  
        rounded="lg" 
        variant="elevated" 
        href="mailto:abdelrahmannali14@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send email to abdelrahmannali14@gmail.com"
        density="comfortable"
        
      >
        Contact
      </v-btn>

      <div class="icons-wrapper mt-6 d-flex align-center justify-center">

        <v-btn v-for="social in socials" icon variant="text" target="_blank" :href="social.link" class="mr-6" color="brand" size="medium">
            <v-icon>{{ social.logo }}</v-icon>
        </v-btn>

      </div>
  </v-navigation-drawer>
</template>

<style scoped>
/* Navbar styling */
.v-btn {
  transition: all 0.3s ease;
}
.nav-btn:hover {
  background-color: var(--color-brand-lighter);
}
.nav-btn.active-link {
  background-color: var(--color-brand-light);
}
.drawer-link-anchor {
  color: inherit;
  text-decoration: none;
}
.drawer-link-anchor:hover {
  color: var(--color-text);
}
</style>