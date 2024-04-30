<script>
	import '../app.pcss';
</script>

<div class="min-h-full w-full bg-transparent">
	<!-- <svelte:component
		this={ParticlesComponent}
		id="tsparticles"
		class="put your classes here"
		style=""
		options={particlesConfig}
		on:particlesLoaded={onParticlesLoaded}
	/> -->
	<slot></slot>
</div>
