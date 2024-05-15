<script setup lang="ts">
import IconMenu from '@/components/icons/IconMenu.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const navbar = ref('h-14')
const toggleText = ref('Expand')
const toggleNavbar = () => {
  navbar.value = navbar.value === 'h-14' ? 'h-64' : 'h-14'
  toggleText.value = toggleText.value === 'Expand' ? 'Close' : 'Expand'
}

const router = useRouter()
</script>

<template>
  <div
    class="bg-slate-400 text-black fixed bottom-0 left-0 w-full transition-height duration-300 lg:hidden"
    :class="navbar"
  >
    <span
      class="w-[98%] h-10 my-2 flex justify-center items-center font-semibold text-xl hover:cursor-pointer mx-auto bg-slate-300 rounded-lg"
      @click="toggleNavbar"
    >
      <IconMenu class="mx-2" v-if="toggleText === 'Expand'" /> {{ toggleText }}
    </span>
    <span
      class="w-[98%] h-10 my-2 flex justify-center items-center font-semibold text-xl hover:cursor-pointer mx-auto bg-slate-300 rounded-lg"
      @click="
        () => {
          router.push('/'), toggleNavbar()
        }
      "
      >Dr. Developer
    </span>
    <span
      class="w-[98%] h-10 my-2 flex justify-center items-center font-semibold text-xl hover:cursor-pointer mx-auto bg-slate-300 rounded-lg"
      @click="
        () => {
          router.push('/blog'), toggleNavbar()
        }
      "
    >
      Blog
    </span>
    <span
      class="w-[98%] h-10 my-2 flex justify-center items-center font-semibold text-xl hover:cursor-pointer mx-auto bg-slate-300 rounded-lg"
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
