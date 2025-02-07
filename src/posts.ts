import type { JSX } from 'solid-js';

export interface Post {
	summary: string;
	created: Date;
	default: JSX.Element;
}

export const posts: Record<string, () => Promise<Post>> = import.meta.glob<true, string, () => Promise<Post>>(
	'./blog/*.mdx',
);
