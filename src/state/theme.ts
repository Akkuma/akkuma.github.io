import { createSignal } from 'solid-js';

export type Theme = 'dark' | 'light';
const hasLocalStorage = typeof localStorage !== 'undefined';
const storedTheme = hasLocalStorage && (localStorage.getItem('theme') as Theme);
const prefersDark =
	typeof window === 'undefined' ? true : window.matchMedia('(prefers-color-scheme: dark)').matches;
let defaultTheme = storedTheme;
if (!defaultTheme) {
	defaultTheme = prefersDark ? 'dark' : 'light';
}

const [theme, setThemeOG] = createSignal<Theme>(defaultTheme);

export const setTheme = (fn: (prevTheme: Theme) => Theme) => {
	setThemeOG((theme) => {
		const newTheme = fn(theme)
		localStorage.setItem('theme', newTheme);
		return newTheme
	});
};

export { theme };
