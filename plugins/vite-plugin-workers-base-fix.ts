import type { Plugin } from 'vite';
import { mkdir, readdir, rename } from 'fs/promises';

let base: string;

/**
 * Vite plugin that automatically moves the client bundle to the correct
 * subdirectory in `dist/client` when serving the app from a different base
 * path than the root of a domain, like with
 *
 * ```json
 * "routes": [{
 *   "pattern": "example.com/app*",
 *   "zone_name": "example.com"
 * }]
 * ```
 */
export function workersBaseFix(): Plugin {
	return {
		name: 'vite-plugin-workers-base-fix',
		// Get the base path after the config was resolved
		configResolved(config) {
			base = config.base.replace(/^\/|\/$/g, '');
		},
		// Move the bundle to `dist/client/<base>`
		async closeBundle() {
			if (base === '') {
				return;
			}

			const dist = 'dist/client';
			const target = `${dist}/${base}`;

			await mkdir(target, { recursive: true });

			for (const file of await readdir(dist)) {
				if (file !== base) {
					await rename(`${dist}/${file}`, `${target}/${file}`);
				}
			}
		}
	}
}
