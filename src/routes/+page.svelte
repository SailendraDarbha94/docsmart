<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import logo from '$lib/assets/main_logo.png';
	import { INTROTEXT } from '$lib/store';
	import typewriter from '$utils/typewriter.js';
	import { onMount } from 'svelte';
	import penguin from '$lib/assets/penguin.gif'
	let loaded: boolean = false;
	onMount(() => (loaded = true));
	export let data;

	let birthdate: string = 'syedruqaiya22@gmail.com';
</script>

<div class="h-full flex flex-wrap w-full dark:bg-blue-800 justify-center items-center">
	{#if data.user?.email == birthdate}
		<div in:typewriter={{ speed: 40, delay: 40 }} class="w-full text-center">
			<p class="h2 my-2 py-2 font-extrabold underline rounded-lg text-clip">
				Happy Birthday Baby Penguin !
			</p>
			<img src={penguin} alt="penguin" class="w-full px-2 rounded-2xl" />
		</div>
	{/if}
	{#if data.user}
		{#if loaded}
			<div in:typewriter={{ speed: 40, delay: 40 }} class="w-full text-center">
				<p class="h2 my-2 py-2 font-extrabold underline rounded-lg text-clip">
					Welcome to Amplify Dentistry {data?.user?.email}
				</p>
			</div>
		{/if}
	{:else}
		{#if loaded}
			<div in:typewriter={{ speed: 40, delay: 40 }} class="w-full text-center">
				<p class="h2 my-2 py-2 font-extrabold underline rounded-lg text-clip">
					Amplify your Dental Knowledge with
				</p>
			</div>
		{/if}
		<div class="space-y-10 text-center flex flex-col items-center">
			<figure>
				<section class="img-bg" />
				<img src={logo} class="w-80 h-80" alt="logo" />
			</figure>
			<div class="flex justify-center space-x-2">
				<a
					class="btn variant-filled-secondary dark:variant-filled-primary"
					href="/auth/sign-in"
					rel="noreferrer"
				>
					One click Login
				</a>
			</div>
			<div class="space-y-2">
				<p class="flex p-4 text-justify text-xl italic">{INTROTEXT}</p>
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 3s cubic-bezier(0, 0, 0, 0.5) infinite, glow 3s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-blue-600/100;
		}
		33% {
			@apply bg-blue-500/100;
		}
		66% {
			@apply bg-blue-400/100;
		}
		100% {
			@apply bg-blue-300/100;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
