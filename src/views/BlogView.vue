<script setup lang="ts">
import BlogLink from '@/components/ui/BlogLink.vue';

</script>

<template>
  <div class="text-black flex flex-wrap w-screen h-full">
    <div class="w-3/12 bg-slate-200 m-2 rounded-2xl shadow-2xl">
      <h1 class="text-center mt-4 font-semibold text-3xl">Blog</h1>
      <BlogLink link="/" title="diamg" />
      <BlogLink link="/blah" title="blah" />
      <BlogLink link="/certificates" title="certs" />
      <BlogLink link="/certificates" title="certis" />
      <BlogLink link="/certificates" title="certificates" />
    </div>
  </div>
</template>
