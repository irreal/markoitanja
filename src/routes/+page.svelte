<script lang="ts">
	import { onMount } from 'svelte';

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
</script>

<div
	class="mx-auto flex min-h-full w-full max-w-[700px] flex-col items-center justify-between gap-6 p-12 text-center text-2xl text-[#4D5D26]"
>
	<div>Odbrojavajte sa nama do velikog dana:</div>
	<div class="grid w-full grid-cols-1 text-center sm:grid-cols-4">
		<div class="text-7xl font-bold text-[#d64578]">{diffDays}</div>
		<div class="text-2xl">dana</div>
		<div class="text-6xl font-bold text-[#d64578]">{diffHours}</div>
		<div class="text-lg">sati</div>
		<div class="text-5xl font-bold text-[#d64578]">{diffMinutes}</div>
		<div class="text-sm">minuta</div>
		<div class="text-4xl font-bold text-[#d64578]">{diffSeconds}</div>
		<div class="text-sm">sekundi</div>
	</div>
	<a
		class="w-full rounded-xl border-[1px] border-[#d64578] bg-[#d64578] bg-opacity-10 text-[#d64578]"
		href="/pozivnica"
	>
		Tvoja pozivnica
	</a>
	<!-- <a
        class="w-full text-[#d64578] border-[1px] border-[#d64578] rounded-xl bg-[#d64578] bg-opacity-10"
        href="/fotograf"
      >
        Budi naš fotograf
      </a> -->
</div>
