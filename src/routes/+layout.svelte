<script lang="ts">
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		LightSwitch,
		Toast,
		initializeStores,
		getToastStore,
		AppRail,
		AppRailAnchor,
		AppRailTile
	} from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import home from '$lib/assets/home.png';
	import logo from '$lib/assets/light_logo.png';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { beforeUpdate, onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { toastSignal } from '$lib/store';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	export let data;
	initializeStores();

	onMount(() => {
		toastSignal.update(
			(value) => (value = `${data.user ? 'Welcome ' + data.user.email : 'Welcome to AmpDent'}`)
		);
		console.log(data);
	});
	const toastStore = getToastStore();
	toastSignal.subscribe((value) => {
		if (value) {
			toastStore.trigger({
				message: value
			});
		}
		//console.log(value);
	});

	let currentTile: number = 0;

	$: currentTile;

	// beforeUpdate(() => {
	// 	switch(currentTile){
	// 		case 0: goto('/home')
	// 		break;

	// 		case 1: goto('/')
	// 		break;

	// 		case 2: goto('/settings/profile')
	// 		break
	// 	}
	// })
</script>

<!-- App Shell -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="bg-blue-300 dark:bg-blue-800">
			<svelte:fragment slot="lead">
				<div class="flex justify-center items-center">
					<img src={logo} class="block rounded-lg w-10 h-10 hover:bg-white" alt="logo" />
					<strong
						class="text-xl uppercase hover:cursor-pointer"
						on:click={() => {
							goto(`${data.user ? '/home' : '/'}`);
						}}>AmpDent</strong
					>
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
					<a class="flex" href="/auth/sign-out" target="_blank" rel="noreferrer">
						<Icon icon="clarity:power-solid" class="h-7 w-7" />
					</a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		{#if data.user}
			<div class="w-30 h-full shadow-lg">
				<AppRail background="bg-blue-300 dark:bg-blue-800">
					<!-- <svelte:fragment slot="lead">
						<AppRailAnchor href="/">(icon)</AppRailAnchor>
					</svelte:fragment> -->
					<!-- --- -->
					<AppRailAnchor name="home" title="home" href="/home">
						<svelte:fragment slot="lead">
							<div class="flex m-0 p-0 justify-center items-center">
								<Icon icon="iconamoon:home-light" class="w-10 h-12" />
							</div>
						</svelte:fragment>
						<p>Home</p>
					</AppRailAnchor>
					<AppRailAnchor href="/home/subjects" name="subjects" value={1} title="subjects">
						<svelte:fragment slot="lead">
							<div class="flex justify-center items-center">
								<Icon icon="vaadin:tooth" class="w-10 h-12" />
							</div>
						</svelte:fragment>
						<p>Subjects</p>
					</AppRailAnchor>
					{#if data.role === 'ADMIN'}
						<AppRailAnchor href="/home/admin" name="admin" title="admin">
							<svelte:fragment slot="lead">
								<div class="flex justify-center items-center">
									<Icon icon="ri:admin-line" class="w-12 h-10" />
								</div>
							</svelte:fragment>
							<span>Admin</span>
						</AppRailAnchor>
					{/if}
					<AppRailAnchor href="/settings/profile" name="settings" title="settings">
						<svelte:fragment slot="lead">
							<div class="flex justify-center items-center">
								<Icon icon="heroicons:cog-6-tooth" class="w-12 h-10" />
							</div>
						</svelte:fragment>
						<span>Settings</span>
					</AppRailAnchor>
					<!-- --- -->
					<svelte:fragment slot="trail">
						<AppRailAnchor href="/settings/admin" title="Account">
							<div class="flex justify-center items-center">
								<Icon
									icon="streamline:interface-user-profile-focus-close-geometric-human-person-profile-focus-user"
									class="w-12 h-10 "
								/>
							</div>
						</AppRailAnchor>
					</svelte:fragment>
				</AppRail>
			</div>
		{/if}
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

<style lang="postcss">
</style>
