<script lang="ts">
	import { onMount } from 'svelte';

	import Counter from './counter.svelte';
	import { goto } from '$app/navigation';
	import { confetti } from 'tsparticles-confetti';
	import { browser } from '$app/environment';
	function makeConffetti() {
		confetti({
			...defaults,
			particleCount: 50,
			scalar: 2,
			angle: 60,
			spread: 55,
			origin: { x: 0 }
		});
		confetti({
			...defaults,
			particleCount: 50,
			scalar: 2,
			angle: 120,
			spread: 55,
			origin: { x: 1 }
		});

		confetti({
			...defaults,
			particleCount: 25,
			scalar: 3,
			angle: 60,
			spread: 55,
			origin: { x: 0 }
		});

		confetti({
			...defaults,
			particleCount: 25,
			scalar: 3,
			angle: 120,
			spread: 55,
			origin: { x: 1 }
		});

		confetti({
			...defaults,
			particleCount: 10,
			scalar: 4,
			angle: 60,
			spread: 55,
			origin: { x: 0 }
		});
		confetti({
			...defaults,
			particleCount: 10,
			scalar: 4,
			angle: 120,
			spread: 55,
			origin: { x: 1 }
		});
	}
	const defaults = {
		spread: 360,
		ticks: 600,
		gravity: 0,
		decay: 0.94,
		startVelocity: 30,
		shapes: ['heart'],
		colors: ['FFC0CB', 'FF69B4', 'FF1493', 'C71585']
	};
	let interval: number | null = null;

	let currentTime = Date.now();
	const targetTime = new Date(2024, 5, 23, 14, 30, 0, 0).getTime();
	$: diff = Math.max(targetTime - currentTime, 0);
	$: diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
	$: diffHours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	$: diffMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	$: diffSeconds = Math.floor((diff % (1000 * 60)) / 1000);
	$: done = diff <= 0;
	let triggered = false;
	$: {
		if (browser && done && !triggered) {
			triggered = true;
			makeConffetti();
			setInterval(makeConffetti, 500);
		}
	}
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
		{#if done}
			Veliki dan je stigao!
		{:else}
			Odbrojavajte sa nama do<br />velikog dana
		{/if}
	</div>
	{#if done}
		<img src="https://media.tenor.com/_1hMqyFC4LEAAAAM/pop-cat.gif" alt="pop cat" />
	{/if}
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
			<!-- <button class="rounded-lg" on:click={navigateRsvpCb}>Potvrdi Dolazak</button> -->
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
