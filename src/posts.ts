import type { JSX } from 'solid-js';
import type { postsMetadatas } from './_generated/posts.ts';

type PostMetadata = Readonly<(typeof postsMetadatas)[number]>;
export interface Post extends PostMetadata {
	default: JSX.Element;
}

export const posts: Record<string, Post> = import.meta.glob<true, string, Post>('./blog/*.mdx', {
	eager: true,
});
