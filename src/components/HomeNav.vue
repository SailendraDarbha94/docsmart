<script setup lang="ts">
import HelloWorld from './HelloWorld.vue'
import IconGithub from './icons/IconGithub.vue'
import IconTwitter from './icons/IconTwitter.vue'
import IconLinked from './icons/IconLinked.vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const routeTo = (path: string) => {
  console.log(path)
  // write a function using switch case that uses router.push(path) to navigate to the respective path
  switch (path) {
    case 'github':
      window.open('https://github.com/SailendraDarbha94', '_blank')
      break
    case 'linked':
      window.open('https://www.linkedin.com/in/sailendra-darbha', '_blank')
      break
    case 'twitter':
      router.push('/blah')
      //window.open('https://github.com/SailendraDarbha94', '_blank')
      break
    default:
      break
    // router.push(path)
  }
}
</script>
<template>
  <header class="h-full pl-8 py-4">
    <!-- <img alt="Vue logo" class="logo rounded-full" src="@/assets/dentist.png" width="125" height="125" /> -->

    <div class="">
      <HelloWorld msg="Dr. Sailendra Darbha" />
      <div class="flex w-full p-2 mt-4 justify-evenly items-center bg-slate-200 rounded-lg">
        <IconGithub @github="() => routeTo('github')" />
        <IconLinked @linked="() => routeTo('linked')" />
        <IconTwitter @twitter="() => routeTo('twitter')" />
      </div>
      <nav class="flex justify-center items-center min-h-10">
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <a @click="$emit('home')" class="text-black text-lg dark:text-green-500">Home</a>
        <a @click="$emit('projects')" class="text-black text-lg dark:text-green-500">Projects</a>
        <!-- <RouterLink to="/projects">Projects</RouterLink> -->
        <RouterLink to="/certificates" class="text-black text-lg dark:text-green-500"
          >Certificates</RouterLink
        >
        <RouterLink to="/blog" class="text-black text-lg dark:text-green-500">Blog</RouterLink>
      </nav>
    </div>
  </header>
</template>
<style scoped>
a:hover {
  cursor: pointer;
}
.wrapper {
  background-color: aqua;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
header {
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
