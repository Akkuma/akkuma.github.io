import { type FlowProps, type JSX, createSignal } from 'solid-js';
import { ArrowRightIcon } from '#/icons/arrow-right-icon.tsx';

import './card.css';
export function Card(props: FlowProps) {
	const [isSelecting, setIsSelecting] = createSignal(false);

	// Could potentially use context for link clicked handling instead?
	// group-hover-never:[transform:rotateY(180deg)]
	return (
		<div class="[perspective:1000px] h-48 w-full sm:w-60 group isolate bg-background">
			<div
				class="card-flip transition-transform duration-700 h-full w-full shadow-lg rounded-lg [transform-style:preserve-3d] group-hover-never:duration-500 relative"
				onPointerMove={(e) => {
					// Allows for selecting text without flipping
					const selection = document.getSelection();
					const isCollapsed = selection?.isCollapsed || !selection?.toString().trim();
					if (!isCollapsed) setIsSelecting(true);
				}}
				onPointerEnter={(e) => {
					if (e.pointerType === 'touch') return;

					// Double enters occur from the animation and this avoids it
					const animations = e.currentTarget.getAnimations();
					if (animations.length > 0 && animations[0]?.finished) return;

					e.currentTarget.classList.toggle('flip-to-back');
				}}
				onPointerUp={(e) => {
					if (e.target.classList.contains('learn-more') || isSelecting()) {
						setIsSelecting(false);
						return;
					}

					e.currentTarget.classList.toggle('flip-to-back');
				}}
			>
				{props.children}
			</div>
		</div>
	);
}

Card.Front = function CardFront(props: { icon?: JSX.Element; name: string; about: JSX.Element }) {
	return (
		<div class="text-foreground bg-background [backface-visibility:hidden] flex flex-col justify-start gap-4 absolute inset-0 p-4 border border-foreground/40 transition-theme rounded-lg">
			<h3 class="flex items-center gap-2 text-lg">
				{props.icon ?? <FauxIcon name={props.name} />} {props.name}
			</h3>
			<p>{props.about}</p>
		</div>
	);
};

Card.Back = function CardBack(props: {
	icon?: JSX.Element;
	name: string;
	start: string;
	prep: string;
	expertise: string;
	link?: `https://${string}`;
}) {
	return (
		<div class="text-foreground bg-background [backface-visibility:hidden] [transform:rotateY(180deg)] absolute inset-0 p-4 border border-foreground/40 transition-theme rounded-lg flex flex-col justify-start gap-4">
			<h3 class="flex items-center gap-2 text-lg">
				{props.icon ?? <FauxIcon name={props.name} />} {props.name} Details
			</h3>
			<ul class="flex gap-2">
				<li class="flex flex-col">
					<h5>Start</h5>
					{props.start}
				</li>
				<li class="flex flex-col">
					<h5>Prep</h5>
					{props.prep}
				</li>
				<li class="flex flex-col">
					<h5>Expertise</h5>
					{props.expertise}
				</li>
			</ul>
			{props.link && (
				<a class="learn-more absolute bottom-4 right-4 flex items-center" target="_blank" href={props.link}>
					Learn more <ArrowRightIcon />
				</a>
			)}
		</div>
	);
};

function FauxIcon(props: { name: string }) {
	return (
		<div class="w-5 h-5 rounded-sm bg-secondary text-sm p-1 flex justify-center items-center text-background transition-theme">
			{props.name[0]}
		</div>
	);
}
