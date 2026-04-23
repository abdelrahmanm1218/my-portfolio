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
    <section id="skills" class="bg-light  pb-4">
        <v-container>
            <h2 class="section-title mb-4">Skills & Tools</h2>
            
            <v-row align="stretch">
                
                <v-col cols="12" md="4" class="d-flex">
                    <v-card class="skill-card h-100 w-100" color="brand" title="Frontend" variant="tonal">
                        <v-card-text>
                            <ul style="list-style: none; padding: 0;display: flex;flex-wrap: wrap;gap: 10px;">
                                <li v-for="skill in frontend" :key="skill.name">
                                    <div class="skill-icon">
                                        <NuxtImg
                                            :src="skill.icon"
                                            :alt="skill.name +' icon'"
                                            width="40"
                                            height="40"
                                            sizes="40px"
                                            :modifiers="{ format: 'webp', quality: 80 }"
                                            :img-attrs="{ loading: 'lazy' }"
                                            
                                        />
                                        <span class="img-tooltip">{{ skill.name }}</span>
                                    </div>
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
                                    <div class="skill-icon">
                                        <NuxtImg
                                            :src="skill.icon"
                                            :alt="skill.name"
                                            width="40"
                                            height="40"
                                            sizes="40px"
                                            :modifiers="{ format: 'webp', quality: 60 }"
                                            :img-attrs="{ loading: 'lazy' }"
                                        />
                                        <span class="img-tooltip">{{ skill.name }}</span>
                                    </div>
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
                                    <div class="skill-icon">
                                        <NuxtImg
                                            :src="skill.icon"
                                            :alt="skill.name"
                                            width="40"
                                            height="40"
                                            sizes="40px"
                                            :modifiers="{ format: 'webp', quality: 80 }"
                                            :img-attrs="{ loading: 'lazy' }"
                                        />
                                        <span class="img-tooltip">{{ skill.name }}</span>
                                    </div>
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

.skill-icon {
    position: relative;
    display: inline-block;
}

.img-tooltip {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 6px);
    transform: translateX(-50%);
    white-space: nowrap;
    padding: 6px 10px;
    border-radius: 6px;
    background-color: var(--color-brand);
    color: #ffffff;
    font-size: 0.75rem;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s ease, transform 0.15s ease;
}

.skill-icon:hover .img-tooltip {
    opacity: 1;
    transform: translate(-50%, -2px);
}

.skill-card {
    transition: box-shadow 0.2s ease, transform 0.2s ease;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
}

.skill-card:hover {
    transform: translateY(-2px);
}
</style>
