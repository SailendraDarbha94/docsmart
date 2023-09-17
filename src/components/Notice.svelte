<script lang="ts">
	import typewriter from '$utils/typewriter';

	// your script goes here
	export let content: string;
	export let link: string | null;
	//export let years:string[];
</script>

<div in:typewriter={{ speed: 20, delay: 20 }} class="notice">
	<p>{content}</p>
	{#if link}
		<a href={link} class="m-2 p-2 underline text-blue-600">Link</a>
	{/if}
</div>

<!-- markup (zero or more items) goes here -->

<style lang="postcss">
	.notice {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
        @apply m-2 p-2 rounded-lg shadow-lg bg-white text-black
	}

	p {
		
	}
	/* your styles go here */
</style>
