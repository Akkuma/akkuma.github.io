import { useSearchParams } from '@solidjs/router';
import { animate, inView, stagger } from 'motion';
import { For } from 'solid-js';
import { TransitionGroup } from 'solid-transition-group';

import { Bun } from './recipes/bun.tsx';
import { CSharp } from './recipes/csharp.tsx';
import { Elixir } from './recipes/elixir.tsx';
import { Elm } from './recipes/elm.tsx';
import { Express } from './recipes/express.tsx';
import { NodeJs } from './recipes/nodejs.tsx';
import { Python } from './recipes/python.tsx';
import { React } from './recipes/react.tsx';
import { Solid } from './recipes/solid.tsx';
import { Tailwind } from './recipes/tailwind.tsx';
import { TypeScript } from './recipes/typescript.tsx';
import { Uno } from './recipes/uno.tsx';
import { Vite } from './recipes/vite.tsx';

import './recipes.css';

const recipesByCategory = {
	frontend: [React, Solid, Elm],
	backend: [Bun, CSharp, Elixir, Express, NodeJs, Python, TypeScript],
	languages: [CSharp, Elixir, Elm, Python, TypeScript],
	tools: [Vite],
	styling: [Tailwind, Uno],
	aws: [],
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
export function Recipes() {
	const [searchParams] = useSearchParams();

	const recipe = () => recipesByCategory[searchParams.recipe as keyof typeof recipesByCategory] ?? all;

	return (
		<ul
			class="flex flex-wrap gap-4"
			ref={(el) => {
				inView(
					el,
					(_card, _entry) => {
						const cards = el.querySelectorAll<HTMLDivElement>('.card-flip');
						animate(cards, { rotateY: 180 }, { duration: 0.5, delay: stagger(0.2) }).then(async () => {
							await animate(cards, { rotateY: 0 }, { duration: 0.5, delay: stagger(0.2, { startDelay: 2 }) });
							cards.forEach((card) => (card.style.transform = ''));
						});
					},
					{ amount: 0.5 },
				);
			}}
		>
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
						<li class="scale-100 z-10">
							<Recipe />
						</li>
					)}
				</For>
			</TransitionGroup>
		</ul>
	);
}
