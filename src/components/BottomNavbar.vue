<script setup lang="ts">
import IconPointer from '@/components/icons/IconPointer.vue'
import IconThree from '@/components/icons/IconThree.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const navbar = ref('h-14')
const toggleText = ref('Expand')
const toggleNavbar = () => {
  navbar.value = navbar.value === 'h-14' ? 'h-64' : 'h-14'
  toggleText.value = toggleText.value === 'Expand' ? 'Collapse' : 'Expand'
}

const router = useRouter()
</script>

<template>
  <div
    class="bg-teal-400 fixed bottom-0 left-0 w-full transition-height duration-300 md:hidden"
    :class="navbar"
  >
    <span
      class="w-[98%] h-10 my-2 flex justify-center items-center font-semibold text-xl hover:cursor-pointer mx-auto bg-teal-300 rounded-lg"
      @click="toggleNavbar"
    >
      {{ toggleText }}
    </span>
    <span
      class="w-[98%] h-10 my-2 flex justify-center items-center font-semibold text-xl hover:cursor-pointer mx-auto bg-teal-300 rounded-lg"
      @click="
        () => {
          router.push('/'), toggleNavbar()
        }
      "
      >Dr. Developer
    </span>
    <span
      class="w-[98%] h-10 my-2 flex justify-center items-center font-semibold text-xl hover:cursor-pointer mx-auto bg-teal-300 rounded-lg"
      @click="
        () => {
          router.push('/blog'), toggleNavbar()
        }
      "
    >
      Blog
    </span>
    <span
      class="w-[98%] h-10 my-2 flex justify-center items-center font-semibold text-xl hover:cursor-pointer mx-auto bg-teal-300 rounded-lg"
      @click="
        () => {
          router.push('/mc-donalds-shall-not-pass'), toggleNavbar()
        }
      "
    >
      Enshittification of McDonalds
    </span>
  </div>
</template>
