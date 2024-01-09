<script lang="ts" setup>
import { useToggler } from '~/composables/states';

const router = useRouter()

const toggler = useToggler()

// watch(router, () => {
//     router.afterEach(() => {
//         console.log("collapse the menu")
//     })
// })
</script>

<template>
    <div class="fixed bottom-0 left-0 w-full">
        <nav class="flex justify-between items-center font-mono bg-slate-200 m-2 px-2 py-3 rounded-xl">
            <div v-if="toggler" class="flex flex-col justify-center items-center w-full px-4">
                <p class="flex font-extrabold justify-around items-center"> Dr
                    <IconsDoctor /> Developer
                </p>

                <!-- <NuxtLink to="/" class="flex justify-between w-full"> -->
                <button class="flex justify-between w-full" @click="() => { router.push('/'), toggler = false }">
                    Home
                    <IconsHome class="h-8 w-8 inline-block" />
                </button>

                <!-- </NuxtLink> -->
                <!-- <NuxtLink to="/blog" class="flex justify-between w-full"> -->
                <button class="flex justify-between w-full" @click="() => { router.push('/blog'), toggler = false }">
                    Blog
                    <IconsBlog class="h-8 w-8 inline-block" />
                </button>
                <!-- </NuxtLink> -->
                <!-- <NuxtLink to="/test-view" class="flex justify-between w-full"> -->
                <button class="flex justify-between w-full" @click="() => { router.push('/test-view'), toggler = false }">
                    Test-View
                    <IconsBell class="h-8 w-8 inline-block" />
                </button>
                <!-- </NuxtLink> -->
                <button @click="() => toggler = false">
                    <IconsCancel class="h-10 w-10 hover:cursor-pointer" />
                </button>
            </div>
            <div v-else class="flex w-full justify-between">
                <p class="flex font-extrabold justify-around items-center"> Dr
                    <IconsDoctor /> Developer
                </p>
                <button @click="() => toggler = true">
                    <IconsHamburger class="h-8 w-8" />
                </button>
            </div>

        </nav>
    </div>
</template>