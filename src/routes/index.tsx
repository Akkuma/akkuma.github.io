import { A, useSearchParams } from '@solidjs/router';
import { type JSX, Show } from 'solid-js';

import { Box } from '#/components/box.tsx';
import { TextLoop } from '#/components/text-loop.tsx';

export default function Home() {
	return (
		<main class="mx-auto mt-12">
			<Box class="flex gap-8 mb-16">
				{/*thumbhash="pyiCDAIcOHjXGfh7jKr6CJxxlAiYeFd+Bg"*/}
				<img
					src="/greg_in_frame_alt.webp"
					class="hidden md:block w-1/2 max-w-[328px] max-h-[367px] -mt-2"
					width="328"
					height="367"
					decoding="async"
				/>
				<header class="w-full md:w-1/2 text-left">
					<h1 class="max-6-xs text-6xl text-accent font-extralight m-0 font-title transition-colors duration-200 delay-700">
						Join me for tea
					</h1>
					<p class="mt-8 text-xl font-light font-subheader">
						<span class="whitespace-pre-wrap">
							Full stack engineer & leader for over 17 years that can help you brew a great{' '}
						</span>
						<span class="inline-flex items-start justify-start text-secondary font-bold">
							<TextLoop text={['product', 'team', 'culture', 'and even more']} />
						</span>
					</p>
				</header>
			</Box>

			<Section title="Spilling the Tea"></Section>
			<Section title="Explore Brews"></Section>
		</main>
	);
}

function QuickBrews() {
	const [searchParams] = useSearchParams();
	const recipe = () =>
		(Array.isArray(searchParams.recipe) ? searchParams.recipe[0] : searchParams.recipe) as
			| keyof typeof recipes
			| undefined;

	return (
		<Box as="section" class="mt-12 w-full">
			<div class="flex gap-4">
				<div class="border-accent border rounded-xl p-8">
					<h2 class="mx-auto w-max text-center py-1 px-4 bg-foreground rounded-full border-accent border text-xl text-background -mt-[3.25rem] mb-1.5">
						Quick Brews
					</h2>
					<div class="flex justify-between">
						<div>
							<h3>Prep</h3>
						</div>
						<div>
							<h3>Cook</h3>
						</div>
						<div>
							<h3>Total</h3>
						</div>
						<div>
							<h3>Serves</h3>
						</div>
					</div>
					<ul>
						<li>
							<A href="/?recipe=frontend">Frontend</A>
						</li>
						<li>
							<A href="/?recipe=backend">Backend</A>
						</li>
						<li>
							<button>Infrastructure as Code</button>
						</li>
						<li>
							<button>Databases</button>
						</li>
					</ul>
				</div>
				<div>
					<Show when={recipes[recipe() ?? 'frontend']} keyed>
						{(comp) => comp()}
					</Show>
				</div>
			</div>
		</Box>
	);
}

const recipes = {
	frontend: FrontendRecipe,
	backend: BackendRecipe,
} as const;

function FrontendRecipe() {
	return <div>Frontend Recipe</div>;
}

function BackendRecipe() {
	return <div>Backend Recipe</div>;
}

function Section(props: {
	children: JSX.Element | JSX.Element[];
	title: string;
}) {
	return (
		<Box as="section" class="mb-8">
			<h2 class="relative text-lg after:h-1 after:absolute after:inset-0 after:bg-gradient-to-r after:from-secondary after:to-transparent after:border-0 after:rounded-full after:translate-y-6">
				{props.title}
			</h2>
			{props.children}
		</Box>
	);
}
