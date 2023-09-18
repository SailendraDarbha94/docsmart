<script lang="ts">
	import type { PageServerData } from './$types';

	// your script goes here
	let question: string = '';
	export let questionUpload: boolean = false;
	let loading: boolean = false;

	interface Subject {
		created_at: string;
		id: number;
		name: string;
		uni: string;
		year: string;
	}

	export let data: PageServerData;

	const subjects: Subject[] | null = data.subs;
</script>

<main class="flex flex-wrap flex-col md:flex-row h-full bg-blue-300 dark:bg-blue-800">
	<div class="w-full text-center text-xl">Welcome to the Admin section</div>
	<button class="btn variant-filled-success w-full my-2 md:w-1/3 h-20 mx-auto p-2" disabled
		>Upload Question Paper</button
	>
	{#if questionUpload}
		<button
			class="btn bg-red-500 text-white w-full my-2 md:w-1/3 h-20 mx-auto p-2"
			on:click={() => (questionUpload = false)}>Cancel</button
		>
	{:else}
		<button
			class="btn variant-filled-tertiary w-full my-2 md:w-1/3 h-20 mx-auto p-2"
			on:click={() => (questionUpload = true)}>Create Question</button
		>
	{/if}

	{#if questionUpload}
		<div class="bg-blue-300 dark:bg-blue-800 dark:text-black w-full px-2 md:px-6">
			<form action="?/question" method="POST" class="mx-auto min-w-fit">
				<fieldset disabled={loading}>
					<label for="question" class="block text-gray-700 text-sm font-bold mt-2">Question</label>
					<input type="text" name="question" class="rounded-md w-full focus:border-none mb-2" />

					<label for="marks" class="block text-gray-700 text-sm font-bold mt-2">Marks</label>
					<select name="marks" id="marks" class="rounded-md w-40 md:w-80 mx-auto mb-2">
						<option value="null">-</option>
						<option value="2">2</option>
						<option value="5">5</option>
						<option value="10">10</option>
					</select>

					{#if subjects && subjects.length > 0}
						<label for="subject" class="block text-gray-700 text-sm font-bold mt-2">Subject</label>
						<select
							name="subject"
							id="subject"
							class="w-40 md:w-80 focus:border-none rounded-md mb-2"
						>
							<option value="null">-</option>
							{#each subjects as subject}
								<option value={subject.id}>{subject.name.toUpperCase()}</option>
							{/each}
						</select>
					{:else}
						<!-- else content here -->
					{/if}
				</fieldset>
				<div class="w-full text-center">
					<input type="submit" class="btn mx-auto variant-filled-tertiary text-black" />
				</div>
			</form>
		</div>
	{/if}
</main>

<!-- markup (zero or more items) goes here -->

<style lang="postcss">
	/* your styles go here */
	label {
		@apply dark:text-white;
	}
</style>
