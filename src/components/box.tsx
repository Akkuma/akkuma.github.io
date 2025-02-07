import type { JSX } from 'solid-js';
import { Dynamic } from 'solid-js/web';

const variants = {
	default: 'mx-auto max-w-4xl px-4 sm:px-6 xl:max-w-5xl xl:px-0',
} as const;

export function Box(props: {
	children: JSX.Element | JSX.Element[];
	variant?: keyof typeof variants;
	class: string;
	as?: keyof JSX.HTMLElementTags;
}) {
	return (
		<Dynamic component={props.as ?? 'div'} class={`${variants[props.variant ?? 'default']} ${props.class}`}>
			{props.children}
		</Dynamic>
	);
}
