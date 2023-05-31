const timeout = 20000;
const puppeteer = require('puppeteer');
// It says cannot import outside a module even if we have type:"module" in package.json, probably needs to fix this later
const GalaxyS8 = puppeteer.KnownDevices['Galaxy S8'];

describe('Noodle Profile', () => {
	beforeAll(async () => {
		await page.emulate(GalaxyS8);
		await page.goto(
			'https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/src/pages/profiles.html'
		);
	});

	it(
		'should get to the expected noodle profile',
		async () => {
			let noodleName = await page.$eval('#name h2', (el) => el.innerText);
			expect(noodleName).toBe('Beef Noodle Soup');
			await page.waitForSelector('img[alt="Chicken Noodle Soup"]');
			await page.evaluate(() => {
				const ravioli = document.querySelector(
					'img[alt="Chicken Noodle Soup"]'
				);
				ravioli.click();
			});
			await page.screenshot({
				path: 'src/__test__/screenshots/Galaxy-Chicken-Soup.png'
			});
			noodleName = await page.$eval('#name', (el) => el.innerText);
			expect(noodleName).toBe('Chicken Noodle Soup');
		},
		timeout
	);

	it(
		'should see a fortune',
		async () => {
			// await page.waitForSelector('div button[innerText="Reveal my Fortune"]');
			await page.click('a[href="fortune.html"]'); // Don't know why, I just can't select or click the fortune button
			const fortune = await page.$eval('#fortuneText', (el) => el.innerText);
			expect(fortune).not.toBe('');
		},
		timeout
	);
});
