import { NodeJsLogo } from '#/icons/logos/nodejs-logo.tsx';
import { Card } from './card.tsx';

export function NodeJs() {
	return (
		<Card>
			<Card.Front
				icon={<NodeJsLogo />}
				name="Node.js"
				about="A highly effective brew that can quench any needs while delivering incredible value."
			/>
			<Card.Back
				icon={<NodeJsLogo />}
				name="Node.js"
				start="2012"
				prep="13 years"
				expertise="Expert"
				link="https://nodejs.org/"
			/>
		</Card>
	);
}
