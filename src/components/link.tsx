import { A, type AnchorProps } from '@solidjs/router';
import { Dynamic } from 'solid-js/web';

export function Link(props: AnchorProps) {
	return (
		<Dynamic
			component={props.href.includes('mailto:') ? 'a' : A}
			{...props}
			class={`text-link hover:underline ${props.class ?? ''}`}
		/>
	);
}
