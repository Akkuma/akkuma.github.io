import type { JSX } from 'solid-js';
import { Link } from '../link.jsx';

export function Profile(props: {
	Icon: (props: JSX.SvgSVGAttributes<SVGSVGElement>) => JSX.Element;
	text: string;
	href: string;
}) {
	return (
		<div class="network flex items-center gap-1">
			<props.Icon class="print:-mt-[2px]" />
			<Link class="url-link leading-none" target="_blank" href={props.href}>
				<span class="username leading-none">{props.text}</span>
				<span class="url hidden print:block leading-none">{props.href.replace('https://', '')}</span>
			</Link>
		</div>
	);
}
