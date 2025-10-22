import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://o-herrera.github.io',
	base: 'octavioherrera.net',
	vite: {
		plugins: [tailwindcss()],
	},
});
