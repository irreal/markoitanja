<script lang="ts">
	import { onMount } from 'svelte';

	import Counter from './counter.svelte';
	import { goto } from '$app/navigation';

	let currentTime = Date.now();
	const targetTime = new Date(2024, 5, 23, 14, 30, 0, 0).getTime();
	$: diff = targetTime - currentTime;
	$: diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
	$: diffHours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	$: diffMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	$: diffSeconds = Math.floor((diff % (1000 * 60)) / 1000);
	onMount(() => {
		const timer = setInterval(() => {
			currentTime = Date.now();
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	});
	async function navigatePozivnicaCb() {
		await goto('/pozivnica');
	}
	async function navigateFotografCb() {
		await goto('/fotograf');
	}
	async function navigateRsvpCb() {
		await goto('/rsvp');
	}
</script>

<div
	class="mx-auto flex min-h-[100vh] w-full max-w-[700px] flex-col items-center justify-end gap-6 text-center text-2xl text-[#4D5D26]"
>
	<div class="style-script-regular text-5xl leading-snug text-black">
		Odbrojavajte sa nama do<br />velikog dana
	</div>
	<div class="w-full">
		<Counter
			counter={diffDays}
			text={`${diffHours} sati ${diffMinutes} minuta ${diffSeconds} sekundi`}
		/>

		<div
			class="inter-mit-bld -mt-5 mb-24 flex w-full flex-col items-center justify-center gap-4 px-12 text-black"
		>
			<button class="rounded-lg" on:click={navigatePozivnicaCb}>Tvoja Pozivnica</button>
			<!-- <button class="rounded-lg" on:click={navigateFotografCb}>Budi naš Fotograf</button> -->
			<button class="rounded-lg" on:click={navigateRsvpCb}>Potvrdi Dolazak</button>
		</div>
	</div>
</div>

<style>
	button {
		border: pink;
		border-radius: 10px;
		border-style: solid;
		font-size: 0.8rem;
		text-transform: uppercase;
		width: 100%;
		padding: 7px 10px;
		background: rgba(255, 255, 255, 0.5);
		mix-blend-mode: normal;
		box-shadow: 0px 0px 80px rgba(119, 119, 119, 0.15);
		backdrop-filter: blur(12.5px);
		/* Note: backdrop-filter has minimal browser support */
	}
</style>
