import { sveltekit } from '@sveltejs/kit/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import type { UserConfig } from 'vite'

const config: UserConfig = {
    plugins: [sveltekit()],
	build: {
		rollupOptions: {
			plugins: [
				visualizer({
					filename: './generated/build-summary.html',
					gzipSize: true,
					template: 'treemap', // sunburst|treemap|network
				}),
			],
		},
	},
}

export default config
