<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
	import image from '$lib/assets/paper_reading_machine.png';
	import logo from '$lib/assets/logo.png';
	import { INTROTEXT } from '$lib/stores/constantStore';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	
</script>

<div class="grid grid-cols-12 gap-2">
	<div class="col-start-2 col-span-10 md:col-span-4">
		<img src={image} alt="machine reading paper" class="rounded-lg w-full h-full" />
	</div>
	<div class="col-start-2 col-span-10 md:col-start-5 md:col-span-6">
		<div class="">
			<p>
				{INTROTEXT[0]}
			</p>
			<br />
			<p>
				{INTROTEXT[1]}
			</p>
			<br />
			<p>
				{INTROTEXT[2]}
			</p>
		</div>
	</div>
	<!-- <div class="col-start-1 col-end-13 lg:col-start-2 lg:col-span-10">
		<div class="flex w-full justify-around items-start">
			<div class="md:w-1/3 lg:w-1/3">
				<div class="p-4">
					
				</div>
			</div>

		</div>
	</div> -->
	<div class="col-start-3 col-end-7 ">
		<a href="/app" class="btn variant-filled-primary">APP</a>
	</div>
</div>

<style lang="postcss">
  	@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
	p {
		font-size: 22px;
		font-family: 'VT323', monospace;
	}
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
