<script setup lang="ts">
interface Props {
  title: string
  url: string
  description: string
}
const openCertificate = (path:string) => {
  window.open(path, '_blank')
}

defineProps<Props>()

</script>

<template>
  <div class="max-w-md border-4 rounded-xl shadow-2xl dark:border-2 my-2">
    <img class="w-full rounded-tl-lg rounded-tr-lg hover:cursor-pointer" v-bind:src=$props.url @click="() => openCertificate($props.url)" />
    <h3 class="text-center font-semibold text-xl dark:text-white">{{ $props.title }}</h3>
    <hr />
    <p class="text-justify p-4 dark:text-white">{{ $props.description }}</p>
  </div>
</template>

<style scoped>
  /* .card {
    max-width: 400px;

    box-sizing: border-box;
    border: 4px solid whitesmoke;
  }

  .card:hover {
    box-shadow: 0 0 1px 2px;
    border: 2px solid black;
  } */
</style>
