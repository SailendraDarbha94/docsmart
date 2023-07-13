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
</div>
