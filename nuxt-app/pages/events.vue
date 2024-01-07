<script setup>
    definePageMeta({
        layout: "custom"
    })
    const { sayHello } = useHello()
</script>
<template>
    <div>
        <h3 class="text-2xl font-mono">
            Good Days, bad days
        </h3>
        <button @click="sayHello()">
            Hello
        </button>
        <NuxtLink to="/">
            <IconsHome class="h-10 w-10 my-10 hover:cursor-pointer" />
            <!-- <span class="bg-blue-300 my-4 block max-w-sm text-center p-2 rounded-md text-black">Go Home</span> -->
        </NuxtLink>
    </div>
</template>