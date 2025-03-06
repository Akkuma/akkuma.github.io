import { PythonLogo } from '#/icons/logos/python-logo.tsx';
import { Card } from './card.tsx';

export function Python() {
	return (
		<Card>
			<Card.Front
				icon={<PythonLogo />}
				name="Python"
				about="A widely popular brew, but misses our mark for being recommended."
			/>
			<Card.Back icon={<PythonLogo />} name="Python" start="2018" prep="1 year" expertise="Beginner" />
		</Card>
	);
}
