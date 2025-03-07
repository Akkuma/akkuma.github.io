import { ElmLogo } from '#/icons/logos/elm-logo.tsx';
import { Card } from './card.tsx';

export function Elm() {
	return (
		<Card>
			<Card.Front
				icon={<ElmLogo />}
				name="Elm"
				about="Recommended only for those willing to try a rather aged brew that had many great ideas, but eventually disappeared from the market."
			/>
			<Card.Back icon={<ElmLogo />} name="Elm" start="2020" prep="1 year" expertise="Beginner" />
		</Card>
	);
}
