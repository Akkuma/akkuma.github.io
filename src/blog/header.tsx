const dtf = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', day: 'numeric' });

export function Header(props: { title: string; date: Date }) {
	return (
		<header>
			<h1>{props.title}</h1>
			<time class="text-xs" dateTime={props.date.toISOString()}>
				{dtf.format(props.date)}
			</time>
		</header>
	);
}
