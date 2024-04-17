<script setup lang="ts">
import BlogLink from '@/components/ui/BlogLink.vue';



</script>

<template>
  <div class="text-black flex flex-wrap w-screen h-full">
    <div class="hidden md:block w-3/12 bg-slate-200 dark:bg-transparent dark:border-slate-200 dark:border-2 m-2 rounded-2xl shadow-2xl">
      <h1 class="text-center mt-4 font-semibold text-3xl dark:text-slate-200">Blog</h1>
      <BlogLink link="/" title="Dr Developer" />
      <BlogLink link="/mc-donalds-shall-not-pass" title="Enshittification of McDonalds" />
    </div>
    <div class="bg-red-200 w-full md:w-8/12 mx-auto mt-2">
      <h1 class="p-2 font-semibold text-3xl text-center underline">Could Mc Donalds' be any lamer!</h1>
    </div>
  </div>
</template>
