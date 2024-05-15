<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import HomeNav from '../components/HomeNav.vue'
import Projects from '../components/TheProjects.vue'
import { ref } from 'vue'

const home = ref(true)
const projects = ref(false)

const showHome = async () => {
  projects.value = false
  home.value = true
}
const showProjects = async () => {
  home.value = false
  projects.value = true
}
</script>

<template>
  <main class="flex flex-wrap">
    <div class="w-full md:w-1/2">
      <HomeNav @home="showHome" @projects="showProjects" />
    </div>
      <div v-if="home" class="w-full md:w-1/2 mr-4">
        <TheWelcome />
      </div>
      <div v-if="projects" class="w-full md:w-1/2">
        <Projects />
      </div>
  </main>
</template>

<style scoped>

</style>