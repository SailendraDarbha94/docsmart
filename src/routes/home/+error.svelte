<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex flex-col h-full justify-center items-center">
	<h1 class="h1 m-2">Whoops!</h1>

	<p class="p-2">Something went terribly wrong but the blast radius has been contained to this route</p>

	<pre>
        {JSON.stringify($page, null, 2)}
    </pre>
</div>
