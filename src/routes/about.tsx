import { A } from "@solidjs/router";
import { ParentProps } from "solid-js";

export default function Tailwind() {
  return (
    <main class="mb-10">
      <header>
        <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Hi{" "}
          <span class="inline-block fill-mode-backwards animate-in anim-delay-1000 anim-duration-[1.5s] slide-in-from-bottom-full fade-in-0 anim-ease-elastic motion-reduce:animate-none">
            fellow human,
          </span>
        </h1>
      </header>
      <div class="animate-in anim-delay-[1.5s] anim-ease-in-out anim-duration-[1s] fade-in-0 fill-mode-backwards mt-4 max-w-[75ch]">
        <P>Fancy seeing you here!</P>
        <P>
          I'm Greg, currently a Principal Software Engineer, that has been
          working on web applications professionally since 2007. But I've been
          playing on the web back when Angelfire and Geocities were the cool
          tools. I love making things that others get to use.
        </P>
        <P>
          Now let me tell you about why I'm a great engineer you'd want at your company.
        </P>
        <P>
          Let's start with this site. I whipped it up overnight as a way
          to apply for a job. It uses tech I don't use daily at my job,{" "}
          <a
            class="text-sky-700"
            href="https://start.solidjs.com/"
            target="_blank"
            rel="noreferrer"
          >
            SolidStart
          </a>{" "}
          &{" "}
          <a class="text-sky-700" href="https://bun.sh/" target="_blank" rel="noreferrer">
            Bun
          </a>
          . New doesn't scare me. It is an adventure waiting for me to begin.
          There's so much to learn in this field and it excites me the prospect
          of jumping into unique challenges.
        </P>
        <P>
          What are a few of the responsibilities that excite me about a job?
          <ul class="list-disc w-96 ml-4 mt-2">
            {[
              "Tackling new challenges",
              "Helping other engineers",
              "Solving real problems people are facing",
              "Being a champion for quality",
              "Donning my robe and wizard hat to make magic happen"
            ].map((val, i) => (
              <Li>
                {val} <Check index={i} />
              </Li>
            ))}
          </ul>
        </P>
        <P>
          Many of these responsibilities reflect what I've been doing over the
          last several years. At Intellimize, some of what I did included
          leading the development of a completely new frontend architecture,
          working hard to build a great high quality product, and making CI/CD
          better, all while acting as a mentor to the team. This improved other
          engineers' lives, led to faster development cycles, and helped make
          the team better.
        </P>
        <P>
          At Bison, I was hired onto the platform team to raise the bar of the
          engineering team. This meant building out our repo template, 
          rapidly unblocking other engineers, helping other engineers, 
          working on our CI/CD, guiding our future tech direction, and much more.
        </P>
        <P>
          Addtionally, I've written detailed and well regarded ADRs at Bison.
          The most recent of those ADRs was broken into five different ADRs,
          which included{" "}
          <a
            href="/ADR_Frontend_Framework.pdf"
            class="text-sky-700"
            target="_blank"
            rel="noreferrer"
          >
            frontend framework direction for the company
          </a>{" "}
          &{" "}
          <a 
            href="/ADR_Metaframework.pdf" 
            class="text-sky-700" 
            target="_blank" 
            rel="noreferrer"
          >
            metaframework analysis for future use
          </a>
          .
        </P>
        <P>
          When it comes to open source contributions, whenever I run into a
          problem I try to fix it & contribute it back if possible, otherwise I
          try to add an issue. Some of those include:
          <ul class="list-disc ml-4 mt-2">
            <Li>
              <a
                href="https://github.com/dannyhw/storybook-chromatic-link-comment/pull/107"
                class="text-sky-700"
                target="_blank"
                rel="noreferrer"
              >
                storybook-chromatic-link-comment enhancement
              </a>
            </Li>
            <Li>
              <a
                href="https://github.com/storybookjs/storybook/issues/26280"
                class="text-sky-700"
                target="_blank"
                rel="noreferrer"
              >
                Storybook RC issue
              </a>
            </Li>
            <Li>
              <a
                href="https://github.com/urql-graphql/urql/issues/3462"
                class="text-sky-700"
                target="_blank"
                rel="noreferrer"
              >
                Urql issue & offering contribution
              </a>
            </Li>
            <Li>
              <a
                href="https://github.com/lukeed/dset/pull/40"
                class="text-sky-700"
                target="_blank"
                rel="noreferrer"
              >
                dset TypeScript improvement
              </a>
            </Li>
                        <Li>
              <a
                href="https://github.com/Akkuma/akita-email"
                class="text-sky-700"
                target="_blank"
                rel="noreferrer"
              >
                akita-email a port of jsx-email to utilize kita (WIP)
              </a>
            </Li>
          </ul>
        </P>
        <P>
          I hope I've tickled your fancy enough for you to check out my full{" "}
          <A href="/resume" class="text-sky-700">
            resume
          </A>
          . If you're excited to talk to me reach out and let's chat.
        </P>
        <p class="leading-7 [&:not(:first-child)] text-pretty mt-6 animate-in anim-ease-in-out fade-in-0 fill-mode-backwards motion-reduce:animate-none [animation-timeline:view()] [animation-range:entry_0%_contain_10%] supports-no-view-driven-animations:animate-none">
          <span class="block">Thanks for stopping on by,</span>
          <span class="block">Greg</span>
        </p>
      </div>
    </main>
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
    style={{ "--index": index }}
    class="w-[1lh] h-[1lh] animate-in fill-mode-backwards anim-duration-500 fade-in-0 [animation-delay:calc(var(--index)*.4s+7s)]"
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
