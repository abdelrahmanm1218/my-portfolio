<template>
    
    <v-container class="d-flex justify-center align-center fill-height">
        
        <v-card color="brand" variant="tonal" class="dev-card text-center pa-4 d-flex flex-column align-center" style="width: 65%;">
            
            <h1 class="mt-4 text-h5 font-weight-bold" style="color: var(--color-brand);">Currently Under Development</h1>

            <div class="animation-container mt-4">
                <v-img src="/Update-App.gif" width="120" height="120" alt="Under Development GIF"></v-img>
            </div>

            <v-btn to="/" class="mt-6" color="accent" variant="elevated" rounded="lg">Go to Homepage</v-btn>
        </v-card>

    </v-container>

</template>

<script setup>
// No script needed for this simple component
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