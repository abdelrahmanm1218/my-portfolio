<script setup>
import Navbar from '../components/Navbar.vue'
import { useHead } from '#app'
import UnderDevelopmentCard from '../components/UnderDevelopmentCard.vue'
import Footer from '~/components/Footer.vue';

useHead({
    title: "Abdelrahman's Projects"
})

</script>

<template>
    <Navbar/>
    <UnderDevelopmentCard />
    <Footer />
</template>