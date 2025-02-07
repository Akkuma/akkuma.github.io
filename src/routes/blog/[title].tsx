import { For, type JSX, Show, type Signal, Suspense, createResource, createSignal } from 'solid-js';
import { createStore, reconcile, unwrap } from 'solid-js/store';
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
			<Suspense fallback={<div>Suspeded</div>}>{allPosts()[0]?.default}</Suspense>
		</>
	);
}
