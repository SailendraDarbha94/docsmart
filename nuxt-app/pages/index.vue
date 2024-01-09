<script setup>
    import introText from "./data.json"
</script>
<template>
    <div class="flex flex-col md:flex-row  min-w-full justify-center items-center py-2">
        <img src="/img/profile.png" alt="profile picture" class="max-w-full">
        <p class="font-semibold font-mono text-lg m-2 px-2 max-w-full">
            <span class="block">{{ introText.intro }}</span>
            <span class="hidden lg:block">{{ introText.outro }}</span>
        </p>
    </div>
    
</template>