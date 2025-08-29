<script setup lang="ts">
import { useSocials } from '#imports';
import { useDisplay } from 'vuetify';
import { ref } from '#imports';

let socials= ref();
const {smAndUp} = useDisplay()

const imgSize = computed(()=> (smAndUp.value ? 350 : 200))

onMounted(()=>{
    socials.value = useSocials()
})
</script>

<template>

    <section class="hero-section mt-12 d-flex flex-column align-center justify-center">
        
        <v-container>

            <v-row align="center" >
                <v-col cols="12" md="5" order="1" order-md="1" class="text-center">
                        <v-img src="/images/profile-hero.jpg" aspect-ratio="1" alt="Abdelrahman Mahmoud Portrait" :width="imgSize" class="avatar-img mx-auto rounded-circle elevation-4" cover></v-img>

                </v-col>

                <v-col cols="12" md="7" order="2" order-md="2" class="fade-slide text-center" style="animation-delay: 0.2s;" >
                    <h1 class="text-h5 text-md-h3 text-lg-h2 font-weight-bold mb-2" style="color: var(--color-brand);">Abdelrahman Mahmoud</h1>
                    
                    <h2 class="text-h6 text-md-h5 text-lg-h4 te mb-4">Full Stack Developer</h2>

                    <p class="text-body-1 text-md-body-3 text-lg-body-3 mb-2 mb-md-6 mb-lg-6 px-6">
                        Building clean, modern, and responsive user interfaces with Vue, Nuxt, and Vuetify.
                    </p>

                    <div class="d-flex flex-column align-center">
                        
                        <div class="icons-wrapper">

                            <v-btn v-for="social in socials" icon variant="text" :href="social.link" target="_blank" class="mr-4" color="brand" size="large" rounded="lg">
                                <v-icon>{{ social.logo }}</v-icon>
                            </v-btn>

                        </div>

                        <v-btn style="width: fit-content;" target="_blank" class="mt-2 mt-md-4 mt-lg-4" color="accent" size="large" variant="elevated" rounded="lg" href="mailto:abdelrahmannali14@gmail.com">Contact</v-btn>
                        
                       
                        
                    </div>

                </v-col>
            </v-row>
            
        </v-container>
        
    </section>
</template>

<style scoped>
    .hero-section {
    background-color: var(--color-background);
    color: var(--color-text);
    min-height: 90vh; 
  }

  .fade-slide {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeSlideUp 0.8s ease-out forwards;
  }

  @keyframes fadeSlideUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
  }
</style>