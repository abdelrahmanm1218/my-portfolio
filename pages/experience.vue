<script setup>
import Navbar from '../components/Navbar.vue'
import UnderDevelopmentCard from '../components/UnderDevelopmentCard.vue'
import { useHead } from '#app'

useHead({
    title: "Abdelrahman's Experience"
})

</script>

<template>
    <Navbar/>
    <UnderDevelopmentCard />
</template>