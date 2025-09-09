<script setup lang="ts">
    import useSkills from '~/composables/useSkills'
    import { ref } from 'vue'
    let {frontend, backend, general} = useSkills()


    onMounted(()=>{
        frontend = useSkills().frontend
        backend = useSkills().backend
        general = useSkills().general
    })
</script>


<template>
    <section id="skills" class="bg-light pt-0 pb-16">
        <v-container>
            <h2 class="section-title mb-4">Skills & Tools</h2>
            
            <v-row align="stretch">
                
                <v-col cols="12" md="4" class="d-flex">
                    <v-card class="skill-card h-100 w-100" color="brand" title="Frontend" variant="tonal">
                        <v-card-text>
                            <ul style="list-style: none; padding: 0;display: flex;flex-wrap: wrap;gap: 10px;">
                                <li v-for="skill in frontend" :key="skill.name">
                                    <v-tooltip :key="`fe-${skill.name}`" :text="skill.name" location="top" content-class="skill-tooltip">
                                        <template #activator="{ props }">
                                            <v-img v-bind="props" width="40" height="40" :src="skill.icon" :alt="skill.name"></v-img>
                                        </template>
                                    </v-tooltip>
                                </li>
                            </ul>
                        </v-card-text>
                    </v-card>
                </v-col>


                <v-col cols="12" md="4" class="d-flex">
                    <v-card class="skill-card h-100 w-100" color="brand" title="Backend" variant="tonal">
                        <v-card-text>
                            <ul style="list-style: none; padding: 0;display: flex;flex-wrap: wrap;gap: 10px;">
                                <li v-for="skill in backend" :key="skill.name">
                                    <v-tooltip :key="`be-${skill.name}`" :text="skill.name" location="top" content-class="skill-tooltip">
                                        <template #activator="{ props }">
                                            <v-img v-bind="props" width="40" height="40" :src="skill.icon" :alt="skill.name"></v-img>
                                        </template>
                                    </v-tooltip>
                                </li>
                            </ul>
                        </v-card-text>
                    </v-card>

                </v-col>

                <v-col cols="12" md="4" class="d-flex">
                    <v-card class="skill-card h-100 w-100" color="brand" title="Tools" variant="tonal">
                        <v-card-text>
                            <ul style="list-style: none; padding: 0;display: flex;flex-wrap: wrap;gap: 10px;">
                                <li v-for="skill in general" :key="skill.name">
                                    <v-tooltip :key="`gen-${skill.name}`" :text="skill.name" location="top" content-class="skill-tooltip">
                                        <template #activator="{ props }">
                                            <v-img v-bind="props" width="40" height="40" :src="skill.icon" :alt="skill.name"></v-img>
                                        </template>
                                    </v-tooltip>
                                </li>
                            </ul>
                        </v-card-text>
                    </v-card>
                </v-col>

            </v-row>
        </v-container>
    </section>
    
</template>

<style scoped>
:deep(.skill-tooltip) {
    /* background-color: rgba(0, 0, 0, 0.7); */
    background-color: var(--color-brand);
    color: #ffffff;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 0.875rem;
}

.skill-card {
    transition: box-shadow 0.2s ease, transform 0.2s ease;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
}

.skill-card:hover {
    transform: translateY(-2px);
}
</style>