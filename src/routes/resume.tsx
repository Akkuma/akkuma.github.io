import './resume.css';
import { For, onCleanup, onMount } from 'solid-js';

import { Link } from '#/components/link.jsx';
import { Education } from '#/components/resume/education.jsx';
import { Job } from '#/components/resume/job.jsx';
import { Keywords } from '#/components/resume/keywords.jsx';
import { Profile } from '#/components/resume/profile.jsx';
import { Section } from '#/components/resume/section.jsx';
import { Skills } from '#/components/resume/skills.jsx';
import { WorkExperience } from '#/components/resume/work-experience.jsx';
import { resume } from '#/resume.js';
import { Email } from '../icons/email.jsx';
import { GitHub } from '../icons/github.jsx';
import { LinkedIn } from '../icons/linkedin.jsx';

export default function Resume() {
	onMount(() => {
		let shouldAddDarkMode = false;
		const beforePrint = () => {
			shouldAddDarkMode = document.documentElement.classList.contains('dark');
			document.documentElement.classList.remove('dark');
		};
		const afterPrint = () => {
			if (!shouldAddDarkMode) return;

			document.documentElement.classList.add('dark');
		};

		window.addEventListener('beforeprint', beforePrint);
		window.addEventListener('afterprint', afterPrint);
		onCleanup(() => {
			window.removeEventListener('beforeprint', beforePrint);
			window.removeEventListener('afterprint', afterPrint);
		});
	});
	return (
		<main //class="w-full h-full"
			class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 min-h-[100vh] print:max-w-full print:px-0 text-sm"
			id="resume"
		>
			<header id="header" class="mb-6">
				<div>
					<div class="flex justify-between">
						<h1 class="text-4xl font-medium">Gregory Waxman</h1>
						<Link
							target="_self"
							class="flex gap-2 items-baseline text-sm print:hidden group"
							href="/gregory-waxman-resume.pdf"
						>
							<svg
								width="15"
								height="15"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="animate-bounce w-[1em] h-[1em] group-hover:animate-none"
							>
								<path
									d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
									fill="currentColor"
									fill-rule="evenodd"
									clip-rule="evenodd"
								></path>
							</svg>
							<span class="font-normal">PDF</span>
						</Link>
					</div>
					<h2 class="text-2xl text-foreground/80 font-light print:text-black print:text-xl">
						Leader &amp; full stack engineer with over 17 years of professional experience
					</h2>
				</div>
				<div class="mt-4">
					<span class="location">
						<span class="address">South Carolina, </span>
						<span class="countryCode">US</span>
					</span>

					<div id="contact">
						<div class="email flex items-center gap-1">
							<Email />
							<Link class="hide-href-print" href="mailto:gregorywaxman+resume@gmail.com">
								gregorywaxman+resume@gmail.com
							</Link>
						</div>
					</div>

					<div id="profiles" class="flex row flex-wrap gap-4">
						<Profile Icon={LinkedIn} text="greg-can-think" href="https://linkedin.com/in/greg-can-think" />
						<Profile Icon={GitHub} text="Akkuma" href="https://github.com/Akkuma" />
					</div>
				</div>
			</header>

			<WorkExperience work={resume.work} />
			<Skills skills={resume.skills} />
			<Education {...resume.education[0]} />
		</main>
	);
}
