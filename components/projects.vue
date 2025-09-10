<script lang="ts" setup>
    const projects = [
        {
            id: "PR-01",
            project_name: "Personal Portfolio",
            thumbnail: "/images/projects/am-logo.png",
            short_description: "Personal portfolio to have a professional digital presence",
            description: "Personal portfolio to have a professional digital presence",
            start_date: "7/2025",
            end_date: "Present",
            technologies: ["Vue js",  "Vuetify", "Nuxt.js",  "TypeScript"],
            link: "https://abdelrahman-mahmoud-portfolio.vercel.app/",   
        },
        {
            id: "PR-02",
            project_name: "Praxis",
            thumbnail: "/images/projects/Praxis.png",
            short_description: "Internhsip program to track interns and internship cycles",
            description: "Internhsip program to track interns and internship cycles and guide new interns",
            start_date: "12/2024",
            end_date: "03/2025",
            technologies: ["TypeScript","Angular",  "Ant-Design", "Git-Flow"],
            link: "https://internship-dev.homains.online/home",

        },
        // {
        //     id: "PR-03",
        //     project_name: "Praxis",
        //     thumbnail: "/images/projects/Praxis.png",
        //     short_description: "Internhsip program to track interns and internship cycles",
        //     description: "Internhsip program to track interns and internship cycles and guide new interns",
        //     start_date: "12/2024",
        //     end_date: "03/2025",
        //     technologies: ["TypeScript","Angular",  "Ant-Design", "Git-Flow"],
        //     link: "https://internship-dev.homains.online/home",
        // }
        
    ]

</script>


<template>
<section id="#projects" class="py-8">
        <v-container>
          <h2 class="section-title mb-8">Projects</h2>
          <v-row align="stretch">
            
            <v-col cols="12" md="6" class="d-flex" v-for="proj in projects" :key="proj.id">

                <v-card class="project-card d-flex flex-column h-100 w-100">
                    <v-img :src="proj.thumbnail" height="200px" cover></v-img>
                    
                    
                    <v-card-title>{{ proj.project_name }}</v-card-title>
                    <v-card-subtitle>{{ proj.start_date }} - {{ proj.end_date }}</v-card-subtitle>
                    
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

                    <v-card-actions class="mt-auto justify-end">
                        <v-btn color="accent" variant="tonal" :href="proj.link" target="_blank" rounded="lg" density="comfortable">View</v-btn>
                    </v-card-actions>

                </v-card>
                
            </v-col>

          </v-row>
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