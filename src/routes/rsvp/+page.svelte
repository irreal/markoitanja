<script lang="ts">
	import { goto } from '$app/navigation';
	import Person from './person.svelte';
	type Person = {
		name: string;
		surname: string;
	};

	let numberOfPeople = 1;
	let array: Person[] = [{ name: '', surname: '' }];
	let submitted = false;

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
	function submitCb() {
		submitted = true;
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
		<button class="fancy" on:click={submitCb}> Potvrdi dolazak </button>
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
