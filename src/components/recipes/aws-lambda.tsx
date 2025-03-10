import { AwsLambdaLogo } from '#/icons/logos/aws-lambda-logo.tsx';
import { Card } from './card.tsx';

export function AwsLambda() {
	return (
		<Card>
			<Card.Front
				icon={<AwsLambdaLogo />}
				name="AWS Lambda"
				about="When you need an infinite amount of brew this is the standard. It even supports multiple flavors."
			/>
			<Card.Back
				icon={<AwsLambdaLogo />}
				name="AWS Lambda"
				start="2021"
				prep="3 years"
				expertise="Expert"
			/>
		</Card>
	);
}
