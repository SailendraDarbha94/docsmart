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
  <div class="card rounded-xl mx-auto my-2">
    <img class="w-full rounded-tl-lg rounded-tr-lg hover:cursor-pointer" v-bind:src=$props.url @click="() => openCertificate($props.url)" />
    <h3 class="text-center font-semibold text-xl text-yellow-300">{{ $props.title }}</h3>
    <hr />
    <p class="text-justify p-4">{{ $props.description }}</p>
  </div>
</template>

<style scoped>
  .card {
    max-width: 400px;

    box-sizing: border-box;
    border: 1px solid whitesmoke;
  }

  .card:hover {
    box-shadow: 0 0 2px 4px;
  }
</style>
