import { BunLogo } from '#/icons/logos/bun-logo.tsx';
import { Card } from './card.tsx';

export function Bun() {
	return (
		<Card>
			<Card.Front
				icon={<BunLogo />}
				name="Bun"
				about="This concoction offers a hybrid brew mixing together many of the best aspects of Node.js & other tools. This brew powers this site too!"
			/>
			<Card.Back icon={<BunLogo />} name="Bun" start="2025" prep="1 year" expertise="Beginner" />
		</Card>
	);
}
