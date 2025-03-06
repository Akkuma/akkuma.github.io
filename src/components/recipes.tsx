import { useSearchParams } from '@solidjs/router';
import { For } from 'solid-js';
import { TransitionGroup } from 'solid-transition-group';
import { CSharp } from './recipes/csharp.tsx';
import { Elixir } from './recipes/elixir.tsx';
import { React } from './recipes/react.tsx';
import { Solid } from './recipes/solid.tsx';
import { TypeScript } from './recipes/typescript.tsx';

import './recipes.css';
import { Elm } from './recipes/elm.tsx';
import { NodeJs } from './recipes/nodejs.tsx';
import { Python } from './recipes/python.tsx';

const recipesByCategory = {
	frontend: [React, Solid, Elm],
	backend: [CSharp, Elixir, 
		NodeJs, Python, TypeScript],
	languages: [CSharp, Elixir, Elm, Python, TypeScript],
	tools: [],
	styling: [],
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
		<ul class="flex flex-wrap gap-4">
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
						<li class="bg-background scale-100 z-10">
							<Recipe />
						</li>
					)}
				</For>
			</TransitionGroup>
		</ul>
	);
}
