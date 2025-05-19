import { Meta, Title } from '@solidjs/meta';

export function TopMeta(props: { title: string }) {
	return (
		<>
			<Title>{props.title}</Title>
			<Meta property="og:title" content={props.title} />
			<Meta
				name="description"
				content="Personal site of Greg, full stack principal software engineer with over 17 years of experience. Come join me for tea."
			/>
			<Meta
				property="og:description"
				content="Personal site of Greg, full stack principal software engineer with over 17 years of experience. Come join me for tea."
			/>
			<Meta property="og:image" content="https://akkuma.github.io/og.webp" />
		</>
	);
}
