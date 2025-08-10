import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { cloudflare } from '@cloudflare/vite-plugin';
import { workersBaseFix } from './plugins/vite-plugin-workers-base-fix';
import { fileURLToPath, URL } from 'node:url';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		cloudflare(),
		workersBaseFix()
	],
	resolve: {
		alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
	},
	css: {
		postcss: {
			plugins: [autoprefixer()]
		}
	}
});
