<script lang="ts">
	import home from '$lib/assets/home.png';
	import type { PageData } from './$types';
	// your script goes here
    export let data:PageData;
</script>

<main class="flex h-full p-4">
    hello {data.user?.email}
</main>

<!-- markup (zero or more items) goes here -->

<style lang="postcss">
	/* your styles go here */
	/* .main {
		background-image: url('/src/lib/assets/home.png');
		background-position: center;
		background-size: contain;
	} */
</style>
