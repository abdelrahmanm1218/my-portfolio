<script lang="ts" setup>
    import { computed, ref, onMounted } from 'vue';
    import { useProjects } from '~/composables/useProjects';
    import { useDisplay } from 'vuetify';
    const projects = useProjects()
    const display = useDisplay()
    
    // Track if component is mounted (client-side)
    const isMounted = ref(false)
    
    onMounted(() => {
        isMounted.value = true
    })
    
    // Computed property that handles SSR and client-side reactivity
    // Defaults to true (desktop) for SSR, then uses actual display value on client
    const mdAndUp = computed(() => {
        if (!isMounted.value) {
            // During SSR or before mount, default to desktop (true)
            return true
        }
        // After mount, use the actual display breakpoint
        return display.mdAndUp.value
    })

    type SortField = 'start_date' | 'end_date'
    type SortDirection = 'asc' | 'desc'
    type SortOption = { label: string, field: SortField, direction: SortDirection }

    const showWorkingOnly = ref(false)
    const sortField = ref<SortField | null>(null)
    const sortDirection = ref<SortDirection>('desc')
    const sortMenu = ref(false)

    const sortMenuOptions: SortOption[] = [
        { label: 'Start date · Ascending', field: 'start_date', direction: 'asc' },
        { label: 'Start date · Descending', field: 'start_date', direction: 'desc' },
        { label: 'End date · Ascending', field: 'end_date', direction: 'asc' },
        { label: 'End date · Descending', field: 'end_date', direction: 'desc' },
    ]

    const parseProjectDate = (value?: string) => {
        if (!value) return 0
        if (value.toLowerCase() === 'present') {
            return Number.MAX_SAFE_INTEGER
        }
        const [month, year] = value.split('/').map((part) => Number(part))
        if (!month || !year) return 0
        return new Date(year, month - 1, 1).getTime()
    }

    const displayedProjects = computed(() => {
        const baseList = showWorkingOnly.value ? projects.filter((proj) => proj.currently_working) : projects
        if (!sortField.value) {
            return baseList
        }
        return [...baseList].sort((a, b) => {
            const field = sortField.value || 'start_date'
            const aValue = parseProjectDate(field === 'start_date' ? a.start_date : a.end_date)
            const bValue = parseProjectDate(field === 'start_date' ? b.start_date : b.end_date)
            const direction = sortDirection.value === 'asc' ? 1 : -1
            if (aValue === bValue) return 0
            return aValue > bValue ? direction : -direction
        })
    })

    const displayedProjectsCount = computed(() => displayedProjects.value.length)

    const applySort = (option: SortOption) => {
        sortField.value = option.field
        sortDirection.value = option.direction
        sortMenu.value = false
    }

    const clearSort = () => {
        sortField.value = null
        sortMenu.value = false
    }

    const clearFilter = () => { showWorkingOnly.value = false }
</script>


<template>
<section id="#projects" class="pt-8 pb-4">
        <v-container>
          <div class="projects-header mb-4">
            <div class="projects-title">
              <h2 class="section-title">Projects</h2>
              <v-chip
                class="projects-count-chip"
                color="accent"
                variant="tonal"
                size="small"
              >
                {{ displayedProjectsCount }}
              </v-chip>
            </div>
            <div class="projects-filters">
              <v-tooltip
                text="Ongoing Projects"
                location="bottom"
                content-class="projects-tooltip"
              >
                <template #activator="{ props }">
                  <v-btn
                    v-bind="props"
                    icon="mdi-filter-variant"
                    variant="tonal"
                    :color="showWorkingOnly ? 'accent' : 'brand'"
                    density="comfortable"
                    @click="showWorkingOnly = !showWorkingOnly"
                  />
                </template>
              </v-tooltip>
              <v-chip
                v-if="showWorkingOnly"
                size="large"
                color="accent"
                variant="tonal"
                class="ml-2"
                closable
                @click:close="clearFilter"
              >
                Ongoing Projects
              </v-chip>
              <div class="projects-sorter">
                <v-menu
                  v-model="sortMenu"
                  location="bottom"
                  :close-on-content-click="false"
                  offset="8"
                >
                  <template #activator="{ props }">
                    <v-tooltip text="Sort projects" location="bottom" content-class="projects-tooltip">
                      <template #activator="{ props: tooltipProps }">
                        <v-btn
                          v-bind="{ ...props, ...tooltipProps }"
                          icon="mdi-sort"
                          variant="tonal"
                          :color="sortField ? 'accent' : 'brand'"
                          density="comfortable"
                        />
                      </template>
                    </v-tooltip>
                  </template>
                  <v-card class="sort-menu-card" elevation="6">
                    <v-card-title class="text-subtitle-2 py-2">Sort projects</v-card-title>
                    <v-divider></v-divider>
                    <v-list density="compact">
                      <v-list-item
                        v-for="option in sortMenuOptions"
                        :key="option.label"
                        @click="applySort(option)"
                        :active="sortField === option.field && sortDirection === option.direction"
                      >
                        <v-list-item-title>{{ option.label }}</v-list-item-title>
                        <template #append>
                          <v-icon
                            size="18"
                            :icon="option.direction === 'asc' ? 'mdi-arrow-up' : 'mdi-arrow-down'"
                          />
                        </template>
                      </v-list-item>
                    </v-list>
                    <v-divider v-if="sortField"></v-divider>
                    <v-card-actions v-if="sortField">
                      <v-btn variant="text" color="accent" @click="clearSort">Clear sorting</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
                <v-tooltip
                  v-if="sortField"
                  text="Clear sorting"
                  location="bottom"
                  content-class="projects-tooltip"
                >
                  <template #activator="{ props }">
                    <v-btn
                      v-bind="props"
                      icon="mdi-close"
                      variant="tonal"
                      color="accent"
                      density="comfortable"
                      class="ml-1"
                      size="small"
                      @click="clearSort"
                    />
                  </template>
                </v-tooltip>
              </div>
            </div>
          </div>
          <template v-if="mdAndUp">
            <v-row align="stretch">
            
            <v-col cols="12" md="4" class="d-flex" v-for="proj in displayedProjects" :key="proj.id">

                <v-card class="project-card d-flex flex-column h-100 w-100">
                    <div class="project-thumb-wrapper">
                      <NuxtImg
                        :src="proj.thumbnail"
                        class="project-thumb"
                        sizes="xs:320px sm:400px md:420px lg:420px"
                        format="webp"
                        :quality="80"
                        densities="x1 x2"
                        :img-attrs="{ loading: 'lazy', width: '420', height: '236' }"
                      />
                    </div>
                    
                    
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
              hide-delimiters
              height="450"
        >
        <template #prev="{ props }">
      <v-btn
        v-bind="props"
        icon="mdi-chevron-left"
        color="accent"
        variant="tonal"
      />
    </template>

    <template #next="{ props }">
      <v-btn
        v-bind="props"
        icon="mdi-chevron-right"
        color="accent"
        variant="tonal"
      />
    </template>

          <v-carousel-item
            v-for="proj in displayedProjects"
            :key="proj.id"
            
          >
                <v-card  elevation="6" class="project-card d-flex flex-column h-100 w-100">
              
                <div class="project-thumb-wrapper">
                  <NuxtImg
                    :src="proj.thumbnail"
                    class="project-thumb"
                    sizes="xs:320px sm:360px"
                    format="webp"
                    :quality="100"
                    densities="x1 x2"
                    :img-attrs="{ loading: 'lazy', width: '360', height: '203' }"
                  />
                </div>
              
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

.project-thumb-wrapper {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 0;
    background: var(--color-surface-variant);
}

.project-thumb {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.projects-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
}

.projects-title {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}

.projects-count-chip {
    font-weight: 600;
    text-transform: none;
}

.projects-filters {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
}

.projects-sorter {
    display: flex;
    align-items: center;
}

:deep(.projects-tooltip) {
    background-color: var(--color-brand);
    color: #ffffff !important;
}
</style>
