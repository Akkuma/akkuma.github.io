import type { JSX } from 'solid-js';

//<!-- Icon from Jam Icons by Michael Amprimo - https://github.com/michaelampr/jam/blob/master/LICENSE -->
export function ArrowRightIcon(props: JSX.IntrinsicElements['svg']) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="-5 -5 24 24" {...props}>
			<path
				fill="currentColor"
				d="m10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2z"
			/>
		</svg>
	);
}
