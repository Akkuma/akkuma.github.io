import type { Iso8601 } from '@kurone-kito/jsonresume-types';
import { Section } from './section.jsx';

const dtf = new Intl.DateTimeFormat('en-US', { year: 'numeric' })
export function Education(props: { startDate: Iso8601; endDate: Iso8601; studyType: string; area: string; institution: string; }) {
	return (
		<Section class="section">
			<Section.Title>Education</Section.Title>

			<section id="education">
				<section class="education-item">
					<header class="clear">
						<div class="date">
							<span class="startDate">{dtf.format(new Date(props.startDate))}</span>
							<span class="endDate"> - {dtf.format(new Date(props.endDate))}</span>
						</div>
						<div class="header-left">
							<div class="studyType">{props.studyType} </div>
							<div class="area">{props.area}</div>
							<div class="institution">{props.institution}</div>
						</div>
					</header>

					<div class="item"></div>
				</section>
			</section>
		</Section>
	);
}
