import { VitestLogo } from '#/icons/logos/vitest-logo.tsx';
import { Card } from './card.tsx';

export function Vitest() {
	return (
		<Card>
			<Card.Front
				icon={<VitestLogo />}
				name="Vitest"
				about="The ultimate vite partner to ensure your brews are working correctly."
			/>
			<Card.Back
				icon={<VitestLogo />}
				name="Vitest"
				start="2022"
				prep="3 years"
				expertise="Expert"
				link="https://vitest.dev/"
			/>
		</Card>
	);
}
