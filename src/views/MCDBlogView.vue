<script setup lang="ts">
import PriceGuesser from '@/components/PriceGuesser.vue'
import BlogLink from '@/components/ui/BlogLink.vue'
import BottomNavbar from '@/components/BottomNavbar.vue'
</script>

<template>
  <div class="flex flex-wrap w-screen h-full mb-10">
    <div
      class="hidden md:block w-3/12 bg-slate-200 dark:bg-transparent dark:border-slate-200 dark:border-2 m-2 rounded-2xl shadow-2xl"
    >
      <h1 class="text-center mt-4 font-semibold text-3xl dark:text-slate-200">Blog</h1>
      <BlogLink link="/" title="Dr Developer" />
      <BlogLink link="/blog" title="Blog" />
      <BlogLink link="/mc-donalds-shall-not-pass" title="Enshittification of McDonalds" />
    </div>
    <div class="w-full md:w-8/12 mx-auto mt-2 mb-14">
      <h1 class="p-4 md:p-2 font-semibold text-3xl text-center rounded-md">
        McDonalds has been <span class="inline underline font-bold">Enshittified</span>!
      </h1>
      <p class="bg-slate-200 p-4 text-center rounded-md dark:bg-slate-600">
        If you&apos;re left wondering what the heck that even means then I implore you to watch
        <a
          href="https://youtu.be/wVYG1mu8Lg8?si=KJ7Gom74lF8_vFK-"
          target="_blank"
          class="text-blue-500 dark:text-green-300 underline"
          >this video</a
        >
        video by one of my favorite YouTube channels
        <a
          href="https://www.youtube.com/@Mrwhosetheboss"
          target="_blank"
          class="text-blue-500 underline dark:text-green-300"
          >MrWhoseTheBoss</a
        >
        and I assure you it will ring true to you.
      </p>
      <section class="text-lg p-4 md:p-2 text-justify">
        The first time I ever tried a McDonalds burger was way back in 2008, I was in school at
        that time and had finally gotten the 20 rupees I had been pestering mom for weeks to eat the
        new McAlooTikki burger
        <span class="text-md text-blue-700 leading-3 dark:text-green-300"
          >(kids of today will not know how happy a 2 rs pocket money allowance made us 90s kids
          back in early 2000s)</span
        >, I walked a few kilometres to the only McDonalds nearby in Connaught Place, New Delhi. I
        handed over the 20 rupees note and ordered a McAlooTikki burger, the waiter was courteous
        and handed me the burger with a smile. I ate it and since it was the first ever burger I had
        eaten, I loved it. The McDonalds tagline of
        <span class="bg-red-500 inline-block max-w-fit text-yellow-300 font-semibold rounded-md px-2 py-1"
          >I'm Lovin It</span
        >
        became true for me then and for many years to come. After college, it became kind of a habit
        to order a McSpicyPaneer medium meal every couple months to feed the inner child in me. Safe
        to say McDonalds burger is my nostalgia bait.
      </section>
      <hr />
      <section class="p-4 md:p-2 text-lg text-justify w-full">
        As years went on, I started to notice a decline in the overall experience at McDonalds, but
        the my brain didn't register it as much. Maybe I didn't want to. Fast forward to 2024, I was
        jolted into a rude awakening.
      </section>
      <section class="p-4 md:p-2 flex flex-wrap items-center w-full">
        <div class="w-full md:w-1/3">
          <img src="/mcd.jpeg" alt="McDonalds" class="w-full h-64 object-cover rounded-lg" />
        </div>
        <p class="p-4 md:p-2 w-full md:w-2/3 md:text-lg text-justify">
          This time as I went to McDonalds I saw no one at the counter to take my order, instead I
          was directed towards this screen to order while the courteous but not so helpful staff
          stood behind me trying to guide me what to press which is annoying to say the least
          <span class="text-md text-blue-700 leading-3 dark:text-green-300"
            >(they were pressing my buttons to be honest)</span
          >. The new ordering system bombards you with more than 20 screens to interact with before
          you can place an order that you already had in mind and would hardly take a few seconds to
          utter at the counter
          <span class="text-md text-blue-700 leading-3 dark:text-green-300"
            >(withdrawing money from SBI ATM is a joyful experience in comparison)</span
          >. I just wanted to go to a biller and say "a McSpicy Paneer medium meal, thanks" then scan
          the code enter my UPI PIN and done!
        </p>
      </section>
      <hr />
      <section class="text-lg p-4 md:p-2 text-justify">
        The UI is not intuitive, the UX is not user friendly, the onscreen lag is akin to a
        resistive touchscreen smartphone back when they were first released in 2000s. The experience
        was so annoying that I knew I had to take my pedantic brother there and record his
        experience, he was flabbergasted to say the least. You can see his ordering experience in a
        short video at the end if you&apos;re interested.
      </section>
      <section class="text-lg p-4 md:p-2 text-justify">
        Coming to the point of how I realised the inherent Enshittification, as I mentioned the
        cheapest burger about a decade and half ago was 20rs. I asked ChatGPT to adjust the price
        according to inflation over 15 years and I found out that at best it should cost about 55rs
        even with 7% annual inflation even though the average for last 15 years would be much lower.
        Considering it is just a potato patty between two buns with a slice of tomato and a drop of
        chipotle. Can you guess the actual price ?
      </section>
      <PriceGuesser />
      <hr />
      <section class="text-lg p-4 md:p-2 text-justify">
        If you guessed it right, then you might be wondering what all the fuss is about cause it's
        still not that high compared to what it should be, but wait until you find out that it is
        the price before taxes and restaurant fees <span
          class="text-md text-blue-700 leading-3 dark:text-green-300"
          >(which used to be included in the prices displayed on-screen not too long ago)</span
        >. The total came to a whopping 98rs for a burger that is their cheapest option. I
        didn&apos;t actually pay much attention to it until I saw a video couple of days ago by
        MrWhoseTheBoss channel where he talks about Enshittification of Internet companies and I
        realised that their main purpose is hiking the price of their cheapest burger and degrading
        it&apos;s quality so much that you&apos;re basically forced to get a higher priced burger.
      </section>
      <section class="text-lg p-4 md:p-2 text-justify">
        While it didn&apos;t bother that much before I was made aware of it, as I was basically
        just going there to still feel connected to some part of my childhood, but after wrestling
        with 20 screens and spending an inordinate amount of time and money for a burger that was
        sub-par to say the least, I realised that I had been holding onto something that was gone a
        long time ago. So it is with no pleasure that I hereby declare that I shall not be going to
        McDonalds anymore and
        <span class="bg-red-500 inline-block max-w-fit text-yellow-300 font-semibold rounded-md px-2 py-1"
          >I'm Vowin It</span
        >
      </section>
      <h1 class="text-xl text-center">
        Here is the video of my brother going through the experience <br /><span
          class="text-sm text-blue-500 dark:text-green-300 italic"
          >(uploaded under protest by my brother might I add)</span
        >
      </h1>
      <div class="flex w-full justify-center items-center p-4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/111mGAzeOP8?si=UgHqsuj6K_pB1KgJ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <!-- I ate it and since it was the first ever burger I had eaten, I loved it. I was happy, I was excited, I was satisfied. I had been let down by the golden arches. I had been enshittified. -->
      <!-- I walked a couple kilometres to the only McDonalds nearby in Cannought Place, New Delhi. I was excited, I was hungry, I was broke. I ordered the burger, I sat down at a table in the corner and started to eat. The burger was cold, the fries were soggy and the coke was flat. I was disappointed, I was angry, I was sad. I had been let down by the golden arches. I had been enshittified. -->
      <!-- The year was 2008, the place was a small town in the middle of nowhere, the time was 2:30 AM. I was hungry, I was tired, I was broke. I had just finished my shift at the local McDonalds and I was craving a burger. I walked into the restaurant, the smell of grease and burnt meat hit me like a ton of bricks. I ordered a Big Mac, a large fry and a coke. I sat down at a table in the corner and started to eat. The burger was cold, the fries were soggy and the coke was flat. I was disappointed, I was angry, I was sad. I had been let down by the golden arches. I had been enshittified. -->
    </div>
  </div>
  <BottomNavbar />
</template>
