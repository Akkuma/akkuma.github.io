import { ElixirLogo } from '#/icons/logos/elixir-logo.tsx';
import { Card } from './card.tsx';

export function Elixir() {
	return (
		<Card>
			<Card.Front
				icon={<ElixirLogo />}
				name="Elixir"
				about="A side quest for those brave adventure seekers wanting a wonderful FP language with a truly unique ecosystem."
			/>
			<Card.Back icon={<ElixirLogo />} name="Elixir" start="2018" prep="1 year" expertise="Beginner" />
		</Card>
	);
}
