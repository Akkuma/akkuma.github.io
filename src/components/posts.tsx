import { For } from 'solid-js';
import { postsMetadatas } from '#/_generated/posts.ts';

export function Posts() {
	return (
		<nav>
			<ol>
				<For each={postsMetadatas}>
					{(postMetadata) => (
						<li>
							<h3 class="text-lg">
								<a class="capitalize text-link" href={`/blog/${postMetadata.file.replace('.mdx', '')}`}>
									{postMetadata.file.replaceAll('-', ' ').replace('.mdx', '')}
								</a>
							</h3>
							<p>{postMetadata.summary}</p>
						</li>
					)}
				</For>
			</ol>
		</nav>
	);
}
