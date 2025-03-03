import { readdirSync, writeFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';

import { evaluate } from '@mdx-js/mdx';
import serialize from 'serialize-javascript';
import { Fragment, jsx, jsxs } from 'solid-js/h/jsx-runtime';

const opts = { Fragment: Fragment, jsx: jsx, jsxs: jsxs };
const mdxFiles = readdirSync('./src/blog');
const fileContents = await Promise.all(
	mdxFiles.map(async (file) => {
		const content = await readFile(`./src/blog/${file}`);
		return { content, file };
	}),
);

type MDXModule = Awaited<ReturnType<typeof evaluate>>;
interface CustomMDX extends Record<string, unknown> {
	created: Date;
	default: MDXModule;
}

const evalProms = fileContents.map(async ({ content, file }) => {
	const { default: _, ...rest } = (await evaluate({ value: content }, opts)) as unknown as CustomMDX;
	return {
		...rest,
		file,
	};
});
const evals = await Promise.all(evalProms);
evals.sort((a, b) => (a.created < b.created ? 1 : -1));

//* Custom serializer, skipping on this in favor of a lib to not have to keep rolling my own
/*
const generated = evals.map(({ file, ...rest }) => {
	let strBuild = `{ file: '${file.split('.')[0]}', `;
	for (const [key, val] of Object.entries(rest)) {
		let strVal;
		if (val instanceof Date) {
			strVal = `new Date('${val.toISOString()}')`;
		} else {
			strVal = `'${val}'`;
		}

		strBuild += `${key}: ${strVal}, `;
	}

	return `${strBuild}}`;
});
*/

writeFileSync(
	'./src/_generated/posts.ts',
	`export const postsMetadatas = ${serialize(evals, { unsafe: true /* Only need to use for debugging space: '\t' */ })} as const`,
);
