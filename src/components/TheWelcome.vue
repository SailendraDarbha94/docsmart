<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import InterfaceIcon from './icons/IconInterface.vue'
import ToolingIcon from './icons/IconTooling.vue'
import BookIcon from './icons/IconBook.vue'
import UpIcon from './icons/IconUp.vue'
import ThreeIcon from './icons/IconThree.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import PointerIcon from './icons/IconPointer.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <!-- <DocumentationIcon /> -->
      <PointerIcon />
    </template>
    <template #heading>Front End Nanodegree </template>
    Got frustrated outta my mind with college and the accompanying shenanigans so took a few years
    break & completed a full front-end course co-created by Google and offered by Udacity for a
    duration of 6 months.
    <a href="confirm.udacity.com/PAERKPLN" target="_blank" rel="noopener" 
    class="dark:text-yellow-300 text-blue-700 hover:bg-transparent"
      >click to verify</a
    >
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <!-- <ToolingIcon /> -->
      <InterfaceIcon />
    </template>
    <template #heading>User Interface Design Specialization</template>
    My interest in the field of design grew immensely and so I took up a five course specialization
    including a capstone project that was taught by esteemed professors at University of Minnesota.
    <a
      href="https://coursera.org/share/7e9438f0e4dc65ebf534f0cdbb3e4136"
      class="dark:text-yellow-300 text-blue-700 hover:bg-transparent"
      target="_blank"
      rel="noopener"
      >click to verify</a
    >
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <BookIcon />
      <!-- <EcosystemIcon /> -->
    </template>
    <template #heading>Bachelors Degree in Dental Surgery</template>

    Twas about time I went back to my old college and finish what I'd left halfway through, cause
    I'm not a quitter (<span class="dark:text-green-300 text-purple-700"
      >is what I tell myself when it was mostly my mom's nagging that made me finish my degree</span
    >)
    <!-- <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a> -->
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <!-- <CommunityIcon /> -->
      <ThreeIcon />
    </template>
    <template #heading>First Job</template>
    Thought I was doomed to freelance as companies didn't seem interested in hiring dentists to
    build websites, but then, got my first break at
    <a
      href="https://www.e3next.com/"
      target="_blank"
      rel="noopener"
      class="dark:text-green-300 hover:bg-transparent text-blue-700"
      >E3Next</a
    >. A small startup with big clients such as <span class="text-purple-700 dark:text-green-300">Albertsons</span> and
    <span class="dark:text-green-300 text-purple-700">UrbanLadder</span>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <!-- <SupportIcon /> -->
      <UpIcon />
    </template>
    <template #heading>Second Job</template>
    The next year was wonderful and terrifying at the same time, cause the lockdowns were gone and
    there was an actual office to go to with a real coffee machine, but my imposter syndrome peaked
    cause when you're surrounded by super talented people in a unicorn startup such as
    <a
      href="https://blinkit.com/"
      target="_blank"
      rel="noopener"
      class="dark:text-yellow-300 text-blue-700 hover:bg-transparent"
      >BlinkIT</a
    >
    it is a kind of overwhelming that I can't describe here
    <!-- . What I can say is that
    <span class="dark:text-green-300 text-purple-700">I feel ready for the third one 😉</span> -->
  </WelcomeItem>
</template>
