import { clientOnly } from '@solidjs/start';
import { For, Suspense } from 'solid-js';

import { postsMetadatas } from '#/_generated/posts.ts';
import { Box } from '#/components/box.tsx';
import { usePosts } from '#/hook/use-posts.js';

import './[title].css';
import { Meta, Title } from '@solidjs/meta';
import { Navigate, useParams } from '@solidjs/router';
import { theme } from '#/state/theme.ts';

const Giscus = clientOnly(() => import('@giscus/solid'));
export default function Blog() {
	const params = useParams<{ title: string }>();
	const allPosts = usePosts();

	const file = `${params.title}.mdx`;
	const metadata = postsMetadatas.find((meta) => file === meta.file);
	const post = () => allPosts().find((post) => file === post.file);
	if (!metadata) return <Navigate href="../../404" />;

	return (
		<>
			<Suspense fallback={<div>Suspeded</div>}>
				<Title>{`${metadata.title} | Greg in Codeland`}</Title>
				<Meta name="description" content={metadata.summary} />
				<Meta property="og:title" content={metadata.title} />
				<Meta property="og:description" content={metadata.summary} />
				<Meta property="og:type" content="article" />
				<Meta property="article:author" content='Greg "Akkuma" W' />
				<Meta property="article:published_time" content={metadata.created.toISOString()} />

				<Meta property="og:image" content={`https://akkuma.github.io/blog-images/${params.title}-og.webp`} />
				<For each={metadata.tags}>{(tag) => <Meta property="article:tag" content={tag} />}</For>
				<Box
					class='prose group-data-[theme="dark"]/root:prose-invert prose-stone lg:prose-lg *:transition-theme'
					as="main"
				>
					<article class="max-w-[75ch]">
						{post()?.default}

						<footer class="not-prose text-xs my-2">
							<div class="not-prose text-sm">
								Tags:
								<ul class="inline-flex gap-2 ml-2">
									<For each={metadata.tags}>
										{(tag) => <li class="bg-secondary text-background w-min px-2">{tag}</li>}
									</For>
								</ul>
							</div>
							<p class="mb-4">© Greg Waxman. All rights reserved.</p>

							<Giscus
								id="comments"
								repo="akkuma/akkuma.github.io"
								repoId="R_kgDOLphOmg="
								category="Blog"
								categoryId="DIC_kwDOLphOms4CoVcq"
								mapping="og:title"
								term="Welcome to @giscus/solid component!"
								strict="1"
								reactionsEnabled="1"
								emitMetadata="0"
								theme={theme() === 'dark' ? 'catppuccin_macchiato' : 'catppuccin_latte'}
								lang="en"
							/>
						</footer>
					</article>
				</Box>
			</Suspense>
		</>
	);
}
