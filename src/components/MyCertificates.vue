<script setup lang="ts">
import CertificateCard from './ui/CertificateCard.vue'
interface Certificate {
  title: string
  description: string
  url: string
}
const Props = {
  title: 'Title',
  description: 'Desc.',
  url: '/aot.jpeg'
}

const certificatesArr: Certificate[] = [
  {
    title: 'FEND',
    description: 'A course on Front-End Development offered by Udacity and co-created by Google',
    url: '/frontEndNanodegree.png'
  },
  {
    title: 'UI/UX',
    description:
      'A five-course specialization on User Interface Design created by University of Minnesota offered by Coursera',
    url: '/interfaceDesign.png'
  },
  {
    title: 'PHP',
    description:
      'A PHP fundamentals course created by University of Michigan that taught me the basics of PHP',
    url: './php.png'
  },
  {
    title: 'Project Management',
    description:
      'The second course in a 6 course specialization from Google that taught about Project Initiation',
    url: './projectInitiation.png'
  }
]
</script>

<template>
  <div
    class="w-full h-full p-4 gap-2 mt-20 flex flex-row flex-wrap justify-between"
  >
    <CertificateCard v-bind:key="certificate.url" v-for="certificate in certificatesArr" v-bind="certificate"  />
  </div>
</template>

<style scoped>

</style>
