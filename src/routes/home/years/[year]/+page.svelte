<script lang="ts">
	// your script goes here
	import { page } from '$app/stores';
	import supabase from '$utils/supabase.js';
	import { onMount } from 'svelte';
	import { error } from '@sveltejs/kit';
	import typewriter from '$utils/typewriter.js';
	import Notice from '$components/Notice.svelte';
	import SubjectCard from '$components/SubjectCard.svelte';
	interface Subject {
		created_at: string;
		id: number;
		name: string;
		uni: string;
		year: string;
	}

	interface Notice {
		id: number;
		created_at: string;
		content: string;
		years: number[];
		action_link: string | null;
	}
	export let data;

	const subjects: Subject[] | null = data.subjects;
	const notices: Notice[] | null = data.notices;
	let loading: boolean = false;
</script>

<section class="flex flex-col w-full h-full items-center bg-blue-300 dark:bg-blue-800">
	<div class="w-full bg-emerald-600 border-black border-2 p-2">
		<h2 class="h3 text-center dark:text-white text-black">Noticeboard</h2>
		{#if notices}
			{#each notices as notice}
				<Notice content={notice.content} link={null} />
			{/each}
		{:else}
			<p>No new notices at this time!</p>
		{/if}
	</div>
	{#if subjects}
		<div class="flex flex-row flex-wrap w-full justify-around">
			{#each subjects as subject}
				<SubjectCard {subject} />
			{/each}
		</div>
	{/if}
</section>

<!-- markup (zero or more items) goes here -->

<style lang="postcss">
	/* your styles go here */
</style>
