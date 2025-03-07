import { CSharpLogo } from '#/icons/logos/csharp-logo.tsx';
import { Card } from './card.tsx';

export function CSharp() {
	return (
		<Card>
			<Card.Front
				icon={<CSharpLogo />}
				name="C#"
				about="When you want an artisanally crafted OOP language by the legendary Anders Hejlsberg (see also TypeScript)."
			/>
			<Card.Back icon={<CSharpLogo />} name="C#" start="2010" prep="4 years" expertise="Mid" />
		</Card>
	);
}
