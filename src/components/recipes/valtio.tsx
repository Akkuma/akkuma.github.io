import { Card } from './card.tsx';

export function Valtio() {
	return (
		<Card>
			<Card.Front
				name="Valtio"
				about="Simplify your brews with this powerful state management library. One of the best out there and one of my favorites."
			/>
			<Card.Back name="Valtio" start="2022" prep="3 years" expertise="Expert" link="https://valtio.dev/" />
		</Card>
	);
}
