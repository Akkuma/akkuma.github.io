import type { JSX } from 'solid-js';

//Logos
export function AwsS3Logo(props: JSX.IntrinsicElements['svg']) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}>
			<defs>
				<linearGradient id="logosAwsS30" x1="0%" x2="100%" y1="100%" y2="0%">
					<stop offset="0%" stop-color="#1B660F" />
					<stop offset="100%" stop-color="#6CAE3E" />
				</linearGradient>
			</defs>
			<path fill="url(#logosAwsS30)" d="M0 0h256v256H0z" />
			<path
				fill="#FFF"
				d="m194.675 137.256l1.229-8.652c11.33 6.787 11.478 9.59 11.475 9.667c-.02.016-1.952 1.629-12.704-1.015m-6.218-1.728c-19.584-5.926-46.857-18.438-57.894-23.654c0-.045.013-.086.013-.131c0-4.24-3.45-7.69-7.693-7.69c-4.237 0-7.687 3.45-7.687 7.69s3.45 7.69 7.687 7.69c1.862 0 3.552-.695 4.886-1.8c12.986 6.148 40.048 18.478 59.776 24.302l-7.801 55.059q-.033.225-.032.451c0 4.848-21.463 13.754-56.532 13.754c-35.44 0-57.13-8.906-57.13-13.754q0-.22-.028-.435l-16.3-119.062c14.108 9.712 44.454 14.85 73.478 14.85c28.979 0 59.273-5.12 73.41-14.802zM48 65.528c.23-4.21 24.428-20.73 75.2-20.73c50.764 0 74.966 16.516 75.2 20.73v1.437c-2.784 9.443-34.144 19.434-75.2 19.434c-41.127 0-72.503-10.023-75.2-19.479zm156.8.07c0-11.087-31.79-27.2-81.6-27.2c-49.812 0-81.6 16.113-81.6 27.2l.3 2.414l17.754 129.676c.426 14.503 39.1 19.91 63.526 19.91c30.31 0 62.512-6.969 62.928-19.9l7.668-54.07c4.265 1.02 7.776 1.542 10.595 1.542c3.785 0 6.345-.925 7.897-2.774c1.274-1.517 1.76-3.354 1.396-5.31c-.83-4.428-6.087-9.202-16.794-15.311l7.603-53.639z"
			/>
		</svg>
	);
}
