import type { JSX } from 'solid-js';
import type { postsMetadatas } from './_generated/posts.ts';

type PostMetadata = (typeof postsMetadatas)[number];
export interface Post extends PostMetadata {
	default: JSX.Element;
}

export const posts: Record<string, () => Promise<Post>> = import.meta.glob<true, string, () => Promise<Post>>(
	'./blog/*.mdx',
);
