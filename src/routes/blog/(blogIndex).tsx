import { Title } from '@solidjs/meta';
import { Box } from '#/components/box.jsx';
import { Posts } from '#/components/posts.tsx';

export default function BlogIndex() {
	return (
		<Box>
			<Title>Blog | Greg in Codeland</Title>
			<div class="max-w-[75ch]">
				<Posts />
			</div>
		</Box>
	);
}
