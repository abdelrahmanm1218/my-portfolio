<script setup>
import { useSocials } from '~/composables/useSocials';

const socials = useSocials();
const sections = [
    { title: 'About', to: '/about' },
    { title: 'Projects', to: '/projects' },
    { title: 'Skills', to: '/skills' },
    { title: 'Experience', to: '/experience' },
]
</script>

<template>
    <v-footer color="brand" dark padless>
        <v-container>
            <v-row class="py-4">

                <v-col cols="12" md="3" class="text-center text-md-left">
                    <h3 class="text-h6 font-weight-bold">Abdelrahman Mahmoud</h3>
                    <p class="text-body-2">Full Stack Engineer</p>
                </v-col>

                <v-col cols="12" md="6" class="text-center">
                    <v-btn color="accent" variant="text" density="comfortable" v-for="section in sections" :key="section.title" :to="section.to" text class="mx-2">
                        {{ section.title }}
                    </v-btn>
                </v-col>

                <v-col cols="12" md="3" class="text-center text-md-right">
                
                    <v-btn color="accent" size="x-small" v-for="social in socials" :key="social.title" :href="social.link" target="_blank" icon class="mx-2">
                        <v-icon>{{ social.logo }}</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
                <v-col class="text-center py-4">
                    © {{ new Date().getFullYear() }} Abdelrahman Mahmoud
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<style scoped>
.v-btn {
    color: white !important;
}
</style>
