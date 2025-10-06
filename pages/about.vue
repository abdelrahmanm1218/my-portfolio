<script setup>
import Navbar from '../components/Navbar.vue'
import { useHead } from '#app'
import UnderDevelopmentCard from '../components/UnderDevelopmentCard.vue'
import Footer from '~/components/Footer.vue';

useHead({
    title: "About Abdelrahman"
})

</script>

<template>
    <Navbar/>
    <UnderDevelopmentCard />
    <Footer />
</template>