<script setup>
import Navbar from '../components/Navbar.vue'
import { useHead } from '#app'
import UnderDevelopmentCard from '../components/UnderDevelopmentCard.vue'

useHead({
    title: "Abdelrahman's Projects"
})

</script>

<template>
    <Navbar/>
    <UnderDevelopmentCard />
</template>