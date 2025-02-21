import type { ResumeSchema } from '@kurone-kito/jsonresume-types';
import { For } from 'solid-js';
import { Keywords } from './keywords.jsx';
import { Section } from './section.jsx';

type Skill = NonNullable<ResumeSchema['skills']>[number];
interface ResumeSkill extends Skill {
	keywords: string[];
}
export function Skills(props: { skills: ResumeSkill[] }) {
	return (
		<Section class="section">
			<Section.Title>Skills</Section.Title>
			<section id="skills">
				<For each={props.skills}>
					{(skill) => (
						<div class="item w-1/2 sm:w-1/3">
							<h3 class="name">{skill.name}</h3>
							<Keywords keywords={skill.keywords} />
						</div>
					)}
				</For>
			</section>
		</Section>
	);
}
