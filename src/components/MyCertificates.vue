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
    title: 'Evaluating User Interfaces',
    description: 'An online non-credit course authorized by University of Minnesota and offered through Coursera that taught me about heuristics of Interface Design',
    url: '/certs/Evaluating User Interfaces-1.png'
  },
  {
    title: 'Front End Nanodegree',
    description: 'A course on Front-End Development offered by Udacity, co-created by Google & AT&T',
    url: '/certs/Front-End Nanodegree-1.png'
  },
  {
    title: 'UI/UX Capstone',
    description: 'Built a neighbourhood watch app with user stories and by following proper design priciples',
    url: '/certs/Interface Design Capstone-1.png'
  },
  {
    title: 'Interface Design Specialization',
    description: 'The final certificate which marks the completion of all five courses of Interface Design Specialization taught by Minnesota state University',
    url: '/certs/Interface Design Specialization-1.png'
  },
  {
    title: 'Intro to Interface Design',
    description: 'An introductory online non-credit course authorized by University of Minnesota and offered through Coursera',
    url: '/certs/Intro to UI-1.png'
  },
  {
    title: 'PHP',
    description: 'My first foray into the world of backend using PHP. Taught by Professor Chuck offered by University of Michigan on Coursera',
    url: '/certs/PHP-1.png'
  },
  {
    title: 'Project Execution',
    description: 'Learnt about execution principles of a project taught by Google offered by Coursera',
    url: '/certs/Project Mgmt Execution-1.png'
  },
  {
    title: 'Foundations of Project Management',
    description: 'Learned the fundamentals of Project Management in this course taught by Google and Offered by coursera',
    url: '/certs/Project Mgmt Foundations-1.png'
  },
  {
    title: 'Initiating a Project',
    description: 'This course taught me how to initiate a project and what are the key factors in the starting phase that lead to an on-time deliverable later on',
    url: '/certs/Project Mgmt Initiation-1.png'
  },
  {
    title: 'Project Planning',
    description: 'This course taught me the different planning strategies involved in project management and the importance of planning',
    url: '/certs/Project Mgmt Planning-1.png'
  },
  {
    title: 'Prototyping & Design',
    description: 'This course is all about prototyping and the different tools and techniques invloved in that process. Around this time I began reading design of everyday things by Don Norman',
    url: '/certs/Prototyping & Design-1.png'
  },
  {
    title: 'Python Data Structures',
    description: 'Taught by Professor Chuck of Michigan State University and offered by Coursera, this course was my foray into lists, tuples, dictionaries and arrays of python to name a few',
    url: '/certs/Python Data Structures-1.png'
  },
  {
    title: 'Intro to Python',
    description: 'This course was my first introduction to the language of python',
    url: '/certs/Python Getting Started-1.png'
  },
  {
    title: 'Python Web Scraping',
    description: 'This course taugh me how to scrape data from websites using beautiful soup library, created by University of Michigan offered by Coursera',
    url: '/certs/Python Web Data-1.png'
  },
  {
    title: 'Responsive Web Design Basics',
    description: 'It is exactly as the name states, i learned CSS flaxbox and CSS grid and how to use them to create cleaner interfaces without losing on performance',
    url: '/certs/Responsive Web Basics-1.png'
  },
  {
    title: 'Responsive Web Design Advanced',
    description: 'learned more about optimization of images for low-res screens and also about CDNs, taught by University of London offered on Coursera',
    url: '/certs/Responsive Web Design-1.png'
  },
  {
    title: 'SQL',
    description: 'In this course I learned about the fundamentals of relational databases and how to query databases and also about joins and such',
    url: '/certs/SQL-1.png'
  },
  {
    title: 'User Research & Design',
    description: 'This course taught me about user stories, how to take feedback and process it into actionable design decisions and so much more',
    url: '/certs/User Research & Design-1.png'
  },
  {
    title: 'Spanish Basics',
    description: 'I have always been interested to learn spanish and in this course taught by UC Davis institute, I learned the basics of the language that is spoken by the most number of countries in the world',
    url: '/certs/Spanish Vocabulary-1.png'
  },
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
