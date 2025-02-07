import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';
import Nav from './components/nav.jsx';
import './app.css';
import { Box } from './components/box.jsx';

export default function App() {
	return (
		<Router
			base={import.meta.env.SERVER_BASE_URL}
			root={(props) => (
				<>
					<Box as="header" class="h-max-w-5xl sm:pl-6 sm:pr-4">
						<Nav />
					</Box>
					<Suspense>{props.children}</Suspense>
				</>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
