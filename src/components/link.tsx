import { A, type AnchorProps } from '@solidjs/router';

export function Link(props: AnchorProps) {
	return <A {...props} class={`text-link hover:underline ${props.class ?? ''}`} />;
}
