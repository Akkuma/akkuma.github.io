import { defineConfig } from '@solidjs/start/config';
import tscConfigPaths from 'vite-tsconfig-paths'
// @ts-expect-error Vinxi sucks
import vMdx from '@vinxi/plugin-mdx';

const mdx = vMdx.default;
export default defineConfig({
	extensions: ['mdx'],
	server: {
		prerender: {
			crawlLinks: true,
			routes: ['/', '/404.html'],
		},
	},
	vite: {
		plugins: [
			tscConfigPaths(),
			mdx.withImports({})({
				jsx: true,
				jsxImportSource: 'solid-js',
				providerImportSource: 'solid-mdx',
			}),
		],
	},
});
