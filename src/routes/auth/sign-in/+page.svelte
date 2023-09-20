<script lang="ts">
	import { goto } from '$app/navigation';
	import Alert from '$components/Alert.svelte';
	import Loader from '$components/Loader.svelte';
	import supabase from '$utils/supabase';
	import Icon from '@iconify/svelte';
	import { createEventDispatcher, onMount } from 'svelte';

	import { toastSignal } from '$lib/store';

	const dispatch = createEventDispatcher();

	let email: string = '';
	let message: string = '';
	let isLoading: boolean = false;

	async function handleSubmit() {
		isLoading = true;
		email = '';

		const { data, error } = await supabase.auth.signInWithOtp({
			email: email
		});

		console.log(data, error);
	}
</script>

<div class="flex h-full justify-center bg-blue-800 dark:bg-blue-300 dark:text-white">
	<div
		class="w-3/5 md:3/6 lg:w-1/3 p-4 mx-auto dark:bg-blue-800 bg-blue-300 flex flex-col items-center rounded-lg shadow-xl self-center"
	>
		<h1 class="text-2xl font-bold text-center m-2 pt-2">Login with Magic Link!</h1>
		<form on:submit|preventDefault={handleSubmit} class="flex flex-col">
			<Alert {message} />
			<label for="email" class="block mt-2 text-sm font-bold mb-2"> Email </label>
			<input
				type="email"
				name="email"
				bind:value={email}
				id="email"
				class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
			{#if isLoading}
				<Loader />
			{:else}
				<input
					type="submit"
					class="variant-filled-primary mx-0 mt-10 rounded-md shadow-lg p-2 hover:mx-4 transition-['margin'] hover:font-bold flex justify-center items-center"
				/>
			{/if}
		</form>

		<!-- <p class="m-2 p-2 ">
		Want an Admin account?
		<a href="/auth/sign-up" class="underline">Sign-Up as Admin</a>
	</p> -->
	</div>
</div>
