<script lang="ts" setup>
    import { useProjects } from '~/composables/useProjects';
    import { useDisplay } from 'vuetify';
    const projects= useProjects()
    const {smAndUp} = useDisplay()

</script>


<template>
<section id="#projects" class="pt-8 pb-4">
        <v-container>
          <h2 class="section-title mb-4">Projects</h2>
          <template v-if="smAndUp">
            <v-row align="stretch">
            
            <v-col cols="12" md="4" class="d-flex" v-for="proj in projects" :key="proj.id">

                <v-card class="project-card d-flex flex-column h-100 w-100">
                    <v-img :src="proj.thumbnail" height="200px" cover></v-img>
                    
                    
                    <v-card-title>{{ proj.project_name }}</v-card-title>
                    <v-card-subtitle v-if="proj.end_date && proj.end_date">{{ proj.start_date }} - {{ proj.end_date }}</v-card-subtitle>
                    
                    <v-card-text>
                        {{proj.short_description}}
                    </v-card-text>

                    <v-card-text class="pt-0">
                        
                        <v-chip
                            v-for="tech in proj.technologies"
                            :key="tech"
                            size="x-small"
                            class="ma-1 text-caption"
                            color="brand"
                            variant="tonal"
                            label
                        >
                            {{ tech }}
                        </v-chip>

                    </v-card-text>

                    <v-card-actions class="mt-auto justify-end" >
                        <v-btn v-if="proj.link" color="accent" variant="tonal" :href="proj.link" target="_blank" rounded="lg" density="comfortable">View</v-btn>
                    </v-card-actions>

                </v-card>
                
            </v-col>

            </v-row>
          </template>

          <template v-else>
            <v-carousel
          show-arrows="hover"
          hide-delimiters
          height="450"
        >
          <v-carousel-item
            v-for="proj in projects"
            :key="proj.id"
            
          >
            <v-card  elevation="6" class="project-card d-flex flex-column h-100 w-100">
              
                <v-img :src="proj.thumbnail" height="200px" cover />
              
              <v-card-title>{{ proj.project_name }}</v-card-title>
              
              <v-card-subtitle v-if="proj.end_date">
                {{ proj.start_date }} - {{ proj.end_date }}
              </v-card-subtitle>

              <v-card-text>
                {{ proj.short_description }}
              </v-card-text>

              <v-card-text class="pt-0">
                <v-chip
                  v-for="tech in proj.technologies"
                  :key="tech"
                  size="x-small"
                  class="ma-1 text-caption"
                  color="brand"
                  variant="tonal"
                  label
                >
                  {{ tech }}
                </v-chip>
              </v-card-text>

              <v-card-actions class="mt-auto justify-end">
                <v-btn
                  v-if="proj.link"
                  color="accent"
                  variant="tonal"
                  :href="proj.link"
                  target="_blank"
                  rounded="lg"
                  density="comfortable"
                >
                  View
                </v-btn>
              </v-card-actions>

            </v-card>
            
          </v-carousel-item>
        </v-carousel>

          </template>
          

        </v-container>
      </section>

</template>

<style scoped>
.project-card {
    transition: box-shadow 0.2s ease, transform 0.2s ease;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
}

.project-card:hover {
    transform: translateY(-2px);
}
</style>