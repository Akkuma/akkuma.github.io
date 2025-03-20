import { For, Suspense } from 'solid-js';
import type { postsMetadatas } from '#/_generated/posts.ts';
import { Box } from '#/components/box.tsx';
import { usePosts } from '#/hook/use-posts.js';

import './[title].css';
import { Meta, Title } from '@solidjs/meta';

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
				<Title>{`${allPosts()[0]?.title} | Greg in Codeland`}</Title>
				<Meta property="og:title" content={allPosts()[0]?.title} />
				<Meta property="og:description" content={allPosts()[0]?.summary} />
				<Meta property="og:type" content="article" />
				<Meta property="article:author" content='Greg "Akkuma" W' />
				<Meta property="article:published_time" content={allPosts()[0]?.created.toISOString()} />

				<For each={allPosts()[0]?.tags}>{(tag) => <Meta property="article:tag" content={tag} />}</For>
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
						<footer class="not-prose text-xs my-2">
							<p xmlns:cc="http://creativecommons.org/ns#">
								This post is licensed under{' '}
								<a
									class="inline-flex gap-1 items-center"
									href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
									target="_blank"
									rel="license noopener noreferrer"
								>
									CC BY-NC-SA 4.0
									<img
										class="inline w-[1em] h-[1em]"
										src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
										alt="Creative Commons"
									/>
									<img
										class="inline w-[1em] h-[1em]"
										src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
										alt="Attribution"
									/>
									<img
										class="inline w-[1em] h-[1em]"
										src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
										alt="NonCommercial"
									/>
									<img
										class="inline w-[1em] h-[1em]"
										src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
										alt="ShareAlike"
									/>
								</a>
							</p>
						</footer>
					</article>
				</Box>
			</Suspense>
		</>
	);
}
