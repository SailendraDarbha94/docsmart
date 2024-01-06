<script setup>
const route = useRoute()

console.log(route.params)
</script>
<template>
    <h2 class="text-center bg-blue-300 text-black text-2xl"> id : {{ $route.params.id }} </h2>
</template>