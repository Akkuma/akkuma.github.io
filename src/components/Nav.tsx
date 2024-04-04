import { A, useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();

  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <nav class="flex items-center justify-between py-10 print:hidden">
      <A class="flex items-center justify-between gap-4" href="/">
        <img
          class="rounded-full"
          src="//gravatar.com/avatar/e542df18658a4102990d524935118de0ccc750c5a0da8a1ced6c3176cf831cd4?s=45"
        />
        <span class="hidden text-2xl font-semibold sm:block">Round 1</span>
      </A>
      <ul class="flex items-center gap-4 leading-5 sm:gap-6">
        <li class={`border-b-2 ${active("/")}`}>
          <A
            class="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            href="/"
          >
            Home
          </A>
        </li>
        <li class={`border-b-2 ${active("/resume")}`}>
          <A href="/resume">Resume</A>
        </li>
        <li class={`border-b-2 ${active("/tailwind")}`}>
          <A href="/tailwind">Tailwind</A>
        </li>
      </ul>
    </nav>
  );
}
