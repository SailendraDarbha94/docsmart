<script lang="ts" setup>
    import introText from "./data.json"

    const imgClicked = ref<boolean>(false)
</script>
<template>
    <div class="flex flex-col md:flex-row flex-wrap  min-w-full justify-center items-center py-2">

        <img v-if="imgClicked" src="/img/profile.png" alt="profile picture" class="w-1/2 hover:cursor-pointer p-10" @click="() => imgClicked = !imgClicked">
        <img v-else src="/img/photo.png" alt="profile picture" class="w-1/2 hover:cursor-pointer p-10" @click="() => imgClicked = !imgClicked">
        <p class="font-semibold font-mono text-lg px-2 w-1/2">
            <h1 class="typewriter">Hello there, I'm Sailendra Darbha,</h1>
            <span class="block">{{ introText.intro }}</span>
            <span class="hidden lg:block">{{ introText.outro }}</span>
        </p>
    </div>
    
</template>
<style scoped>
.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}
</style>