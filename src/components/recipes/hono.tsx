
import { HonoLogo } from '#/icons/logos/hono-logo.tsx';
import { Card } from './card.tsx';

export function Hono() {
	return (
		<Card>
			<Card.Front
				icon={<HonoLogo />}
				name="Hono"
				about="When you want a flexible brew that can power you anywhere this is what you should be reaching for."
			/>
			<Card.Back icon={<HonoLogo />} name="Hono" start="2024" prep="1 year" expertise="Mid" />
		</Card>
	);
}
