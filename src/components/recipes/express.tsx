import { ExpressLogo } from '#/icons/logos/express-logo.tsx';
import { Card } from './card.tsx';

export function Express() {
	return (
		<Card>
			<Card.Front
				icon={<ExpressLogo />}
				name="Express"
				about="A true classic that is still reliable, enjoyed by many, and an excellent first step into the world of Node.js."
			/>
			<Card.Back icon={<ExpressLogo />} name="Express" start="2012" prep="13 years" expertise="Expert" />
		</Card>
	);
}
