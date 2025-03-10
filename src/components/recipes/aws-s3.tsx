
import { AwsS3Logo } from '#/icons/logos/aws-s3-logo.tsx';
import { Card } from './card.tsx';

export function AwsS3() {
	return (
		<Card>
			<Card.Front
				icon={<AwsS3Logo />}
				name="AWS S3"
				about="You always need a place to store your ever growing collection of brew. Now experience the standard way others store theirs."
			/>
			<Card.Back
				icon={<AwsS3Logo />}
				name="AWS S3"
				start="2021"
				prep="4 years"
				expertise="Expert"
			/>
		</Card>
	);
}
