<script lang="ts">
	import home from '$lib/assets/home.png';
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { redirect } from '@sveltejs/kit';
	import penguin from '$lib/assets/penguin.gif';
	import typewriter from '$utils/typewriter';
	// your script goes here
	export let data: PageData;
	let birthdate: string = 'syedruqaiya22@gmail.com';
</script>

<main class="flex flex-wrap h-full p-4 bg-blue-300 dark:bg-blue-800">
	{#if data.user}
		{#if data.user.email !== birthdate}
			<div
				class="md:mx-auto mx-8 sm:mx-4 w-full md:w-4/6 lg:w-3/6 h-44 sm:h-48 md:h-60 lg:h-80 rounded-lg"
			>
				<img src={home} alt="amplify dentistry" class="w-full h-full rounded-lg" />
			</div>
		{/if}
		<div class="w-full md:w-7/12 mx-auto flex flex-wrap justify-center">
			{#if data.user?.email == birthdate}
				<div in:typewriter={{ speed: 40, delay: 40 }} class="w-full text-center">
					<p class="h2 my-2 py-2 font-extrabold underline rounded-lg text-clip">
						Happy Birthday Baby Penguin !
					</p>
					<img src={penguin} alt="penguin" class="w-full px-2 rounded-2xl" />
				</div>
			{/if}
			<div
				class="w-2/5 place-self-end text-right border-b-2 border-r-2 border-black rounded-br-lg p-2 m-2"
			>
				<a href="/home/years/first" class="">
					<Icon icon="healthicons:tooth" class="ml-auto w-6 h-6 md:h-10 md:w-10" color={'white'} />
				</a>
			</div>
			<div
				class="w-2/5 text-left place-self-end border-b-2 border-l-2 rounded-bl-lg border-black p-2 m-2"
			>
				<div class="mr-auto flex">
					<a href="/home/years/second" class="flex">
						<Icon icon="healthicons:tooth" class="w-6 h-6 md:h-10  md:w-10" color={'white'} />
						<Icon icon="healthicons:tooth" class="w-6 h-6 md:h-10  md:w-10" color={'white'} />
					</a>
				</div>
			</div>
			<br />
			<div
				class="w-2/5 text-right place-self-start border-t-2 border-r-2 rounded-tr-lg border-black p-2 m-2"
			>
				<div class="flex justify-end">
					<a href="/home/years/fourth" class="flex">
						<Icon icon="healthicons:tooth" class="w-6 h-6 md:h-10  md:w-10" color={'white'} />
						<Icon icon="healthicons:tooth" class="w-6 h-6 md:h-10  md:w-10" color={'white'} />
						<Icon icon="healthicons:tooth" class="w-6 h-6 md:h-10  md:w-10" color={'white'} />
						<Icon icon="healthicons:tooth" class="w-6 h-6 md:h-10  md:w-10" color={'white'} />
					</a>
				</div>
			</div>
			<div
				class="w-2/5 text-left place-self-start border-t-2 border-l-2 rounded-tl-lg border-black p-2 m-2"
			>
				<div class="mr-auto flex">
					<a href="/home/years/third" class="flex">
						<Icon icon="healthicons:tooth" class="w-6 h-6 md:h-10  md:w-10" color={'white'} />
						<Icon icon="healthicons:tooth" class="w-6 h-6 md:h-10  md:w-10" color={'white'} />
						<Icon icon="healthicons:tooth" class="w-6 h-6 md:h-10  md:w-10" color={'white'} />
					</a>
				</div>
			</div>
		</div>
	{:else}
		<a
			class="card card-hover h-20 m-2 p-4 flex w-full justify-center items-center"
			href="/auth/sign-in">Sign Up to access the web application</a
		>
	{/if}
</main>

<!-- markup (zero or more items) goes here -->

<style lang="postcss">
	/* your styles go here */
	/* .main {
		background-image: url('/src/lib/assets/home.png');
		background-position: center;
		background-size: contain;
	} */
</style>
