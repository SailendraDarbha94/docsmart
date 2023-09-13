<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch, Toast, initializeStores } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import logo from '$lib/assets/light_logo.png';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	export let data;
	initializeStores();

	onMount(() => {
		console.log(data);
	});
</script>

<!-- App Shell -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex justify-center items-center">
					<img src={logo} class="block rounded-lg w-10 h-10 hover:bg-white" alt="logo" />
					<strong class="text-xl uppercase hover:cursor-pointer" on:click={() => {goto(`${data.user ? '/home' : '/'}`)}} >AmpDent</strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<!-- <a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a> -->
				<!-- <a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a> -->
				<LightSwitch />
				{#if data.user}
					<a
						class="flex"
						href="/auth/sign-out"
						target="_blank"
						rel="noreferrer"
					>
						<Icon icon="clarity:power-solid" class="h-7 w-7" />
					</a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />

	<svelte:fragment slot="footer">
		<Toast />
		<!-- <div class="flex justify-center bg-red-500">
			footer
		</div> -->
	</svelte:fragment>
</AppShell>
