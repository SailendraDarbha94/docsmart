<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="h-full w-full">
	<div class="flex flex-wrap justify-around">
		{#if data}
			{#each data.subjects as subject}
				<a class="block card card-hover p-4 m-4 text-center w-full md:w-1/3" href="/home/subjects/{subject.id}">{subject.name}</a>
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
