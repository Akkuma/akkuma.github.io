import { createSignal } from 'solid-js';
import { type Post, posts } from '../posts.js';

const proms = Object.values(posts).map((fn) => fn());

export function usePosts() {
	const [posts, setPosts] = createSignal<Post[]>([]);

	Promise.all(proms).then(setPosts);
	return posts;
}
