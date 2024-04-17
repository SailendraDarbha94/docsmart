<script setup lang="ts">
import IconPointer from '@/components/icons/IconPointer.vue'
import IconThree from '@/components/icons/IconThree.vue'
import { ref } from 'vue'

const navbar = ref('h-14')

const toggleNavbar = () => {
  navbar.value = navbar.value === 'h-14' ? 'h-64' : 'h-14'
}
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
        <IconThree />
      </span>
      <span
        class="w-[98%] h-10 my-2 flex justify-center items-center font-semibold text-xl hover:cursor-pointer mx-auto bg-teal-300 rounded-lg"
      >
        <IconPointer />
        Router
      </span>
      <span
        class="w-[98%] h-10 my-2 flex justify-center items-center font-semibold text-xl hover:cursor-pointer mx-auto bg-teal-300 rounded-lg"
      >
        <IconPointer />
        RouterItem#2
      </span>
    </div>
</template>