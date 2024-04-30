<script lang="ts">
	import { goto } from '$app/navigation';
	import { confetti } from 'tsparticles-confetti';
	import { onMount } from 'svelte';
	const defaults = {
		spread: 360,
		ticks: 100,
		gravity: 0,
		decay: 0.94,
		startVelocity: 30,
		shapes: ['heart'],
		colors: ['FFC0CB', 'FF69B4', 'FF1493', 'C71585']
	};
	let interval: number | null = null;
	onMount(() => {
		makeConffetti();
		interval = setInterval(makeConffetti, 5000);
		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	});

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

	async function navigateRsvpCb() {
		await goto('/rsvp');
	}
</script>

<div
	class="mx-auto flex min-h-full w-full max-w-[700px] flex-col items-center gap-6 p-6 text-center text-2xl text-[#4D5D26]"
>
	<div>
		U nedelju <span class="font-bold text-[#d64578]">23.06.2024.</span>
	</div>
	<div class={`style-script-regular flex flex-col items-center justify-center text-6xl`}>
		<span class="-mb-2 -ml-6">Tatjana</span>
		<span class="mt-2">&</span>
		<span class="-ml-6 mt-[-0.8rem]">Marko</span>
	</div>
	<div class="font-bold italic">
		imaju nešto važno{' '}
		<span class="text-3xl font-bold italic text-[#d64578]">DA</span>{' '}
		kažu. <br />
		Ukoliko želite da saznate šta, kao i:
	</div>
	<div>
		<ul class="flex flex-col gap-4">
			<li>Ko će bidermajer uhvatiti?</li>
			<li>Ko će kome na cipelu stati?</li>
			<li>Ko će kum i kuma biti?</li>
			<li>Čiji se talenat za pevanje više neće kriti?</li>
		</ul>
	</div>
	<div class="font-bold italic">Dođite i ulepšajte naše veselje!</div>
	<div class="font-bold">
		Crkveno venčanje će se obaviti u{' '}
		<span class="text-[#d64578]">14:30h</span> u{' '}
		<a href="https://maps.app.goo.gl/q5g6awD6ZaYJ4K3j8" class="underline">
			Crkvi Sv.&nbsp;Vaznesenja Gospodnjeg
		</a>{' '}
		u Žarkovu.
		<br />
		Prijem u restoranu{' '}
		<a href="https://maps.app.goo.gl/ubfGrfeGbUsWURT58" class="underline"> Lipovačka šuma </a>{' '}
		u <span class="text-[#d64578]">15:30h</span> sa građanskim venčanjem u
		<span class="text-[#d64578]">16:30h</span>.
	</div>
	<div class="italic text-[#d64578]">
		Matičar i muzičari potvrdili su dolazak na veselje, a mi ćemo biti srećni ako i vi to učinite do{' '}
		<span class="font-extrabold">09.06.2024.</span>
		<br />
		<span class="block">Hvala, vidimo se!</span>
	</div>
	<p class="flex flex-col">
		<a href="https://maps.app.goo.gl/q5g6awD6ZaYJ4K3j8" class="underline">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-building-church inline"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="#2c3e50"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M3 21l18 0" />
				<path d="M10 21v-4a2 2 0 0 1 4 0v4" />
				<path d="M10 5l4 0" />
				<path d="M12 3l0 5" />
				<path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" />
			</svg>
			mapa do crkve
		</a>
		<a href="https://maps.app.goo.gl/ubfGrfeGbUsWURT58" class="underline">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-tools-kitchen-2 inline"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="#2c3e50"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path
					d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3"
				/>
			</svg>
			mapa do restorana
		</a>
	</p>
	<button class="rounded-lg" on:click={navigateRsvpCb}>Potvrdi Dolazak</button>
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
