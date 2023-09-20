<script lang="ts">
	import Loader from '$components/Loader.svelte';
	import { toastSignal } from '$lib/store';
	import supabase from '$utils/supabase';
	import type { PageData } from './$types';
	import Time, { svelteTime } from 'svelte-time';
	export let data: PageData;

	const ROLES: string[] = ['BASIC', 'MODERATOR', 'ADMIN'];

	let application: boolean = false;
	let full_name: string = '';
	let email: string | undefined = data.user?.email ?? undefined;
	let phone: string = '';
	let role: string = 'BASIC';
	let message: string = '';
	let loading: boolean = false;
	async function createAdmin() {
		loading = true;
		if (
			full_name.toLowerCase() == 'ass' ||
			full_name.toLowerCase() == 'dick' ||
			full_name.toLowerCase() == 'nigger'
		) {
			message = 'Please enter a valid name';
			toastSignal.update((value) => (value = message));
		}
		console.log(full_name, email, phone, role);

		const { data: res, error: err } = await supabase
			.from('admins')
			.insert([
				{
					name: full_name,
					user_id: data.user?.id,
					phone: phone,
					role: role
				}
			])
			.select();
		if (err) {
			loading = false;
			application = false;
			console.error(err);
			toastSignal.update((value: any) => (value = 'An Error Occured'));
		}
		if (res) {
			console.log(res);
			toastSignal.update((value: any) => (value = 'Admin account has been created'));
			loading = false;
			application = false;
		}
	}
</script>

<main class="w-full h-full bg-blue-300 dark:bg-blue-800">
	{#if data.user}
		{#if application}
			<div class="flex flex-wrap p-2">
				<div class="w-full p-2 bg-blue-200">
					<h3 class="h3 text-center text-black">Admin Application</h3>
				</div>
				<div class="w-full p-2 bg-blue-300">
					<label for="email" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
					<input
						type="text"
						class="focus:border-none rounded-md w-full md:w-1/2 border-2 border-green-400"
						class:malos={full_name.length < 3}
						bind:value={full_name}
					/>
				</div>
				<div class="w-full p-2 bg-blue-200">
					<label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
					<input
						type="text"
						disabled
						class="rounded-md border-2 border-green-400 w-full md:w-1/2"
						bind:value={email}
					/>
				</div>
				<div class="w-full p-2 bg-blue-300">
					<label for="email" class="block text-gray-700 text-sm font-bold mb-2">Phone</label>
					<input
						type="text"
						class="focus:border-none rounded-md border-2 border-green-400 w-full md:w-1/2"
						class:malos={phone.length !== 10}
						bind:value={phone}
					/>
				</div>
				<div class="w-full p-2 bg-blue-200">
					<label for="email" class="block text-gray-700 text-sm font-bold mb-2">Role</label>
					<select
						name="role"
						id="role"
						class="focus:border-none rounded-md w-full md:w-1/2 border-2 border-green-400"
						bind:value={role}
					>
						{#each ROLES as ROLE}
							<option class="" value={ROLE}>{ROLE}</option>
						{/each}
					</select>
				</div>
				<div class="flex w-full justify-center">
					<button
						class="btn variant-filled bg-red-300 my-2 text-black"
						on:click={createAdmin}
						disabled={phone.length !== 10 || full_name.length < 3}
					>
						{#if loading}
							<Loader />
						{:else}
							Submit
						{/if}
					</button>
				</div>
			</div>
		{:else}
			<div class="flex flex-wrap p-2 dark:bg-blue-800 dark:text-black">
				<div class="w-full p-2 bg-blue-200">
					<label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
					<p>{data.user.email}</p>
				</div>
				<div class="w-full p-2 bg-blue-300 dark:bg-blue-800 dark:text-white">
					<label for="email" class="block text-gray-700 text-sm font-bold dark:text-white mb-2">Phone</label>
					{#if data.user.phone?.length != undefined && data.user.phone.length != 0}
						<p>{data.user.phone}</p>
					{:else}
						<p>N/A</p>
					{/if}
				</div>
				<div class="w-full p-2 bg-blue-200">
					<label for="email" class="block text-gray-700 text-sm font-bold mb-2">Status</label>
					<p>{data.user.role}</p>
				</div>
				<div class="w-full p-2 bg-blue-300 dark:bg-blue-800 dark:text-white">
					<label for="email" class="block text-gray-700 text-sm font-bold mb-2 dark:text-white">Created At</label>
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
				{#if data.role !== 'ADMIN'}
					<div class="flex w-full justify-center">
						<button
							class="btn variant-filled bg-red-300 my-2 text-black"
							on:click={() => (application = true)}>Apply to become Admin</button
						>
					</div>
				{/if}
			</div>
		{/if}
	{:else}
		<p>You don't Belong Here ! GO AWAY NOW</p>
	{/if}
</main>

<!-- markup (zero or more items) goes here -->

<style>
	/* your styles go here */
	.malos {
		@apply border-2 border-red-400;
	}
</style>
