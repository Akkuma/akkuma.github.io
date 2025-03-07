import { UnoCssLogo } from '#/icons/logos/unocss-logo.tsx';
import { Card } from './card.tsx';

export function Uno() {
	return (
		<Card>
			<Card.Front
				icon={<UnoCssLogo />}
				name="UnoCSS"
				about="An innovative approach to a flexible tailwind-like experience with all the bells & whistles that will let you brew up great looking experiences."
			/>
			<Card.Back icon={<UnoCssLogo />} name="UnoCSS" start="2022" prep="3 years" expertise="Expert" />
		</Card>
	);
}
