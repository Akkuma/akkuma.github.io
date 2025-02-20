import { Show } from 'solid-js';
import { Transition } from 'solid-transition-group';
import { MoonFilledIcon } from '#/icons/moon-filled.jsx';
import { SunFilledIcon } from '#/icons/sun-filled.jsx';
import { type Theme, setTheme, theme } from '#/state/theme.js';

import './theme-toggle.css';

const supportsViewTransition: boolean =
	typeof document === 'undefined' ? true : !!document.startViewTransition;
const toggleTheme = () =>
	(document.documentElement.dataset.theme =
		document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');

const containerClassesToToggle = ['overflow-hidden', 'group-hover:border-accent'];
export function ThemeToggle() {
	return (
		<div id="theme-toggle" class="flex items-center cursor-pointer group text-foreground">
			<div
				onClick={(el) => {
					setTheme((prevTheme: Theme) => (prevTheme === 'dark' ? 'light' : 'dark'));

					if (supportsViewTransition) {
						document.startViewTransition(toggleTheme);
					} else {
						el.currentTarget.classList.remove(...containerClassesToToggle);
						toggleTheme();
					}
				}}
				class="flex flex-col items-center justify-center w-6 h-6 overflow-hidden border-b border-transparent group-hover:border-accent"
			>
				{supportsViewTransition ? (
					<>
						<MoonFilledIcon class="moon shrink-0 group-hover:translate-y-2 transition-transform duration-700 group-data-[theme=light]/root:h-0" />
						<SunFilledIcon class="sun shrink-0 group-hover:translate-y-2 transition-transform duration-700 group-data-[theme=dark]/root:h-0" />
					</>
				) : (
					<Transition onBeforeEnter={onBeforeEnter} onAfterEnter={onAfterEnter} onBeforeExit={onBeforeExit}>
						<Show when={theme() === 'dark'}>
							<MoonFilledIcon class="moon group-hover:translate-y-2 transition-transform duration-700 text-primary-100 shrink-0" />
						</Show>
						<Show when={theme() === 'light'}>
							<SunFilledIcon class="sun group-hover:translate-y-2 transition-transform duration-700 text-primary-950 shrink-0" />
						</Show>
					</Transition>
				)}
			</div>
		</div>
	);
}

export default ThemeToggle;

//! onBeforeExit fires before onBeforeEnter
function onBeforeEnter(el: Element) {
	el.classList.remove('group-hover:translate-y-2'); // This creates a wonky jump
}

function onAfterEnter(el: Element) {
	el.parentElement?.classList.add(...containerClassesToToggle);

	setTimeout(() => el.classList.add('group-hover:translate-y-2'), 0); // Cleaner transition post animation
}

function onBeforeExit(el: Element) {
	el.classList.replace('group-hover:translate-y-2', 'translate-y-2');

	if (isHtmlElement(el)) {
		// Prevents the moon from shifting when the sun is added into the dom
		el.style.position = 'absolute';
	}
}

const isHtmlElement = (el: Element): el is HTMLElement => 'style' in el;
