/** @type {import('@sveltejs/kit').Config} */
import Unocss from 'unocss/vite';
import { presetUno, presetAtrributify, presetWind } from 'unocss';
import vercel from '@sveltejs/adapter-vercel';


const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel()
	},
	plugins: [
		Unocss({
			presets: [
				presetAtrributify({}),
				presetUno(),
			],
		})
	]
};

export default config;
