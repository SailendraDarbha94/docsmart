<script setup lang="ts">
import { ref } from 'vue'

const price = ref(55)
const message = ref('')
const priceGuesser = () => {
    if (price.value === 70) {
        message.value = 'You guessed it right!'
    } else if(price.value > 70) {
        message.value = 'You guessed it higher!'
    } else {
        message.value = 'You guessed it lower!'
    }
    
}
</script>

<template>
  <div class="min-h-40 w-full">
    <div class="h-full flex justify-around items-center max-w-fit bg-slate-200 rounded-xl p-4 mx-auto">
      <button class="text-black p-2 mx-2 w-20 bg-blue-50 rounded-lg" @click="() => price = price - 5">-5</button>
      <button class="text-black p-2 mx-2 w-20 bg-blue-50 rounded-lg" @click="() => price = price - 1">-</button>
      <p class="text-black mx-2 text-xl">{{ price }}</p>
      <button class="text-black p-2 mx-2 w-20 bg-blue-50 rounded-lg" @click="() => price = price + 1">+</button>
      <button class="text-black p-2 mx-2 w-20 bg-blue-50 rounded-lg" @click="() => price = price + 5">+5</button>
    </div>
    <p class="text-center text-lg font-mono font-bold my-1">{{ message }}</p>
    <button class="mx-auto block bg-blue-50 text-black rounded-md m-2 px-4 py-2" @click="priceGuesser">Guess</button>
  </div>
</template>
