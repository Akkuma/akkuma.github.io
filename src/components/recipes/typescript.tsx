import { TypescriptLogo } from '#/icons/logos/typescript-logo.tsx';
import { Card } from './card.tsx';

export function TypeScript() {
	return (
		<Card>
			<Card.Front
				icon={<TypescriptLogo />}
				name="TypeScript"
				about="For the adventureous individual willing to put in the extra effort to brew up a truly refined experience."
			/>
			<Card.Back icon={<TypescriptLogo />} name="TypeScript" start="2021" prep="4 years" expertise="Expert" />
		</Card>
	);
}
