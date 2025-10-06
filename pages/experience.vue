<script setup>
import Navbar from '../components/Navbar.vue'
import UnderDevelopmentCard from '../components/UnderDevelopmentCard.vue'
import Footer from '~/components/Footer.vue';
import { useHead } from '#app'

useHead({
    title: "Abdelrahman's Experience"
})

</script>

<template>
    <Navbar/>
    <UnderDevelopmentCard />
    <Footer />
</template>