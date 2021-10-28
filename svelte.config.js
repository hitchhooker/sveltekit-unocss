/** @type {import('@sveltejs/kit').Config} */
import vercel from '@sveltejs/adapter-vercel';
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify } from 'unocss';
import presetIcons from '@unocss/preset-icons';
import imagePreprocessor from 'svimg';


const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel(),
		appDir: '_app'
	},
	preprocess: [
        imagePreprocessor({
            inputDir: 'static',
            outputDir: 'static/optimized-images',
            webp: true,
            avif: false,
        })
	],
	plugins: [
		Unocss({
			presets: [
				presetAttributify({}),
				presetUno(),
				presetIcons()
			],
		})
	]
};

export default config;
