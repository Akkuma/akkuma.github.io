import { A } from '@solidjs/router';
import { clientOnly } from '@solidjs/start';
import { ThemeToggleFallback } from './theme-toggle-fallback.jsx';

const ThemeToggle = clientOnly(() => import('./theme-toggle.jsx'));
export default function Nav() {
	return (
		<nav class="flex items-center justify-between py-4 sm:py-8 print:hidden">
			<A class="flex items-center justify-between gap-4" href="/">
				<span class="text-lg sm:text-2xl font-semibold sm:block font-title">Greg in Codeland</span>
			</A>
			<div class="flex items-center gap-4">
				<ul class="flex items-center gap-3 leading-5 sm:gap-6">
					<NavLink href="" text="Home" end />
					<NavLink href="resume" />
					<NavLink href="about" />
					<NavLink href="blog" />
				</ul>
				<ThemeToggle fallback={<ThemeToggleFallback />} />
			</div>
		</nav>
	);
}

function NavLink({ href, text = href, end }: { href: string; text?: string; end?: boolean }) {
	return (
		<li
			class={`border-b-2 cursor-pointer border-transparent hover:border-accent has-[.active]:border-accent`}
		>
			<A href={`/${href}`} class="capitalize" preload end={end}>
				{text}
			</A>
		</li>
	);
}
