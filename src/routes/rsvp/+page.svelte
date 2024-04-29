<script lang="ts">
	let numberOfPeople = 1;
	$: array = Array.from({ length: numberOfPeople }, (_, i) => i + 1);
	function increaseCb() {
		console.log('wtf');
		numberOfPeople = numberOfPeople + 1;
	}
	function decreaseCb() {
		numberOfPeople = numberOfPeople - 1;
		if (numberOfPeople < 1) {
			numberOfPeople = 1;
		}
	}
</script>

<div class="flex w-full flex-col gap-4 p-12 text-lg text-black">
	<div class="style-script-regular text-2xl">Potvrdite dolazak do <strong>09.06.2024</strong></div>
	<span class="">Broj zvanica:</span>
	<div class="flex w-full flex-row items-center justify-center gap-4 text-2xl">
		<button class="counter" on:click={decreaseCb}>-</button>
		<span class="countdown">
			<span style="--value:{numberOfPeople};"></span>
		</span>
		<button class="counter" on:click={increaseCb}>+</button>
	</div>
	<div class="maingrid">
		{#each array as i}
			<span>Gost {i}</span>
			<span></span>
			<label class="style-script-regular text-2xl" for="name">Ime:</label>
			<input id="name" name="name" type="text" />

			<label class="style-script-regular text-2xl" for="surname">Prezime:</label>
			<input id="surname" name="surname" type="text" />
		{/each}
	</div>
	<button class="fancy"> Potvrdi dolazak </button>
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
