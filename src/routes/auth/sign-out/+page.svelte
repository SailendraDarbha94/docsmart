<script lang="ts">
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import Loader from "$components/Loader.svelte";
	import supabase from "$utils/supabase";
	import { onMount } from "svelte";


	onMount(async () => {
		if(browser){
			//localStorage.removeItem('session_id')
			//localStorage.removeItem('token')
			localStorage.clear()
		}
		const { error } = await supabase.auth.signOut()
		if (error) {
			console.error(error);
		}
        goto('/')
	});
</script>

<div class="flex h-screen justify-center items-center">
	<Loader />
</div>
