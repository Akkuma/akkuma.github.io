import type { FlowProps, JSX } from 'solid-js';

export function Card(props: FlowProps) {
	return (
		<div class="[perspective:1000px] h-48 w-56 group">
			<div class="transition-transform duration-700 h-full w-full shadow-lg rounded-lg group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d] group-hover:duration-500 relative">
				{props.children}
			</div>
		</div>
	);
}

Card.Front = function CardFront(props: { icon: JSX.Element; name: JSX.Element; about: JSX.Element }) {
	return (
		<div class="text-foreground [backface-visibility:hidden] absolute inset-0 p-4 border border-foreground/40 transition-colors duration-200 delay-700 rounded-lg">
			<div class="flex flex-col justify-start gap-4">
				<h3 class="flex items-center gap-2 text-lg">
					{props.icon} {props.name}
				</h3>
				<div>{props.about}</div>
			</div>
		</div>
	);
};

Card.Back = function CardBack(props: {
	icon: JSX.Element;
	name: string;
	start: string;
	prep: string;
	expertise: string;
}) {
	return (
		<div class="text-foreground [backface-visibility:hidden] [transform:rotateY(180deg)] absolute inset-0 p-4 border border-foreground/40 transition-colors duration-200 delay-700 rounded-lg flex flex-col justify-start gap-4">
			<h3 class="flex items-center gap-2 text-lg">
				{props.icon} {props.name} Details
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
		</div>
	);
};
