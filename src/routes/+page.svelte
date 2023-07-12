<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="w-full h-screen flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Welcome to Windows.</h2>
		<!-- Animated Logo -->
		<figure>
			<section class="img-bg" />
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m2.03 4.832l8.147-1.11l.004 7.86l-8.144.046l-.008-6.796Zm8.144 7.655l.006 7.867l-8.144-1.12l-.001-6.8l8.138.053Zm.987-8.91L21.965 2v9.482l-10.804.085v-7.99Zm10.807 8.984L21.965 22l-10.804-1.525l-.015-7.932Z"/></svg>
		</figure>
		<!-- / -->
		<div class="flex justify-center space-x-2">
			<a
				class="btn variant-filled"
				href="https://skeleton.dev/"
				target="_blank"
				rel="noreferrer"
			>
				Launch Documentation
			</a>
		</div>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
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
