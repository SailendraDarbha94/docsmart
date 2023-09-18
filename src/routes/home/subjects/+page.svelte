<script lang="ts">
	import SubjectCard from '$components/SubjectCard.svelte';
import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="h-full w-full bg-blue-300 dark:bg-blue-800">
	<div class="flex flex-wrap justify-around">
		{#if data}
			{#each data.subjects as subject}
				<SubjectCard {subject} />
			{/each}
		{:else}
			<p>No Subjects to show</p>
		{/if}
	</div>
</main>

<!-- markup (zero or more items) goes here -->

<style>
	/* your styles go here */
</style>
