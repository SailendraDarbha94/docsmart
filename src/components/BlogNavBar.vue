<script lang="ts" setup>
import { ref } from 'vue';

defineProps<{baseLinkText:string, links:any}>()
    const expanded = ref(false);

    const toggleExpanded = () => {
      expanded.value = !expanded.value;
    };



</script>
<template>
    <div class="" @click="toggleExpanded">
      <div v-if="expanded">expanded navbar</div>
      <div class="" v-else>normal navbar</div>
    </div>
  </template>
  
  <style>

  </style>
  