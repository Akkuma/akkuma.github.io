// @refresh reload
import { StartServer, createHandler } from '@solidjs/start/server';

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en" data-style="vertical" class="group/root">
				<head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="theme-color" media="(prefers-color-scheme: light)" content="#fef6f9" />
					<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#100002" />

					<meta property="og:site_name" content="Greg in Codeland" />
					<meta property="og:locale" content="en_US" />
					{/* <meta property="og:url" content="https://akkuma.github.io" /> */}
					<meta property="twitter:site" name="twitter:site" content="@AkkumaRyuujin" />
					<meta property="twitter:creator" name="twitter:creator" content="@AkkumaRyuujin" />
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
					<link rel="icon" href="/favicon/favicon.ico" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
					<link rel="manifest" href="/favicon/site.webmanifest" />
					{/* <link rel="preconnect" href="https://fonts.googleapis.com" />
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
					/> */}
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
						document.documentElement.dataset.theme =localStorage.theme === 'dark' || (!('theme' in
						localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'
					</script>
				</head>
				<body class="pl-[calc(100vw-100%)] antialiased">
					<div id="app" class={`min-h-[100vh] print:max-w-full`}>
						{children}
					</div>
					{scripts}
					<script type="text/javascript">
						if (window.location.hostname === 'localhost') localStorage.setItem('umami.disabled', 1)
					</script>
					<script defer src="/um.js" data-website-id="782213f8-4bac-4c17-abf4-0d1ba4f5098f"></script>
				</body>
			</html>
		)}
	/>
));
