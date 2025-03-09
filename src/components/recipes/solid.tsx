import { SolidLogo } from '#/icons/logos/solid-logo.tsx';
import { Card } from './card.tsx';

export function Solid() {
	return (
		<Card>
			<Card.Front
				icon={<SolidLogo />}
				name="Solid"
				about="For the adventureous individual willing to put in the extra effort to brew up a truly refined experience. We brewed this site up using it!"
			/>
			<Card.Back
				icon={<SolidLogo />}
				name="Solid"
				start="2022"
				prep="1 years"
				expertise="Beginner"
				link="https://www.solidjs.com/"
			/>
		</Card>
	);
}
