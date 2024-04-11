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
    <div class="flex bg-red-200 m-2 p-2 rounded-xl border-2 hover:border-black hover:shadow-xl hover:cursor-pointer" @click="() => navigateToUrl(link)">
        <IconPointer />
        {{ link }}
    </div>
</template>


<style scoped>

</style>
