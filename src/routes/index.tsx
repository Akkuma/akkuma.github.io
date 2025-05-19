import { Meta, Title } from '@solidjs/meta';
import { useSearchParams } from '@solidjs/router';
import { type FlowProps, For } from 'solid-js';
import { Box } from '#/components/box.tsx';
import { Posts } from '#/components/posts.tsx';
import { Recipes, categories } from '#/components/recipes.tsx';
import { TextLoop } from '#/components/text-loop.tsx';

export default function Home() {
	return (
		<>
			<Title>Greg in Codeland</Title>
			<Meta property="og:type" content="website" />

			<Meta property="og:title" content="Greg in Codeland" />
			<Meta
				name="description"
				content="Personal site of Greg, full stack principal software engineer with over 17 years of experience. Come join me for tea."
			/>
			<Meta
				property="og:description"
				content="Personal site of Greg, full stack principal software engineer with over 17 years of experience. Come join me for tea."
			/>
			<Meta property="og:image" content="https://akkuma.github.io/greg_in_frame_alt.webp" />
			<Meta property="og:image:width" content="660" />
			<Meta property="og:image:height" content="739" />
			<main class="mx-auto mt-12">
				<Box class="flex gap-8 mb-16">
					{/*thumbhash="pyiCDAIcOHjXGfh7jKr6CJxxlAiYeFd+Bg"*/}
					<img
						srcSet="greg_in_frame_alt.webp 328w"
						sizes="(min-width: 768px) 328px"
						src="greg_in_frame_alt.webp"
						class="hidden md:block w-1/2 max-w-[328px] max-h-[367px] -mt-2"
						width="328"
						height="367"
						decoding="async"
						loading="lazy"
					/>
					<header class="w-full md:w-1/2 text-left">
						<h1 class="max-6-xs text-6xl text-accent font-extralight m-0 font-title transition-theme">
							Join me for tea
						</h1>
						<p class="mt-8 text-xl font-light font-subheader">
							<span class="whitespace-pre-wrap">
								Full stack engineer & leader for over 17 years that can help you brew a great{' '}
							</span>
							<span class="inline-flex items-start justify-start text-secondary font-bold transition-theme">
								<TextLoop text={['product', 'team', 'culture', 'and even more']} />
							</span>
						</p>
					</header>
				</Box>

				<Section>
					<SectionTitle>Spilling the Tea</SectionTitle>
					<Posts />
				</Section>
				<Section class="min-h-[calc((12rem*5)+4rem)]">
					<SectionTitle class="flex justify-between">
						Explore Brews{' '}
						<div class="text-lg hidden md:block">
							<Brews />
						</div>
					</SectionTitle>
					<Recipes />
				</Section>
			</main>
		</>
	);
}

function Section(props: FlowProps<{ class?: string }>) {
	return (
		<Box as="section" class={`mb-8 ${props.class}`}>
			{props.children}
		</Box>
	);
}

function SectionTitle(props: FlowProps<{ class?: string }>) {
	return (
		<h2
			class={`relative mb-8 text-xl after:h-2 after:mt-2 after:absolute after:inset-0 after:bg-gradient-to-r after:from-[--gradient-secondary] after:to-transparent after:border after:border-foreground after:rounded-full after:translate-y-6 after:[transition-property:_--gradient-secondary,border-color] after:duration-[250ms] after:delay-[750ms] ${props.class}`}
		>
			{props.children}
		</h2>
	);
}

const categoryToDisplayCategory: Readonly<Partial<Record<(typeof categories)[number], string>>> = {
	aws: 'AWS',
};
function Brews() {
	const [searchParams] = useSearchParams();

	return (
		<ul class="flex justify-between gap-4">
			<For each={categories}>
				{(brew) => {
					const current = () => searchParams.recipe === brew || (!searchParams.recipe && brew === 'all');
					return (
						<li>
							<a
								href={`/?recipe=${brew}`}
								class="capitalize"
								classList={{
									'font-bold': current(),
								}}
								aria-current={current() ? 'true' : 'false'}
								preload
								noScroll
								replace
							>
								{categoryToDisplayCategory[brew] ?? brew}
							</a>
						</li>
					);
				}}
			</For>
		</ul>
	);
}
