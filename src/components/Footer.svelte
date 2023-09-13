<!-- <div class="flex w-full flex-col items-center justify-center border-t border-zinc-700 py-8 px-4">
  <div class="flex items-center">
    Deployed on <a class="font-bold" href="https://vercel.com/home"
      ><img src="/Vercel_Logo.png" alt="Vercel Logo" class="h-5 ml-1" /></a
    >
  </div>
</div> -->
<script lang="ts">
	import { chatMessages } from "$lib/store";
	import httpReq from "$utils/httpFetch";
	import Loader from "$components/Loader.svelte";

    	interface SessionStart {
		message: string;
		session_id: string;
	}
  // your script goes here
  let sessionActive:boolean = false;
	let welcomeMessage:string = undefined as unknown as string;
	let session_id:string | null = null
  async function createSession(e:Event) {
		//console.log('event:', e)
		const res:SessionStart = await httpReq('POST', '/session/start')
		if (res){
			welcomeMessage = res.message
            chatMessages.update(value => value = [...value, { type: 'chatbot', message: welcomeMessage}])
			session_id = res.session_id
			sessionActive = true
		}
	}
    let answer:string;
	let message:string
	let loading:boolean = false
	async function chatBot(e:Event) {
		loading = true
		chatMessages.update(value => [...value, { type: 'user', message: message}])
		const res = await httpReq('GET', `/chat/${session_id}/message?message=${message}`)
		const data = res.data[0]['content'].split('/')
		const obj = JSON.parse(data)
		answer = obj.result
		chatMessages.update(value => [...value, { type: 'chatbot', message: answer}])
		loading = false
		message = ""
	}
</script>

<div class="flex justify-center items-center w-full h-16 rounded-lg bg-primary-100 dark:bg-primary-400 p-2">
    
    {#if sessionActive}
	<div class="w-full">
		<div class="w-full flex">
			<input
				type="text"
				name="chat"
				bind:value={message}
				id="chat"
				placeholder="Talk to your SmartBag"
				class="input w-full mr-4"
			/>
			<button disabled={loading} class="btn variant-soft-secondary" on:click={chatBot}>
				{#if loading}
					<Loader />
				{:else}
					Send Message
				{/if}
			</button>
		</div>
	</div>
    {:else}
        <button class="btn variant-ghost-tertiary" on:click={createSession}>Wake Up AI</button>
	{/if}
</div>

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->