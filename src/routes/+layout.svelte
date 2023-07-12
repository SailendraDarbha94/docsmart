<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { fade, fly } from 'svelte/transition';

	export let data;
</script>

<!-- App Shell -->
{#key data.url}
	<div in:fly={{ delay: 150, duration: 300, x: 0, y: -300 }} out:fade={{ duration: 150 }}>
		<slot />
	</div>
{/key}
