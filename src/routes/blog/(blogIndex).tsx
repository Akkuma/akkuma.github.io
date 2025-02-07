import { For, Show } from 'solid-js';
import { usePosts } from '#/hook/use-posts.js';
import { Box } from '#/components/box.jsx';

export default function BlogIndex() {
	const posts = usePosts();

	/*
		<Show when={posts().length} fallback={<div>Loading posts...</div>}>
			<ol>
				<For each={posts().sort((a, b) => (a.created < b.created ? 1 : -1))}>
					{(post) => (
						<li>
							<div>
								{post.created.toLocaleDateString()}
								{post.summary}
							</div>
						</li>
					)}
				</For>
			</ol>
		</Show>*/
	return <Box as="p">Coming soon!</Box>
}
