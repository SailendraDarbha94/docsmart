<script setup lang="ts">
import IconPointer from '../icons/IconPointer.vue';

defineProps<{ link: string, title: string }>()

import { useRouter } from 'vue-router';


const router = useRouter();

const navigateToUrl = (url: string) => {
  router.push(url);
}
</script>

<template>
    <div class="flex text-black bg-red-200 items-center dark:bg-yellow-200 m-2 p-2 dark:border-black rounded-xl border-2 hover:border-black hover:shadow-xl hover:cursor-pointer" @click="() => navigateToUrl(link)">
        <div class="w-1/5 flex justify-center"><IconPointer /></div>
        <span class="block w-4/5 text-left ml-2 font-semibold text-lg text-wrap">{{ title }}</span>
    </div>
</template>


<style scoped>

</style>
