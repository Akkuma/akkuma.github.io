import { SstLogo } from '#/icons/logos/sst-logo.tsx';
import { Card } from './card.tsx';

export function Sst() {
	return (
		<Card>
			<Card.Front
				icon={<SstLogo />}
				name="SST"
				about="Need a complex brew? SST helps you make your wildest brews easier to create and manage."
			/>
			<Card.Back
				icon={<SstLogo />}
				name="SST"
				start="2022"
				prep="2 years"
				expertise="Expert"
				link="https://sst.dev/"
			/>
		</Card>
	);
}
