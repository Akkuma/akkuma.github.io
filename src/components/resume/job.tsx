import type { Iso8601 } from '@kurone-kito/jsonresume-types';
import { For, Show } from 'solid-js';
import { Location } from '#/icons/location.jsx';
import { Link } from '../link.jsx';
import { Keywords } from './keywords.jsx';

const dtf = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' });
const code = /`\w+.?\w+`/gm;
interface JobProps {
	position: string;
	company: string;
	location?: string;
	companyHref: `https://${string}`;
	companyLogoSrc?: string;
	startDate: Iso8601;
	endDate?: Iso8601;
	keywords: readonly string[];
	summary?: string;
	highlights: readonly string[];
}
export function Job(props: JobProps) {
	return (
		<section class="work-item">
			<header class="flex justify-between">
				<div>
					<h3 class="position text-base">{props.position}</h3>
					<span class="company print:text-black/80 block before:hidden sm:inline sm:before:inline">{props.company}</span>
				</div>
				<div class="date">
					<span class="startDate">{dtf.format(new Date(props.startDate))}</span>
					<span class="endDate"> - {props.endDate ? dtf.format(new Date(props.endDate)) : 'Current'}</span>
				</div>
			</header>

			<div class="flex gap-2 items-center">
				<span class="location flex items-center gap-1">
					<Location />
					<span class="location leading-none h-[calc(1em-2px)]">{props.location ?? 'Remote'}</span>
				</span>
				<span class="url flex items-center gap-1">
					{props.companyLogoSrc && <img class="logo w-[1em] h-[1em]" src={props.companyLogoSrc} />}
					<Link target="_blank" href={props.companyHref} class="leading-none h-[calc(1em-2px)]">
						{props.companyHref.replace('https://', '')}
					</Link>
				</span>
			</div>
			<Keywords keywords={props.keywords.map((_) => _.toLowerCase())} />
			<Show when={props.summary}>
				<div class="summary">
					<p>{props.summary}</p>
				</div>
			</Show>
			<ul class="highlights">
				<For each={props.highlights}>
					{(item) => (
						<li>
							<p>
								<Highlight text={item} />
							</p>
						</li>
					)}
				</For>
			</ul>
		</section>
	);
}

function Highlight(props: { text: string }) {
	if (props.text.match(code) === null) return props.text;
	const codes = props.text.matchAll(code);

	let start = 0;
	const content = [];
	for (const match of codes) {
		content.push(props.text.slice(start, match.index));
		const codeMatch = match[0];
		content.push(<code>{codeMatch.replaceAll('`', '')}</code>);

		start = codeMatch.length + match.index;
	}

	return content;
}
