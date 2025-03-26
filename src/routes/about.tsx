import { Title } from '@solidjs/meta';
import { A } from '@solidjs/router';
import type { ParentProps } from 'solid-js';
import { Box } from '#/components/box.jsx';

export default function Tailwind() {
	return (
		<Box as="main" class="mb-10">
			<Title>About | Greg in Codeland</Title>
			<header>
				<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					Hi{' '}
					<span class="inline-block fill-mode-backwards animate-in anim-delay-1000 anim-duration-[1.5s] slide-in-from-bottom-full fade-in-0 anim-ease-elastic motion-reduce:animate-none">
						fellow human,
					</span>
				</h1>
			</header>
			<div class="animate-in anim-delay-[1.5s] anim-ease-in-out anim-duration-[1s] fade-in-0 fill-mode-backwards mt-4 max-w-[75ch]">
				<P>Fancy seeing you here!</P>
				<P>
					Dr. Frankenstein here just doing my mad science experiments in my mad science lab creating mad
					awesome software for over 17 years now. I love creating life from nothingness. The act of creating
					and being able to show people what you've created is what has kept me engineering for all this time.
					It is like art that starts from a blank canvas and isn't fully realized until the very end.
				</P>
				<P>
					I know this will come as a shock, but I'm really Greg. Thanks to Akira Toriyama I've been playing on
					the web back when Angelfire and Geocities were the cool tools and been at it professionally since
					2007. Simply put, I love making things that others get to use.
				</P>
				<P>Now let me tell you about why I'm a great engineer.</P>
				<P>
					Let's start with this site. I whipped it up originally overnight as a way to apply for a job. It
					uses tech I've never used at a company,{' '}
					<a class="text-link" href="https://start.solidjs.com/" target="_blank" rel="noreferrer">
						SolidStart
					</a>{' '}
					&{' '}
					<a class="text-link" href="https://bun.sh/" target="_blank" rel="noreferrer">
						Bun
					</a>
					. There's even some custom bells and whistles I've added in too. We've got{' '}
					<a class="text-link" href="https://jsonresume.org/" target="_blank" rel="noreferrer">
						jsonresume
					</a>{' '}
					in action plus{' '}
					<a class="text-link" href="https://mdxjs.com/" target="_blank" rel="noreferrer">
						mdxjs
					</a>
					, topped off with some minimal custom scripts to produce a static site. New doesn't scare me. It is
					an adventure waiting for me to begin. There's so much to learn in this field and it excites me the
					prospect of jumping into unique challenges.
				</P>
				<P>
					What are a few of the responsibilities that excite me about a job?
					<ul class="list-disc w-full max-w-96 ml-4 mt-2">
						{[
							'Tackling new challenges',
							'Helping other engineers',
							'Solving real problems people are facing',
							'Being a champion for quality',
							'Donning my robe and wizard hat to make magic happen',
							// eslint-disable-next-line jsx-key
						].map((val, i) => (
							<Li>
								{val} <Check index={i} />
							</Li>
						))}
					</ul>
				</P>
				<P>
					Many of these responsibilities reflect what I've been doing over the last several years. At
					Intellimize, some of what I did included leading the development of a completely new frontend
					architecture, working hard to build a great high quality product, and making CI/CD better, all while
					acting as a mentor to the team. This improved other engineers' lives, led to faster development
					cycles, and helped make the team better.
				</P>
				<P>
					At Bison, I was hired onto the platform team to raise the bar of the engineering team. This meant
					building out our repo template, rapidly unblocking other engineers, mentoring other engineers,
					working on our CI/CD, guiding our future tech direction, and much more.
				</P>
				<P>
					Addtionally, I've written detailed and well regarded ADRs at Bison. The most recent of those ADRs
					was broken into five different ADRs, which included{' '}
					<a href="/ADR_Frontend_Framework.pdf" class="text-link" target="_blank" rel="noreferrer">
						frontend framework direction for the company
					</a>{' '}
					&{' '}
					<a href="/ADR_Metaframework.pdf" class="text-link" target="_blank" rel="noreferrer">
						metaframework analysis for future tech guidance
					</a>
					.
				</P>
				<P>
					When it comes to open source contributions, whenever I run into a problem I try to fix it &
					contribute it back if possible, otherwise I try to add an issue. Some of those include:
					<ul class="list-disc ml-4 mt-2">
						<Li>
							<a
								href="https://github.com/dannyhw/storybook-chromatic-link-comment/pull/107"
								class="text-link"
								target="_blank"
								rel="noreferrer"
							>
								storybook-chromatic-link-comment enhancement
							</a>
						</Li>
						<Li>
							<a
								href="https://github.com/nksaraf/vinxi/pull/286"
								class="text-link"
								target="_blank"
								rel="noreferrer"
							>
								Fixing vinxi to support modern node package.json imports
							</a>
						</Li>
						<Li>
							<a
								href="https://github.com/urql-graphql/urql/issues/3462"
								class="text-link"
								target="_blank"
								rel="noreferrer"
							>
								Urql request-policy-exchange
							</a>
						</Li>
						<Li>
							<a
								href="https://github.com/lukeed/dset/pull/40"
								class="text-link"
								target="_blank"
								rel="noreferrer"
							>
								dset TypeScript improvement
							</a>
						</Li>
						<Li>
							<a
								href="https://github.com/Akkuma/akita-email"
								class="text-link"
								target="_blank"
								rel="noreferrer"
							>
								akita-email a port of jsx-email to utilize kita (WIP)
							</a>
						</Li>
					</ul>
				</P>
				<P>
					I hope I've tickled your fancy enough for you to check out my full{' '}
					<A href="/resume" class="text-link">
						resume
					</A>
					, where you can also find my contact information. If you're excited to talk to me reach out and
					let's chat to see how I can help you.
				</P>
				<p class="leading-7 [&:not(:first-child)] text-pretty mt-6 animate-in anim-ease-in-out fade-in-0 fill-mode-backwards motion-reduce:animate-none [animation-timeline:view()] [animation-range:entry_0%_contain_10%] supports-no-view-driven-animations:animate-none">
					<span class="block">Thanks for stopping on by,</span>
					<span class="block">Greg</span>
				</p>
			</div>
		</Box>
	);
}

interface PProps extends ParentProps {
	class?: string;
}
const P = ({ children }: PProps) => (
	<p class="leading-7 [&:not(:first-child)] text-pretty mt-6 animate-in anim-ease-in-out fade-in-0 fill-mode-backwards motion-reduce:animate-none [animation-timeline:view()] [animation-range:entry_0%_contain_20%] supports-no-view-driven-animations:animate-none">
		{children}
	</p>
);

interface CheckProps {
	index: number;
}
const Check = ({ index }: CheckProps) => (
	<svg
		width="15"
		height="15"
		viewBox="0 0 15 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		style={{ '--index': index }}
		class="w-[1lh] h-[1lh] animate-in text-secondary fill-mode-backwards anim-duration-500 fade-in-0 [animation-delay:calc(var(--index)*.4s+7s)] mr-1"
	>
		<path
			d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
			fill="currentColor"
			fill-rule="evenodd"
			clip-rule="evenodd"
		></path>
	</svg>
);

const Li = ({ children }: ParentProps) => (
	<li class="animate-in anim-ease-in-out fade-in-0 fill-mode-backwards motion-reduce:animate-none [animation-timeline:view()] [animation-range:entry_0%_contain_20%] supports-no-view-driven-animations:animate-none">
		<div class="flex justify-between gap 4">{children}</div>
	</li>
);
