<!-- <script lang="ts">
	//import type { ChatCompletionRequestMessageRoleEnum } from 'openai';
	import bubble from "$lib/assets/secure_ai.png"
	import user from "$lib/assets/vegeta.png"
	export let message: string | undefined;
	export let type: string = "chatbot";
</script>

<div class={type}>
	<div class="">
		<div class="">
			<img
				src={type === "chatbot" ? bubble : user}
				alt="avatar"
				class="h-10 w-10 rounded-md"
			/>
		</div>
	</div>
	<div class="">
		{message}
	</div>
</div> -->

<script lang="ts">
	export let type:string;
	export let message:string;
</script>

<div class={type}>
	{message}
</div>

<style lang="postcss">
	.user {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: left;
		text-align: left;
		/* align-items: center; */
		flex-wrap: wrap;
		border-radius: 5px;
		padding: 2px;
		box-shadow: 0 0 3px 6px;
	}

	.chatbot {
		display: flex;
		width: 100%;
		text-align: right;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: right;
		/* align-items: center; */
		border-radius: 5px;
		padding: 2px;
		box-shadow: 0 0 3px 6px;
	}
</style>
