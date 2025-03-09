import { ReactLogo } from '#/icons/logos/react-logo.tsx';
import { Card } from './card.tsx';

export function React() {
	return (
		<Card>
			<Card.Front
				icon={<ReactLogo />}
				name="React"
				about="Always a favorite and sure to satisfy the pickiest of people. Highly recommended to brew this today!"
			/>
			<Card.Back
				icon={<ReactLogo />}
				name="React"
				start="2013"
				prep="9 years"
				expertise="Expert"
				link="https://react.dev/"
			/>
		</Card>
	);
}
