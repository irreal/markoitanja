<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Person from './person.svelte';
	import { confetti } from 'tsparticles-confetti';
	import { client } from '$lib/supabase';
	const defaults = {
		spread: 360,
		ticks: 100,
		gravity: 0,
		decay: 0.94,
		startVelocity: 30,
		shapes: ['heart'],
		colors: ['FFC0CB', 'FF69B4', 'FF1493', 'C71585']
	};

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

	type Person = {
		name: string;
		surname: string;
	};

	let numberOfPeople = 1;
	let array: Person[] = [{ name: '', surname: '' }];
	let submitted = false;
	let loading = false;

	let guestId: string | null = null;
	function generateRandomId() {
		return (
			Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
		);
	}
	onMount(() => {
		guestId = localStorage.getItem('visitorId') || generateRandomId();
	});

	$: {
		if (array.length < numberOfPeople) {
			for (let i = array.length; i < numberOfPeople; i++) {
				array.push({ name: '', surname: '' });
			}
		} else if (array.length > numberOfPeople) {
			array = array.slice(0, numberOfPeople);
		}
	}
	function increaseCb() {
		console.log('wtf');
		numberOfPeople = numberOfPeople + 1;
		array = array;
	}
	function decreaseCb() {
		numberOfPeople = numberOfPeople - 1;
		if (numberOfPeople < 1) {
			numberOfPeople = 1;
		}
		array = array;
	}
	async function submitCb() {
		if (loading) {
			return;
		}

		const missingIds: number[] = [];
		for (let i = 0; i < array.length; i++) {
			if (!array[i].name || !array[i].surname) {
				missingIds.push(i + 1);
			}
		}
		if (missingIds.length > 0) {
			alert(
				`Molimo vas da popunite sva polja za goste ${missingIds.join(', ')} pre nego što potvrdite dolazak.`
			);
			return;
		}

		loading = true;
		await new Promise((resolve) => setTimeout(resolve, 2000));
		try {
			const { count, error } = await client.from('tim_rsvp').insert(
				array.map((entry, idx) => ({
					index: idx,
					guest_id: guestId,
					name: entry.name,
					surname: entry.surname
				}))
			);
			if (error) {
				throw error;
			}
			console.log('upisano gostiju: ', count);
			submitted = true;
			makeConffetti();
		} catch (e) {
			console.error(e);
			alert(
				'Došlo je do greške pri upisu gostiju, molimo te pokušaj ponovo. Ako ne uspe, javi nam da znamo da popravljamo :)'
			);
		} finally {
			loading = false;
		}
	}

	async function navigateBackCb() {
		await goto('/');
	}
	function surnameChangedCb(i: number) {
		for (let j = i + 1; j < array.length; j++) {
			array[j].surname = array[i].surname;
		}
	}
</script>

<div class="flex w-full flex-col gap-4 p-12 text-lg text-black">
	{#if !submitted}
		<div class="style-script-regular text-2xl">
			Potvrdite dolazak do <strong>09.06.2024</strong>
		</div>
		<span class="">Broj zvanica:</span>
		<div class="flex w-full flex-row items-center justify-center gap-4 text-2xl">
			<button class="counter" on:click={decreaseCb}>-</button>
			<span class="countdown">
				<span style="--value:{numberOfPeople};"></span>
			</span>
			<button class="counter" on:click={increaseCb}>+</button>
		</div>
		<div class="flex w-full flex-row items-center justify-center">
			{#each array as entry, i}
				<div class="h-12 w-24">
					<Person />
				</div>
			{/each}
		</div>
		<div class="maingrid">
			{#each array as entry, i}
				<span>Gost {i + 1}</span>
				<span></span>
				<label class="style-script-regular text-2xl" for="name">Ime:</label>
				<input id="name" name="name" type="text" bind:value={entry.name} />

				<label class="style-script-regular text-2xl" for="surname">Prezime:</label>
				<input
					id="surname"
					name="surname"
					type="text"
					on:change={() => surnameChangedCb(i)}
					bind:value={entry.surname}
				/>
			{/each}
		</div>
		<button class="fancy" on:click={submitCb}>
			{#if loading}
				<span class="loading loading-spinner loading-sm"></span>
			{:else}
				Potvrdi dolazak
			{/if}
		</button>
	{:else}
		<div
			class="style-script-regular flex h-[80dvh] w-full flex-col items-center justify-center text-center text-5xl text-[#4D5D26]"
		>
			Hvala, vidimo se!
		</div>
		<button class="fancy" on:click={navigateBackCb}>Nazad na početnu</button>
	{/if}
</div>

<style>
	button.counter {
		border-width: 1px;
		border-color: pink;
		padding: 10px 35px;
		background-color: rgba(255, 255, 255, 0.7);
	}
	button.fancy {
		font-weight: 800;
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
	.maingrid {
		max-width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		row-gap: 1rem;
		align-items: center;
	}
	input {
		width: 200px;
		background-color: transparent;
		border-bottom: 1px solid black;
		font-family: Style Script;
		color: #4d5d26;
		font-size: 2rem;
	}
</style>
