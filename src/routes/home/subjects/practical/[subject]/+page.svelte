<script lang="ts">
	import Loader from '$components/Loader.svelte';
	import Quiz from '$components/Quiz.svelte';
	import supabase from '$utils/supabase';
	import typewriter from '$utils/typewriter';
	import Icon from '@iconify/svelte';
	import penguin from '$lib/assets/penguin.gif';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	// interface Quiz {
	// 	created_at: string;
	// 	id: number;
	// 	question: string;
	// 	answer: string;
	// 	options: string[];
	// }

	export let data: any;
	let loading: boolean = false;

	// async function checkAnswer(value:string, question:Quiz) {
	// 	if(value === question.answer){
	// 		loading = true;
	// 		marks = marks + 1
	// 	}
	// }
	let marks: number = 0;
	let mistakes: number = 0;
	let birthdate: string = 'sailendra.darbha@gmail.com';
	$: marks, mistakes;
</script>

<div class="flex flex-col w-full h-full items-center bg-blue-300 dark:bg-blue-800">
	<div class="flex w-full flex-row justify-between">
		<div class="text-center card m-4 p-4 text-2xl font-bold" class:text-sucess-500={marks > 0}>
			Marks : {marks}
		</div>
		<div class="text-center card m-4 p-4 text-2xl font-bold" class:text-sucess-500={marks > 0}>
			Mistakes : {mistakes}
		</div>
	</div>
	{#if data.user?.email == birthdate && marks == 10}
		<div in:typewriter={{ speed: 40, delay: 40 }} class="w-full text-center">
			<p class="h2 my-2 py-2 font-extrabold underline rounded-lg text-clip">
				Happy Birthday Baby Penguin !
			</p>
			<img src={penguin} alt="penguin" class="w-full px-2 rounded-2xl" />
		</div>
	{/if}
	{#if data.questions}
		{#each data.questions as question}
			<div class="w-full p-2">
				<Quiz data={question} on:correct={() => marks++} on:wrong={() => mistakes++} />
			</div>
		{/each}
	{/if}
</div>

<!-- markup (zero or more items) goes here -->

<style lang="postcss">
	/* your styles go here */
</style>
