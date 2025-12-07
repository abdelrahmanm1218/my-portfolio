<template>
    
    <v-container class="d-flex justify-center align-center fill-height" style="margin: 100px auto;">
        
        <v-card color="brand" variant="tonal" class="dev-card text-center pa-4 d-flex flex-column align-center" style="width: 65%;">
            
            <h1 class="mt-4 text-h5 font-weight-bold" style="color: var(--color-brand);">Currently Under Development</h1>

            <div class="animation-container mt-4">
                <v-img src="/Update-App.gif" width="120" height="120" alt="Under Development GIF"></v-img>
            </div>

            <v-btn @click="navigateToSection" class="mt-6" color="accent" variant="elevated" rounded="lg">{{ buttonText }} section</v-btn>
        </v-card>

    </v-container>

</template>

<script setup>
import { computed, nextTick } from 'vue';

const route = useRoute();

const sectionsRoutes = {
    home: {
        title: 'Home',
        route: '/',
    },
    about: {
        title: 'About',
        route: '/about',
        sectionRoute: '/#about'
    },
    skills: {
        title: 'Skills',
        route: '/skills',
        sectionRoute: '/#skills'
    },
    projects: {
        title: 'Projects',
        route: '/projects',
        sectionRoute: '/#projects'
    },
    experience: {
        title: 'Experience',
        route: '/experience',
        sectionRoute: '/#experience'
    }
};

// Compute the homepage link based on current route
const homepageLink = computed(() => {
    // Find the matching route in sectionsRoutes
    const matchedRoute = Object.values(sectionsRoutes).find(
        section => section.route === route.path
    );
    
    // If found and has a sectionRoute, return it; otherwise return homepage
    return matchedRoute?.sectionRoute || '/';
});

// Compute the button text based on current route
const buttonText = computed(() => {
    // Find the matching route in sectionsRoutes
    const matchedRoute = Object.values(sectionsRoutes).find(
        section => section.route === route.path
    );
    
    // If found and has a title, return "Go to {Title}", otherwise "Go to Homepage"
    if (matchedRoute && matchedRoute.title && matchedRoute.title !== 'Home') {
        return `Go to ${matchedRoute.title}`;
    }
    return 'Go to Homepage';
});

// Navigate to the appropriate section on homepage
const navigateToSection = async () => {
    try {
        const targetLink = homepageLink.value;
        
        // If it's a hash link, navigate to homepage first, then scroll to section
        if (targetLink.includes('#')) {
            const hash = targetLink.split('#')[1];
            
            // Navigate to homepage if not already there
            if (route.path !== '/') {
                await navigateTo('/');
            }
            
            // Wait for route to be fully loaded and DOM to be updated
            await nextTick();
            
            // Wait a bit more for page to fully render
            await new Promise(resolve => setTimeout(resolve, 150));
            
            // Scroll to the section
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Regular navigation
            await navigateTo(targetLink);
        }
    } catch (error) {
        console.error('Navigation error:', error);
    }
};
</script>

<style scoped>
.v-card.dev-card{
    transition: box-shadow 0.2s ease, transform 0.2s ease;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
}
.v-card.dev-card:hover{
    transform: translateY(-2px);
}

</style>