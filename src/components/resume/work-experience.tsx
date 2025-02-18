import type { ResumeSchema } from '@kurone-kito/jsonresume-types';
import { For } from 'solid-js';
import { Job } from './job.jsx';
import { Section } from './section.jsx';

type Job = NonNullable<ResumeSchema['work']>[number];
interface ResumeWork extends Omit<Job, 'highlights'> {
	name: string;
	position: string;
	url: `https://${string}`;
	logo?: string;
	keywords: readonly string[];
	startDate: string;
	highlights: readonly string[];
}
export function WorkExperience(props: { work: readonly ResumeWork[] }) {
	return (
		<Section class="section">
			<Section.Title>Work Experience</Section.Title>

			<section id="work">
				<For each={props.work}>
					{(job) => <Job {...job} company={job.name} companyHref={job.url} companyLogoSrc={job.logo} />}
				</For>
			</section>
		</Section>
	);
}
