<script setup>
import Navbar from '../components/Navbar.vue'
import { useHead } from '#app'
import UnderDevelopmentCard from '../components/UnderDevelopmentCard.vue'

useHead({
    title: "Abdelrahman's Skills"
})

</script>

<template>
    <Navbar/>
    <UnderDevelopmentCard />
</template>