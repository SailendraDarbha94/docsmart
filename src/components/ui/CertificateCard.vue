<script setup lang="ts">
interface Props {
  title: string
  url: string
  description: string
}

defineProps<Props>()

</script>

<template>
  <div class="card">
    <img class="w-full p-2 rounded-xl" v-bind:src=$props.url />
    <h3 class="text-center font-semibold p-2">{{ $props.title }}</h3>
    <hr />
    <p class="text-justify">{{ $props.description }}</p>
  </div>
</template>

<style scoped>
  .card {
    max-width: fit-content;
  }
</style>
