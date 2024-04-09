<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useFetch } from '@vueuse/core'
defineProps<{ msg: string }>()
const quote = ref('')
const author = ref('')
onMounted(async () => {
  const { isFetching, error, data }: any = await useFetch(
    'https://api.api-ninjas.com/v1/quotes?category=inspirational',
    {
      headers: {
        'X-Api-Key': import.meta.env.VITE_NINJA_KEY
      }
    }
  )
  if (data) {
    const newData = await JSON.parse(data.value)
    console.log(newData[0])
    author.value = newData[0].author
    quote.value = newData[0].quote
  }
})

const quotesFunction = async () => {
  console.log('clicked func')
}
</script>

<template>
  <div class="">
    <h1 class="dark:text-green-300 text-purple-500">{{ msg }}</h1>
    <h4 class="font-semibold text-pretty">
      You’ve stumbled upon the humble abode of a self-taught developer who also happens to be a
      Dentist, I've been a curious person for as long as I can remember, always trying to soak up
      knowledge as much as I can, on this wonderfully amazing and incredibly unfair 
      journey that we call Life, which I believe is both the
      means and an end in itself
    </h4>
    <br />
    <p class="block text-yellow-300 hover:cursor-pointer" @click="quotesFunction">
      <i>
        {{ quote }}
        <span class="inline-block right-0">- {{ author }}</span>
      </i>
    </p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
