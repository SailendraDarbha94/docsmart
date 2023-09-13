<script lang="ts">
	import upload_file from '$utils/file';
	import httpReq from '$utils/httpFetch';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	interface Filesystem {
		checksum: string;
		file_id: string;
		file_name: string;
		file_size: number;
		user_id: string;
	}

	let files: Filesystem[] = [];
	//export let data: any;
	let file = files.length;
	let file_size:any;
	onMount(async () => {
		const res: Filesystem[] = await httpReq('GET', `/files/get_file_by_user/`);
		if (res) {
			files = res;
		}
		//console.log(file);
	});
</script>

<div class="w-full p-4">
	{#if files}
		{#each files as file}
			<div
				class="m-2 p-2 flex justify-between items-center rounded-lg shadow-xl dark:bg-transparent bg-tertiary-400"
			>
				<div class="w-1/2 mx-auto flex items-center text-right">
					<Icon icon="tabler:file-filled" class="w-10 h-16" />
					<p>{file.file_name}</p>
				</div>
				<div class="w-1/2">
					<label for="size">Size</label>
					<p>{(file.file_size/1000).toFixed(2)}KB</p>
				</div>
			</div>
		{/each}
	{:else}
		<div>
			<h2 class="h2 text-center m-2 p-2">
				Please Upload some files so that our AI can get to work
			</h2>
		</div>
	{/if}
</div>

<!-- <AppShell>...</AppShell> -->

<style>
	.floaty {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-gap: 8px;
		padding: 16px;
		margin: 18px;
		border-radius: 8px;
		box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.2);
	}
	.floaty-item {
		/* background: dodgerblue; */
		padding: 8px;
		margin: 8px;
		width: 100px;
		height: 100px;
		/* border: 1px solid #ccc; */
		border-radius: 8px;
		align-self: center;
		text-align: center;
		justify-self: center;
		grid-column: span 4;
		color: black;
		/* box-shadow: 0 0 2px 3px rgba(12, 34, 222, 0.2); */
	}
	.floaty-item:hover {
		box-shadow: none;
		cursor: pointer;
	}
	@media screen and (max-width: 768px) {
		.floaty {
			margin: 2px;
			padding: 2px;
			height: 300px;
			overflow-y: scroll;
		}
		.floaty-item {
			grid-column: span 6;
		}
	}
</style>
