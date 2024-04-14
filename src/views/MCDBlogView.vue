<script setup lang="ts">
import BlogLink from '@/components/ui/BlogLink.vue';
import BlogNavBar from '@/components/BlogNavBar.vue';

const links = [
        { text: 'Link 1', url: '#' },
        { text: 'Link 2', url: '#' },
        { text: 'Link 3', url: '#' }
      ]
</script>

<template>
  <div class="text-black flex flex-wrap w-screen h-full">
    <div class="hidden md:block w-3/12 bg-slate-200 dark:bg-transparent dark:border-slate-200 dark:border-2 m-2 rounded-2xl shadow-2xl">
      <h1 class="text-center mt-4 font-semibold text-3xl dark:text-slate-200">Blog</h1>
      <BlogLink link="/" title="blakkk" />
      <BlogLink link="/blah" title="blah" />
      <BlogLink link="/certificates" title="certs" />
      <BlogLink link="/certificates" title="certis" />
      <BlogLink link="/certificates" title="certificates" />
    </div>
    <div class="bg-red-200 w-full md:w-8/12 mx-auto mt-2">
      <h1 class="p-2 font-semibold text-3xl text-center underline">Could Mc Donalds' be any lamer!</h1>
    </div>
    <div class="fixed bottom-0 left-0 w-full bg-red-400 mb-4 md:hidden">
      <BlogNavBar baseLinkText="something" links={links} />
    </div>
  </div>
</template>
