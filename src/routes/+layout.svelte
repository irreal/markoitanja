<script>
	// import { particlesInit } from '@tsparticles/svelte';
	import { onMount } from 'svelte';
	// import { loadSlim } from '@tsparticles/slim';

	import '../app.pcss';

	// /**
	//  * @type {typeof import("@tsparticles/svelte").default}
	//  */
	// let ParticlesComponent;

	// onMount(async () => {
	// 	// const module = await import('@tsparticles/svelte');

	// 	// ParticlesComponent = module.default;
	// });

	// let particlesConfig = {
	// 	background: {
	// 		color: {
	// 			value: '#301A47'
	// 		}
	// 	},
	// 	particles: {
	// 		color: {
	// 			value: [
	// 				'#FFAEBC',
	// 				'#A0E7E5',
	// 				'#B4F8C8',
	// 				'#FBE7C6',
	// 				'#FFC9AE',
	// 				'#FFAEE5',
	// 				'#A0C6E7',
	// 				'#A0E7C2',
	// 				'#B4F8EA',
	// 				'#C2F8B4',
	// 				'#F4FBC6',
	// 				'#FBCDC6'
	// 			]
	// 		},
	// 		move: {
	// 			angle: {
	// 				offset: 0,
	// 				value: 15
	// 			},
	// 			direction: 'bottom',
	// 			enable: true,
	// 			outModes: {
	// 				default: 'out'
	// 			},
	// 			speed: 3
	// 		},
	// 		number: {
	// 			value: 300
	// 		},
	// 		opacity: {
	// 			value: 1
	// 		},
	// 		shape: {
	// 			type: 'heart'
	// 		},
	// 		size: {
	// 			value: 16
	// 		},
	// 		roll: {
	// 			darken: {
	// 				enable: true,
	// 				value: 30
	// 			},
	// 			enlighten: {
	// 				enable: true,
	// 				value: 30
	// 			},
	// 			enable: true,
	// 			mode: 'horizontal',
	// 			speed: {
	// 				min: 5,
	// 				max: 15
	// 			}
	// 		},
	// 		zIndex: {
	// 			value: {
	// 				min: 0,
	// 				max: 100
	// 			},
	// 			opacityRate: 0,
	// 			velocityRate: 2
	// 		}
	// 	}
	// };

	// let onParticlesLoaded = (/** @type {{ detail: { particles: any; }; }} */ event) => {
	// 	const particlesContainer = event.detail.particles;
	// };

	// void particlesInit(async (engine) => {
	// 	// call this once per app
	// 	// you can use main to customize the tsParticles instance adding presets or custom shapes
	// 	// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
	// 	// starting from v2 you can add only the features you need reducing the bundle size
	// 	//await loadFull(main);
	// 	await loadSlim(engine);
	// });
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
