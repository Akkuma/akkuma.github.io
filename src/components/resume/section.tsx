import type { JSX } from 'solid-js';

type Children = JSX.Element | JSX.Element[];
export function Section(props: { class?: string; children: Children }) {
	return <section class={props.class}>{props.children}</section>;
}

export function SectionTitle(props: { children: Children }) {
	return (
		<header class="flex items-center">
			<h2 class="section-title w-max text-secondary">{props.children}</h2>
		</header>
	);
}

Section.Title = SectionTitle;
