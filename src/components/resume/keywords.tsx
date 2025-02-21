import { For } from 'solid-js';

export function Keywords(props: { keywords: readonly string[]; sorted?: boolean }) {
	return (
		<ul class="keywords">
			<For each={props.keywords.toSorted((a, b) => a.localeCompare(b))}>
				{(item) => (
					<li class="bg-secondary-invert text-card-foreground rounded-sm print:text-black/80 transition-colors delay-200 duration-700">{item}</li>
				)}
			</For>
		</ul>
	);
}
