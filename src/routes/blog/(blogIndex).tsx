import { Box } from '#/components/box.jsx';
import { Posts } from '#/components/posts.tsx';

export default function BlogIndex() {
	return (
		<Box>
			<div class="max-w-[75ch]">
				<Posts />
			</div>
		</Box>
	);
}
