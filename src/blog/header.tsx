const dtf = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', day: 'numeric' });

export function Header(props: { title: string; date: Date }) {
	return (
		<header class="text-[2.25em] mb-[0.8888889em] flex flex-col">
			<h1 class="!mb-0 !text-[1em] text-accent">{props.title}</h1>
			<time class="text-xs" dateTime={props.date.toISOString()}>
				{dtf.format(props.date)}
			</time>
		</header>
	);
}
