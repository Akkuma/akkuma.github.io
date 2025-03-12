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
								<a class="text-link underline" href={`/blog/${postMetadata.file.replace('.mdx', '')}`}>
									{postMetadata.title}
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
