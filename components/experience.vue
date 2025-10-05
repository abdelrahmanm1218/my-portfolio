

<script setup lang="ts">
    import { useExperience } from '~/composables/useExperience';
    import { useDisplay } from 'vuetify';

    const {smAndUp} = useDisplay()
    const experiences = useExperience();

</script>

<template>
    <section class="bg-light pt-8 pb-4">
    <v-container>
      <h2 class="section-title mb-4">Experience</h2>
      <v-timeline align="start">
        <v-timeline-item
        style="background-color: red;"
          v-for="(exp, i) in experiences"
          :key="i"
          :dot-color="'brand'"
          :hide-opposite="!smAndUp"
          :side="smAndUp ? (i % 2 === 0 ? 'start' : 'end') : 'end'"
        >
        <template v-slot:icon>
            <v-avatar :image="exp.logo"></v-avatar>
        </template>
          <template #opposite>
            <strong class="d-none d-sm-inline">{{ exp.date }}</strong>
          </template>
          <v-card color="brand" class="exp-card" variant="tonal">
            <v-card-title>{{ exp.role }}</v-card-title>
            <div class="text-caption text-medium-emphasis d-sm-none px-4 pt-0">
              <strong>{{ exp.date }}</strong>
            </div>
            <v-card-subtitle>{{ exp.company }}</v-card-subtitle>
            <v-card-text>
              <ul v-if="exp.desc && exp.desc.length" class="exp-list">
                <li v-for="(line, idx) in exp.desc" :key="idx">{{ line }}</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </section> 
</template>

<style scoped>
.exp-card {
    width: 100%;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);;
    transition: box-shadow 0.2s ease;
}

.exp-card:hover {
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22);
}

.exp-list {
  padding-left: 1.25rem;
  margin: 0;
}

.exp-list li {
  margin-bottom: 4px;
}
</style>
