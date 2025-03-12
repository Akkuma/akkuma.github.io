import { For, Suspense } from 'solid-js';
import type { postsMetadatas } from '#/_generated/posts.ts';
import { Box } from '#/components/box.tsx';
import { usePosts } from '#/hook/use-posts.js';

import './[title].css';

type Post = typeof postsMetadatas;
const postsImports = import.meta.glob<true, string, () => Promise<Post>>('../../blog/*.mdx');
const postsImportsProm: Promise<Post>[] = [];

for (const post in postsImports) {
	const importer = postsImports[post];
	if (importer) {
		postsImportsProm.push(importer());
	}
}

export default function Blog() {
	const allPosts = usePosts();

	return (
		<>
			<Suspense fallback={<div>Suspeded</div>}>
				<Box
					class='prose group-data-[theme="dark"]/root:prose-invert prose-stone lg:prose-lg *:transition-theme'
					as="main"
				>
					<article class="max-w-[75ch]">
						{allPosts()[0]?.default}

						<div class="not-prose text-sm">
							Tags:
							<ul class="inline-flex gap-2 ml-2">
								<For each={allPosts()[0]?.tags}>
									{(tag) => <li class="bg-secondary text-background w-min px-2">{tag}</li>}
								</For>
							</ul>
						</div>
					</article>
				</Box>
			</Suspense>
		</>
	);
}
