import { ElixirLogo } from '#/icons/logos/elixir-logo.tsx';
import { Card } from './card.tsx';

export function Elixir() {
	return (
		<Card>
			<Card.Front
				icon={<ElixirLogo />}
				name="Elixir"
				about="An exploration of a wonderful FP language with a truly unique ecosystem."
			/>
			<Card.Back icon={<ElixirLogo />} name="Elixir" start="2918" prep="4 years" expertise="Beginner" />
		</Card>
	);
}
