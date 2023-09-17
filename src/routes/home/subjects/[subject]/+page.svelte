<script lang="ts">
	import Loader from '$components/Loader.svelte';
	import supabase from '$utils/supabase';
	import Icon from '@iconify/svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	export let data: any;
	let loading: boolean = false;
	console.log(data);
    let answer:string = "Loading...";
	async function fetchAnswer(param: number) {
		loading = true;
		//console.log(param);
		let { data: answers, error } = await supabase
			.from('answers')
			.select('*')
			.eq('question_id', param);
		//console.log(answers, error);
        if(answers){
            answer = answers[0].answer
        }
		loading = false;
	}
</script>

<main class="flex justify-center">
	<Accordion autocollapse>
		{#each data.questions as question}
			<AccordionItem
				class="m-2 p-2 shadow-lg rounded-md"
				on:click={() => {
					fetchAnswer(question.id);
				}}
			>
				<svelte:fragment slot="lead">
					<Icon icon="pepicons-pop:question" />
				</svelte:fragment>
				<svelte:fragment slot="summary">{question.question}</svelte:fragment>
				<svelte:fragment slot="content">
					{#if loading}
						<Loader />
					{:else}
						<p>{answer}</p>
					{/if}
				</svelte:fragment>
			</AccordionItem>
		{/each}

		<!-- ... -->
	</Accordion>
</main>

<!-- markup (zero or more items) goes here -->

<style lang="postcss">
	/* your styles go here */
	.accordion {
        margin: 5px;
        padding: 5px;
        box-shadow: 0 0 3px 5px rgba(12, 123, 233, 0.7);
	}
</style>
