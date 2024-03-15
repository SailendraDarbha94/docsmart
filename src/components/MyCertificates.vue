<script setup lang="ts">
    import CertificateCard from './ui/CertificateCard.vue';

    const Props={
        title: "Title",
        description: "Desc.",
        url: "/aot.jpeg"
    }
</script>

<template class="w-full">
    <div class="w-full h-full bg-red-400 flex flex-row flex-wrap">
        <CertificateCard v-bind="Props" />
        <CertificateCard v-bind="Props" />
        <CertificateCard v-bind="Props" />
        <CertificateCard v-bind="Props" />
        <CertificateCard v-bind="Props" />
        <CertificateCard v-bind="Props" />
        <CertificateCard v-bind="Props" />
        <CertificateCard v-bind="Props" />
    </div>
</template>

<style scoped>
.foobar {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: aqua;
    color: black;
    left: 0;
}

</style>