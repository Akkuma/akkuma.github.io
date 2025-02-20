import { A, useMatch } from '@solidjs/router';
import { clientOnly } from '@solidjs/start';
import { ThemeToggleFallback } from './theme-toggle-fallback.jsx';

const ThemeToggle = clientOnly(() => import('./theme-toggle.jsx'));
export default function Nav() {
	return (
		<nav class="flex items-center justify-between py-10 print:hidden">
			<A class="flex items-center justify-between gap-4" href="/">
				<span class="text-lg sm:text-2xl font-semibold sm:block font-title">Greg in Codeland</span>
			</A>
			<div class="flex items-center gap-4">
				<ul class="flex items-center gap-3 leading-5 sm:gap-6">
					<NavLink href="" text="Home" />
					<NavLink href="resume" />
					<NavLink href="about" />
					<NavLink href="blog" />
				</ul>
				<ThemeToggle fallback={<ThemeToggleFallback />} />
			</div>
		</nav>
	);
}

function NavLink({ href, text = href }: { href: string; text?: string }) {
	const match = useMatch(() => href);
	const locationClasses = () => (match() ? 'border-accent' : 'border-transparent hover:border-accent');

	return (
		<li class={`border-b-2 cursor-pointer ${locationClasses()}`}>
			<A href={`/${href}`} class="capitalize">
				{text}
			</A>
		</li>
	);
}
