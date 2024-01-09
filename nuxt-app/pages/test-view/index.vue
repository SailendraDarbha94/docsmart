<script setup>
// definePageMeta({
//   pageTransition: {
//     name: 'rotate'
//   }
// })
const { $sayHello } = useNuxtApp()
$sayHello("Dr. Sailendra")
</script>
<template>
    <h2>Test your Views</h2>
</template>