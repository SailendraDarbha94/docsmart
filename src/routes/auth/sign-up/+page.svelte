<script lang="ts">
	import Alert from '$components/Alert.svelte';
	import Loader from '$components/Loader.svelte';
	import Icon from '@iconify/svelte';
	import supabase from '$utils/supabase';
	import { createEventDispatcher } from 'svelte';
	import { toastSignal } from '$lib/store';
	let fullName: string;
	let email: string;
	let password: string;
	let confirmPassword: string;
	let message: string = '';
	let signUped: boolean = true;
	let isLoading: boolean = false;
	let isHovered = false;

	$: isLoading;
	$: signUped;

	// const signUpWithGoogle = async (e: Event) => {
	// 	console.log(e.target);

	// 	const { data, error } = await supabase.auth.signInWithOAuth({
	// 		provider: 'google'
	// 	});

	// 	console.log(data, error);
	// };
	// const signUpWithTwitter = async (e: Event) => {
	// 	const { data, error } = await supabase.auth.signInWithOAuth({
	// 		provider: 'discord',
	// 		// options: {
	// 		// 	redirectTo: 'http://localhost:5173/app/chat'
	// 		// }
	// 	});
	// 	console.log(data, error);
	// };

	const handleSubmit = async () => {
		isLoading = true;
		message = '';
		if (password !== confirmPassword) {
			isLoading = false;
			message = 'Passwords do not match';
			//toastSignal.update((value) => (value = 'Passwords do not match'));
		}

		const { data, error } = await supabase.auth.signInWithOtp({
			email: email,
			options: {
				emailRedirectTo: "https://ampdent-sailendradarbha.vercel.app/home"
			}
		})

		console.log(data, error)
		// let userResults = await supabase.auth.signUp({
		// 	email,
		// 	password
		// });
		if(!error){
			email = ''
			toastSignal.update((value) => (value = 'Please check your email'))
		}

		if(error) {
			email = ''
			toastSignal.update((value) => value = error.message)
		}
		isLoading = false;
	};

	// const dispatch = createEventDispatcher();

	// function handleClick() {
	// 	dispatch('buttonClick');
	// }
</script>

<div>
	sign-up
</div>

<style>
	/* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->