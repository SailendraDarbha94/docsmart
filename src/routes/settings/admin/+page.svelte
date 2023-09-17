<script lang="ts">
	import Loader from '$components/Loader.svelte';
	import { toastSignal } from '$lib/store';
	import supabase from '$utils/supabase';
	import type { PageData } from './$types';
	import Time, { svelteTime } from 'svelte-time';
	// your script goes here
	export let data: PageData;

	let editing: boolean = true;
	let loading: boolean = false;
	let phoneNumber: string = '';

	const updatePhoneNumber = async () => {
		loading = true;
		const { data, error: err } = await supabase.auth.updateUser({
			phone: phoneNumber
		});

		if (err) {
			console.error(err);
			loading = false;
		}

		if (data) {
			toastSignal.update((value) => (value = 'Phone number updated'));
			console.log(data);
			loading = false;
		}
	};
</script>

<main class="w-full h-full bg-blue-300">
	{#if data.user}
		<div class="flex flex-wrap p-2">
			<div class="w-full p-2 bg-blue-200">
				<label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
				<p>{data.user.email}</p>
			</div>
			<div class="w-full p-2 bg-blue-300">
				<label for="email" class="block text-gray-700 text-sm font-bold mb-2">Phone</label>
				{#if editing}
					{#if data.user.phone?.length != undefined && data.user.phone.length != 0}
						<p>{data.user.phone}</p>
					{:else}
						<div class="flex justify-between items-center">
							<p>N/A</p>
							<button class="btn variant-filled-warning" on:click={() => (editing = !editing)}>
								Edit
							</button>
						</div>
					{/if}
				{:else}
					<div class="flex justify-between">
						<input
							disabled={loading}
							type="text"
							name="phone"
							class="input mr-4 md:w-80"
							bind:value={phoneNumber}
						/>
						<button class="btn variant-filled-warning" on:click={updatePhoneNumber}>
							{#if loading}
								<Loader />
							{:else}
								Submit
							{/if}
						</button>
					</div>
				{/if}
			</div>
			<div class="w-full p-2 bg-blue-200">
				<label for="email" class="block text-gray-700 text-sm font-bold mb-2">Status</label>
				<p>{data.user.role}</p>
			</div>
			<div class="w-full p-2 bg-blue-300">
				<label for="email" class="block text-gray-700 text-sm font-bold mb-2">Created At</label>
				<p>
					<Time timestamp={data.user.created_at} format="dddd @ h:mm A · MMMM D, YYYY" />
				</p>
			</div>
			<div class="w-full p-2 bg-blue-200">
				<label for="email" class="block text-gray-700 text-sm font-bold mb-2">Last Seen</label>
				<p>
					<Time relative timestamp={data.user.last_sign_in_at} />
				</p>
			</div>
			<!-- <p>{data.user.email}</p>
			<p>Phone = {data.user.phone}</p>
			<p>{data.user.role}</p>
			<p>{data.user.created_at}</p>
			<p>{data.user.last_sign_in_at}</p> -->
		</div>
	{:else}
		<p>You don't Belong Here ! GO AWAY NOW</p>
	{/if}
</main>

<!-- markup (zero or more items) goes here -->

<style>
	/* your styles go here */
</style>
