import { PandaLogo } from '#/icons/logos/panda-logo.tsx';
import { Card } from './card.tsx';

export function Panda() {
	return (
		<Card>
			<Card.Front
				icon={<PandaLogo />}
				name="Panda"
				about="An extraordinarily flexible styling system that allows you to choose your own brewventure complete with type safety."
			/>
			<Card.Back
				icon={<PandaLogo />}
				name="Panda"
				start="2024"
				prep="1 year"
				expertise="Beginner"
				link="https://panda-css.com/"
			/>
		</Card>
	);
}
