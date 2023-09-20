<script lang="ts">
	import carving from '$lib/assets/carving.png';
	import clasp from '$lib/assets/clasp.png';
	import crown from '$lib/assets/crown_cutting.png';
</script>

<main class="flex flex-wrap h-full w-full bg-blue-300 dark:bg-blue-800">
	<h4 class="h4 w-full text-center mb-10 md:mb-2">We currently offer these few options!</h4>
    <div class="w-full text-center">
        <a href="/store/order" class="variant-glass-tertiary hover:variant-filled-primary rounded-lg dark:variant-form-material p-2">Create An Order</a>
    </div>
	<div class="w-full flex flex-row flex-wrap">
		<div class="w-full md:w-1/3">
			<h4 class="text-center w-full">Tooth Carvings</h4>
			<br />
			<img src={carving} alt="carved wax teeth" class="p-2 rounded-2xl w-full" />
		</div>
		<div class="w-full md:w-1/3">
			<h4 class="text-center w-full">Orthodontic Clasps etc.</h4>
			<br />
			<img src={clasp} alt="carved wax teeth" class="p-2 rounded-2xl w-full" />
		</div>
		<div class="w-full md:w-1/3">
			<h4 class="text-center w-full">Crown Cuttings</h4>
			<br />
			<img src={crown} alt="carved wax teeth" class="p-2 rounded-2xl w-full" />
		</div>
	</div>
</main>

<!-- markup (zero or more items) goes here -->

<style>
	/* your styles go here */
</style>
