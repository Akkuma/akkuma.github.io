import type { JSX } from 'solid-js';

//logo
// Icon from SVG Logos by Gil Barbara - https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt -->
export function ElmLogo(props: JSX.IntrinsicElements['svg']) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}>
			<g fill="#1293D8">
				<path d="m8.529 256l119.399-119.399L247.327 256zM0 8.673l119.399 119.399L0 247.471z" />
				<path fill-opacity=".75" d="M136.595 0H256v119.405z" />
				<path d="m136.456 128.072l55.436 55.436l55.435-55.436l-55.435-55.435z" />
				<path
					fill-opacity=".75"
					d="M8.529.144h110.87l52.024 52.024H60.553zm174.834 63.964l-55.435 55.436l-55.436-55.436zm72.493 183.363l-55.436-55.435l55.436-55.435z"
				/>
			</g>
		</svg>
	);
}
