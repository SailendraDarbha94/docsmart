<script lang="ts">
	import Loader from '$components/Loader.svelte';
	import typewriter from '$utils/typewriter';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	interface Quiz {
		created_at: string;
		id: number;
		question: string;
		answer: string;
		options: string[];
	}

	export let data: Quiz;

	let answered: boolean = false;
	let message: string = 'correct answer!';
	async function checkAnswer(value: string) {
		answered = true;
		if (value.toLowerCase() === data.answer.toLowerCase()) {
			dispatch('correct');
		} else {
			dispatch('wrong');
			message = 'wrong answer!';
		}
	}
</script>

<div class="flex flex-wrap w-full h-full items-center  p-4">
	{#if answered}
		<div class="w-full" in:typewriter={{ speed: 20, delay: 20 }}>
			<h2 class="h2 text-center">{message}</h2>
		</div>
	{:else}
		<div
			class="m-2 p-2 w-full card card-hover text-center border-2 dark:bg-blue-300 dark:text-black border-white rounded-lg shadow-xl"
		>
			<p class="mb-2 w-full text-lg">{data.question}</p>
			<div class="flex flex-wrap justify-around">
				{#each data.options as option}
					<button
						class="w-full text-md md:w-2/5 btn variant-filled-warning dark:bg-blue-800 dark:text-white rounded-md my-2 p-2"
						on:click={() => checkAnswer(option)}
					>
						{option.toLowerCase()}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>

<!-- markup (zero or more items) goes here -->

<style lang="postcss">
	/* your styles go here */
</style>
