import { defineConfig } from '@solidjs/start/config';
// @ts-expect-error Vinxi sucks
import vMdx from '@vinxi/plugin-mdx';

const mdx = vMdx.default;
export default defineConfig({
	extensions: ['mdx'],
	server: {
		baseURL: process.env.BASE_PATH,
		prerender: {
			crawlLinks: true,
			routes: ['/', '/404.html'],
		},
	},
	vite: {
		plugins: [
			mdx.withImports({})({
				jsx: true,
				jsxImportSource: 'solid-js',
				providerImportSource: 'solid-mdx',
			}),
		],
	},
});
