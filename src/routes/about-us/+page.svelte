<script>
	import { AppBar, AppShell } from "@skeletonlabs/skeleton";

</script>
<AppShell>
    <svelte:fragment slot="header">
        <AppBar>
            <a class="text-2xl text-black bg-red-300 rounded-lg underline p-4 m-4" href="/">Home</a>
        </AppBar>
    </svelte:fragment>
    <svelte:fragment slot="sidebarLeft">
        <div class="h-full w-full bg-blue-300 text-black">
            Mo Monet, Mo Sonet
        </div>
    </svelte:fragment>

</AppShell>