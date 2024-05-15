<script setup lang="ts">
import BottomNavbar from '@/components/BottomNavbar.vue'
import BlogLink from '@/components/ui/BlogLink.vue'
</script>

<template>
  <div class="flex flex-wrap w-screen h-full">
    <div
      class="hidden md:block w-3/12 bg-slate-200 dark:bg-transparent dark:border-slate-200 dark:border-2 m-2 rounded-2xl shadow-2xl"
    >
      <h1 class="text-center mt-4 font-semibold text-3xl dark:text-slate-200">Blog</h1>
      <BlogLink link="/" title="Dr Developer" />
      <BlogLink link="/mc-donalds-shall-not-pass" title="Enshittification of McDonalds" />
    </div>
    <div class=" w-full md:w-8/12 mx-auto mt-2">
      <h1 class="p-2 my-6 font-semibold text-3xl text-center underline">
        Why write a blog in the age of ChatGPT ?
      </h1>
      <section class="text-lg p-2 text-justify">
        Up until the release of ChatGPT around the beginning of 2023, the word Artifical
        Intelligence was obscure from general public and was only known to a few. The release of
        ChatGPT changed that. It was the first time that a general purpose AI was released, well not
        exactly the first but as Steve Jobs would say, "The first one that just works". The AI was
        able to generate almost human-like text in any style you wanted Gangster or Rapper, usually
        both.
      </section>
      <p class="text-lg italic text-center font-light w-full my-4 p-4">
        Why then would anybody spend hours writing an article when ChatGPT could just do it in
        minutes if not seconds ?
      </p>
      <section class="text-lg p-2 text-justify">
        One might posit that ChatGPT is not a human. It does not have the ability to feel, to
        experience, to learn from its mistakes. It is a machine, a very powerful machine but a machine
        nonetheless. It does not have the ability to understand the world around it, it can only
        generate text based on the data it has been trained on. It does not have the ability to
        understand the emotions of the person reading the text, it can only generate text based on
        the style one might want.
      </section>
      <p class="text-lg italic text-center font-light w-full my-4 p-4">
        But none of my apprehensions could ever be explained as well as this 5 minute video of Stephen Fry reading an open letter by Nick Cave does!
      </p>
      <div class="flex w-full justify-center items-center p-4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_Pf4GmQY8Ow?si=8N1PZeIoQnPubZQY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <section class="text-lg p-2 text-justify">
        So it is with great uncertainty that I write this blog. I do not know if it will be read by anyone ever but what I do know
        is that I have to write, by myself and read a lot more than I have been reading. Though I'm not deciding to be a "luddite", so I will be using ChatGPT but how I will be using it
        will differ greatly from the writer's room at Marvel Studios. To find out how I'm using ChatGPT, you will have to read my blog on the <span class="text-lg font-semibold underline italic">Enshittification of McDonalds</span>
      </section>
    </div>
    <BottomNavbar />
  </div>
</template>
