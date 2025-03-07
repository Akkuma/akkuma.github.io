import { TailwindLogo } from '#/icons/logos/tailwind-logo.tsx';
import { Card } from './card.tsx';

export function Tailwind() {
	return (
		<Card>
			<Card.Front
				icon={<TailwindLogo />}
				name="Tailwind"
				about="The world searched for a better way to brew their styles & they found it here. We brewed our styles largely with this."
			/>
			<Card.Back icon={<TailwindLogo />} name="Tailwind" start="2022" prep="3 years" expertise="Expert" />
		</Card>
	);
}
