<script setup>
    
</script>

<template>
    <nav class="flex justify-between items-center font-mono bg-slate-200 m-2 px-2 py-3 rounded-xl shadow-md shadow-slate-400">
        <p class="flex font-extrabold justify-around items-center"> Dr<IconsDoctor /> Developer</p>
        <ul>
            <li>
                <NuxtLink to="/">
                    <button
                        class="inline-block p-1 mx-1 font-semibold hover:bg-black hover:text-white px-2 rounded-md">
                        Home
                    </button>
                </NuxtLink>
                <NuxtLink to="/blog">
                    <button
                        class="inline-block p-1 mx-1 font-semibold hover:bg-black hover:text-white px-2 rounded-md">
                       Blog 
                    </button>
                </NuxtLink>
                <NuxtLink to="/test-view">
                    <button
                        class="inline-block p-1 mx-1 font-semibold hover:bg-black hover:text-white px-2 rounded-md">
                        Test-View
                    </button>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>