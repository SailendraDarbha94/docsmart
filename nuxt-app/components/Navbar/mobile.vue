<script setup>

</script>

<template>
    <div class="fixed bottom-0 left-0 w-full">
        <nav class="flex justify-between items-center font-mono bg-slate-200 m-2 px-2 py-3 rounded-xl">
            <p class="flex font-extrabold justify-around items-center"> Dr
                <IconsDoctor /> Developer
            </p>
            <ul class="flex justify-between items-center">
                <li>
                    <NuxtLink to="/">
                        <IconsHome class="h-8 w-8 inline-block" />
                    </NuxtLink>
                    <NuxtLink to="/events">
                        <IconsBell class="h-8 w-8 inline-block" />
                    </NuxtLink>
                    <NuxtLink to="/test-view">
                        <IconsDoctor class="h-8 w-8 inline-block" />
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>