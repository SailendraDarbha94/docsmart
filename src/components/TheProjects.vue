<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import InterfaceIcon from './icons/IconInterface.vue'
import ToolingIcon from './icons/IconTooling.vue'
import BookIcon from './icons/IconBook.vue'
import UpIcon from './icons/IconUp.vue'
import ThreeIcon from './icons/IconThree.vue'
import AirIcon from './icons/IconAir.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import PointerIcon from './icons/IconPointer.vue'
import CameraIcon from './icons/IconCamera.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <!-- <DocumentationIcon /> -->
      <!-- <PointerIcon /> -->
      <CameraIcon />
    </template>
    <template #heading>Photofables</template>
    The first website I ever built was for a photographer named Varun Singh based out of New Delhi who loves to travel
    and explore the world. He has been to Iceland & Japan amongst other places.
    <a href="confirm.udacity.com/PAERKPLN" target="_blank" rel="noopener" class="text-yellow-300">view repository</a>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <!-- <ToolingIcon /> -->
      <!-- <InterfaceIcon /> -->
      <AirIcon />
    </template>
    <template #heading>Pankh.AI</template>
    This is a website that allows users to bring their own data and train custom LLMs that can be deployed 
    on the cloud(self-hosting) or managed by the team at Pankh.AI
    <a href="confirm.udacity.com/PAERKPLN" target="_blank" rel="noopener" class="text-yellow-300">view repository</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <BookIcon />
      <!-- <EcosystemIcon /> -->
    </template>
    <template #heading>Amplify Dentistry</template>
    This is my own brainchild that uses OpenAI's APIs under the hood by passing the context
    of a particular textbook and answering the student's doubts using it's context.
    <a href="https://amplifydentistry.com/" class="text-yellow-300" target="_blank" rel="noopener">view website</a>
    <!-- There is also quiz generation on demand and other features as well. -->
    <!-- <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a> -->
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
      <!-- <ThreeIcon /> -->
    </template>
    <template #heading>KSDC Communities</template>
    This is a website for Dentists to find their next Job Opportunities and for Clinics to find
    new talent.
    <a href="https://ksdc-community.vercel.app/" class="text-yellow-300" target="_blank" rel="noopener">view website</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <!-- <SupportIcon /> -->
      <UpIcon />
    </template>
    <template #heading>DekhoBai</template>
    This is the latest idea that I'm currently working on which is a Hyperlocal Online Garage Sale with a bidding system
    <span class="text-green-300">Not sure about the name though 😉</span>
  </WelcomeItem>
</template>
