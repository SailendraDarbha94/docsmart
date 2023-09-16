<script lang="ts">
	// your script goes here
	import { page } from '$app/stores';
	import supabase from '$utils/supabase.js';
	import { onMount } from 'svelte';
	import { error } from '@sveltejs/kit';
	interface Subject {
		created_at: string;
		id: number;
		name: string;
		uni: string;
		year: string;
	}
	export let data;

	const subjects: Subject[] | null = data.subjects;
</script>

<section class="flex flex-col items-center">
	{#if subjects}
		{#each subjects as subject}
			<a href="/home/subjects/{subject.id}" class="w-4/6 rounded-lg shadow-xl bg-pink-400 m-2 p-4 text-center">
				{subject.name}
			</a>
		{/each}
	{/if}
</section>

<!-- markup (zero or more items) goes here -->

<style lang="postcss">
	/* your styles go here */
</style>
