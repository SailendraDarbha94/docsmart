<script setup>
    const header = "Hello there !" 
    const desc = "sdljgdjg dsljkghdb eakjfgbhsdl sdhgakj sgflkasdgs aadskjsasajrhwrir rhabnfsbanff weaslkfamfba"
</script>
<template>
    <div class="w-full flex flex-wrap justify-center items-center min-h-fit shadow-sm hover:shadow-lg">
        <h1 class="w-full text-center font-xl font-bold border-black border-b-2">{{ header }}</h1>
        <img src="/img/profile.png" class="max-w-xs mx-auto p-3 border-2 border-blue-300" />
        <p class="w-full text-justify text-lg">{{ desc }}</p>
        <div class="w-full flex justify-around items-center p-2">
            <button class="w-1/3 p-2 shadow-md shadow-black">Link</button>
            <button class="w-1/3 p-2 shadow-md shadow-black">Action</button>
        </div>
    </div>
</template>