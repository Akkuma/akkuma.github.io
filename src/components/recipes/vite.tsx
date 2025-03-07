import { ViteLogo } from '#/icons/logos/vite-logo.tsx';
import { Card } from './card.tsx';

export function Vite() {
	return (
		<Card>
			<Card.Front
				icon={<ViteLogo />}
				name="Vite"
				about="The premiere brewing method powering modern engineering. We couldn't brew this entire site without it."
			/>
			<Card.Back icon={<ViteLogo />} name="Vite" start="2022" prep="3 years" expertise="Expert" />
		</Card>
	);
}
