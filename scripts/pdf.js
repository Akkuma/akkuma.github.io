import playwright from 'playwright';

(async () => {
	const browser = await playwright.chromium.launch(/*{ devtools: true }*/);
	const context = await browser.newContext();
	const page = await context.newPage();
	try {
		await page.goto(`http://localhost:3000/resume`, {
			waitUntil: 'networkidle',
		});
	} catch (e) {
		console.error(e);
	}
	await page.emulateMedia({ media: 'print' });
	await page.pdf({
		path: `./public/gregory-waxman-resume.pdf`,
		format: 'A4',
		margin: { top: '1cm', left: '1.4cm', right: '1.4cm', bottom: '1cm' },
		printBackground: true,
	});
	await browser.close();
	console.log('Generated resume.pdf');
})();
