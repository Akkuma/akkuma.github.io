import { animate } from 'motion';
import { type JSX, Show, createMemo, createSignal, onCleanup, onMount } from 'solid-js';
import { Transition } from 'solid-transition-group';

export type TextLoopProps = {
	className?: string;
	interval?: number;
	trigger?: boolean;
	text: JSX.Element[];
};

//* Based on https://github.com/ibelick/motion-primitives/blob/main/components/core/text-loop.tsx
export function TextLoop(props: TextLoopProps) {
	const [index, setIndex] = createSignal(0);

	onMount(() => {
		const loop = () => {
			setIndex((index) => (index + 1) % props.text.length);
		};
		let interval = setInterval(loop, 2000);

		const handleVisibilityChange = () => {
			if (document.hidden) {
				clearInterval(interval);
			} else {
				interval = setInterval(loop, 2000);
			}
		};
		document.addEventListener('visibilitychange', handleVisibilityChange);

		onCleanup(() => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
			clearInterval(interval);
		});
	});

	const minChars = createMemo(
		() =>
			props.text.reduce<number>((acc, el) => {
				if (typeof el === 'string') return acc > el.length ? acc : el.length;

				return acc;
			}, 0),
		0,
	);

	return (
		<span
			class="relative inline-flex flex-col-reverse whitespace-nowrap"
			role="marquee"
			style={{ 'min-width': `${minChars()}ch` }}
		>
			<span class="invisible" aria-live="off">
				{props.text[index()]}
			</span>
			<Transition onEnter={onEnter} onAfterEnter={onAfterEnter} onExit={onExit}>
				<Show when={props.text[index()]} keyed>
					{(i) => <span class="absolute inset">{i}</span>}
				</Show>
			</Transition>
		</span>
	);
}

function onEnter(el: Element, done: VoidFunction) {
	animate(el, { y: 20, opacity: 0, rotateX: 90, filter: 'blur(4px)' }, { duration: 0 }).then(done);
}

function onAfterEnter(el: Element) {
	animate(
		[
			[el, { y: 0, opacity: 1, rotateX: 0 }, { type: 'spring' }],
			[el, { filter: 'blur(0px)' }, { ease: 'linear', at: 0 }],
		],
		{ duration: 0.5 },
	);
}

function onExit(el: Element, done: VoidFunction) {
	animate(
		el,
		{ y: -20, opacity: 0, rotateX: -90, filter: 'blur(4px)' },
		{ duration: 0.5, type: 'spring' },
	).then(done);
}
