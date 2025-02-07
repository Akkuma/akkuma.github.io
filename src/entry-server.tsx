// @refresh reload
import { StartServer, createHandler } from '@solidjs/start/server';

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en">
				<head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
					<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
					<link
						rel="preload"
						href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=Arima:wght@100..700&family=Kreon:wght@300..700&display=swap"
						onload={(el) => {
							el.currentTarget.onload = null;
							el.currentTarget.rel = 'stylesheet';
							el.currentTarget.removeAttribute('as');
						}}
						as="style"
						fetchpriority="high"
					/>

					<link rel="icon" href="/favicon.ico" />

					{/* Resume */}
					{/*
          <link rel="preconnect" href="https://rsms.me/"
            crossOrigin="anonymous"
          />
          <link rel="preload" as="style" href="https://rsms.me/inter/inter.css" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" crossOrigin="anonymous" />
          <link rel="preload" as="font" href="https://rsms.me/inter/font-files/Inter-Thin.woff2?v=4.1" crossOrigin="anonymous"/>
          <link rel="preload" as="font" href="https://rsms.me/inter/font-files/Inter-Light.woff2?v=4.1" crossOrigin="anonymous"/>
          <link rel="preload" as="font" href="https://rsms.me/inter/font-files/Inter-Regular.woff2?v=4.1" crossOrigin="anonymous"/>
          <link rel="preload" as="font" href="https://rsms.me/inter/font-files/Inter-SemiBold.woff2?v=4.1" crossOrigin="anonymous"/>
          <link rel="preload" as="font" href="https://rsms.me/inter/font-files/Inter-Bold.woff2?v=4.1" crossOrigin="anonymous"/>*/}

					<link
						href="https://fonts.bunny.net/css?family=fira-code:400"
						rel="preload"
						as="style"
						crossOrigin="anonymous"
					/>
					<link
						href="https://fonts.bunny.net/css?family=fira-code:400"
						rel="stylesheet"
						crossOrigin="anonymous"
					/>
					{/*
					<link rel="preconnect" href="https://use.fontawesome.com" crossOrigin="anonymous" />
					<link
						rel="preload"
						as="style"
						href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
						integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
						crossorigin="anonymous"
					/>
					<link
						rel="stylesheet"
						href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
						integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
						crossorigin="anonymous"
					/>*/}
					{assets}
					<script type="text/javascript">
						document.documentElement.classList.toggle( 'dark', localStorage.theme === 'dark' || (!('theme' in
						localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) )
					</script>
				</head>
				<body class="pl-[calc(100vw-100%)] antialiased">
					<div id="app" class="min-h-[100vh] print:max-w-full">
						{children}
					</div>
					{scripts}
				</body>
			</html>
		)}
	/>
));
