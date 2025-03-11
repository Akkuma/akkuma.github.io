import { type JSX, Suspense, createSignal } from 'solid-js';
import { Box } from '#/components/box.tsx';
import { usePosts } from '#/hook/use-posts.js';

interface Post {
	summary: string;
	default: JSX.Element;
}
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
	const [post, setPost] = createSignal<Post>();

	//Promise.all(postsImportsProm).then((posts) => setPost(posts[0]))
	/*<Show when={post()} fallback={<div>Loading</div>}>
    {post()?.default ?? ''}
  </Show>*/
	return (
		<>
			<Suspense fallback={<div>Suspeded</div>}>
				<Box
					class='prose group-data-[theme="dark"]/root:prose-invert prose-stone lg:prose-lg *:transition-theme'
					as="main"
				>
					<article class="max-w-[75ch]">{allPosts()[0]?.default}</article>
				</Box>
			</Suspense>
		</>
	);
}
