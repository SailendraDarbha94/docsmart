<script lang="ts">
	import home from '$lib/assets/home.png';
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';
	// your script goes here
	export let data: PageData;
</script>

<main class="flex flex-wrap h-full p-4">
	<div
		class="mx-auto w-full md:w-4/6 lg:w-3/6 h-44 sm:h-48 md:h-56 lg:h-80 rounded-lg shadow-black shadow-2xl"
	>
		<img src={home} alt="amplify dentistry" class="w-full h-full rounded-lg" />
	</div>
	<div class="w-full md:w-7/12 mx-auto  flex flex-wrap justify-center">
        <h2 class="w-full h2 text-center">Please select the year</h2>
		<div
			class="w-2/5 place-self-end text-right border-b-2 border-r-2 border-black rounded-br-lg p-2 m-2"
		>
        <a href="/home/first" class="">
            <Icon icon="healthicons:tooth" class="ml-auto h-10 w-10" />
        </a>
		</div>
		<div
			class="w-2/5 text-left place-self-end border-b-2 border-l-2 rounded-bl-lg border-black  p-2 m-2"
		>
			<div class="mr-auto flex">
				<Icon icon="healthicons:tooth" class="h-10 w-10" />
				<Icon icon="healthicons:tooth" class="h-10 w-10" />
			</div>
		</div>
		<br />
		<div
			class="w-2/5 text-right place-self-start border-t-2 border-r-2 rounded-tr-lg border-black  p-2 m-2"
		>
			<div class="flex justify-end">
				<Icon icon="healthicons:tooth" class="h-10 w-10" />
				<Icon icon="healthicons:tooth" class="h-10 w-10" />
				<Icon icon="healthicons:tooth" class="h-10 w-10" />
				<Icon icon="healthicons:tooth" class="h-10 w-10" />
			</div>
		</div>
		<div
			class="w-2/5 text-left place-self-start border-t-2 border-l-2 rounded-tl-lg border-black p-2 m-2"
		>
			<div class="mr-auto flex">
				<Icon icon="healthicons:tooth" class="h-10 w-10" />
				<Icon icon="healthicons:tooth" class="h-10 w-10" />
				<Icon icon="healthicons:tooth" class="h-10 w-10" />
			</div>
		</div>
	</div>
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
