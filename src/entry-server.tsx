// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en" class="light">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#fff"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#000"
          />
          {/* <link rel="preconnect" href="https://rsms.me/" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> */}
          <link rel="preconnect" href="https://fonts.bunny.net" />
          <link
            href="https://fonts.bunny.net/css?family=space-grotesk:300,400,500,600,700"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />

          {/* Resume */}
          <link rel="preconnect" href="https://rsms.me/" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link rel="preconnect" href="https://fonts.bunny.net" />
          <link
            href="https://fonts.bunny.net/css?family=fira-code:400"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
            integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
            crossorigin="anonymous"
          />
          {assets}
        </head>
        <body class="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
          <div
            id="app"
            class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 min-h-[100vh] print:max-w-full"
          >
            {children}
          </div>
          {scripts}
        </body>
      </html>
    )}
  />
));
