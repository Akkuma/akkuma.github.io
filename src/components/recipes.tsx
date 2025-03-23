import { useSearchParams } from '@solidjs/router';
import { type AnimationPlaybackControls, animate, inView, spring, stagger } from 'motion';
import { For, createSignal, onCleanup, onMount } from 'solid-js';
import { TransitionGroup } from 'solid-transition-group';

import { AwsLambda } from './recipes/aws-lambda.tsx';
import { AwsS3 } from './recipes/aws-s3.tsx';
import { Bun } from './recipes/bun.tsx';
import { CSharp } from './recipes/csharp.tsx';
import { Elixir } from './recipes/elixir.tsx';
import { Elm } from './recipes/elm.tsx';
import { Express } from './recipes/express.tsx';
import { Hono } from './recipes/hono.tsx';
import { NodeJs } from './recipes/nodejs.tsx';
import { Panda } from './recipes/panda.tsx';
import { Python } from './recipes/python.tsx';
import { React } from './recipes/react.tsx';
import { Solid } from './recipes/solid.tsx';
import { Sst } from './recipes/sst.tsx';
import { Tailwind } from './recipes/tailwind.tsx';
import { TypeScript } from './recipes/typescript.tsx';
import { Uno } from './recipes/uno.tsx';
import { Valtio } from './recipes/valtio.tsx';
import { Vite } from './recipes/vite.tsx';
import { Vitest } from './recipes/vitest.tsx';

import './recipes.css';

const recipesByCategory = {
	frontend: [Elm, React, Solid, Tailwind, Valtio, Uno],
	backend: [Bun, CSharp, Elixir, Express, Hono, NodeJs, Python, Sst, TypeScript],
	languages: [CSharp, Elixir, Elm, Python, TypeScript],
	tools: [Sst, Vite, Vitest],
	styling: [Panda, Tailwind, Uno],
	aws: [AwsLambda, AwsS3, Sst],
	cloudflare: [],
	git: [],
} as const;

const all = [...new Set(Object.values(recipesByCategory).flatMap((_) => _))];

export const categories = [
	'all',
	...(Object.keys(recipesByCategory) as (keyof typeof recipesByCategory)[]).sort((a, b) =>
		a.localeCompare(b),
	),
] as const;

interface Card extends HTMLDivElement {
	flip?: AnimationPlaybackControls;
}
interface AnimatedList extends HTMLUListElement {
	flip?: AnimationPlaybackControls;
}
export function Recipes() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [showAnimation, setShowAnimation] = createSignal(true);
	let list: AnimatedList | undefined;

	if (typeof window !== 'undefined' && !window.matchMedia('(min-width: 640px)').matches) {
		setSearchParams({ recipe: 'all' }, { replace: true });
	}

	const recipe = () => recipesByCategory[searchParams.recipe as keyof typeof recipesByCategory] ?? all;

	onMount(() => {
		if (!list) return;
		const isMobile = !window.matchMedia('(min-width: 640px)').matches;
		const cards = list.querySelectorAll<Card>('.card-flip');

		if (isMobile) {
			const stop = inView(
				cards,
				(card, _entry) => {
					if (!showAnimation()) return;

					animate(card, { rotateY: 180 }, { duration: 0.5 }).then(async () => {
						await animate(card, { rotateY: 0 }, { duration: 0.5, delay: 2 });
						if (card instanceof HTMLElement) {
							card.style.transform = '';
						}
					});
				},
				{ amount: 0.9 },
			);

			onCleanup(stop);
		} else {
			const stop = inView(
				list,
				(_list, _entry) => {
					// Prevent running altogether if they hovered
					if (!showAnimation()) return;

					list.flip = animate(
						cards,
						{ rotateY: 180 },
						{
							duration: 0.5,
							delay: stagger(0.2),
							type: spring,
						},
					);
					list.flip.then(async () => {
						// Prevent running altogether if they hovered
						if (!showAnimation()) return;

						list.flip = animate(
							cards,
							{ rotateY: 0 },
							{ duration: 0.5, delay: stagger(0.2, { startDelay: 2 }), type: spring },
						);

						await list.flip;
						cards.forEach((card) => card.style.removeProperty('transform'));
					});
				},
				{ amount: 0.5 },
			);

			onCleanup(stop);
		}
	});
	return (
		<ul class="flex flex-wrap gap-4" ref={list}>
			<TransitionGroup
				name="recipe"
				onBeforeExit={(e) => {
					if (e instanceof HTMLElement) {
						const rect = e.getBoundingClientRect();
						e.style.position = 'absolute';
						e.style.left = `${rect.left}px`;
					}
				}}
			>
				<For each={recipe()}>
					{(Recipe) => (
						<li
							class="scale-100 z-10 w-full sm:w-auto"
							onPointerEnter={() => {
								setShowAnimation(false);

								if (!list) return;

								list.flip?.cancel();
								const cards = list.querySelectorAll<Card>('.card-flip');
								for (const card of cards) {
									//! Leaves it in a "broken" state if we don't wait until the animation finishes
									requestAnimationFrame(() => {
										card.style.removeProperty('transform');
									});
								}
							}}
						>
							<Recipe />
						</li>
					)}
				</For>
			</TransitionGroup>
		</ul>
	);
}
