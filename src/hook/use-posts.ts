import { createSignal } from 'solid-js';
import { type Post, posts } from '../posts.js';

const postsWithFile = Object.entries(posts).map(([file, post]) => ({
	...post,
	file: file.replace('./blog/', ''),
}));

export function usePosts() {
	const [posts, _setPosts] = createSignal<Post[]>(postsWithFile);

	return posts;
}
