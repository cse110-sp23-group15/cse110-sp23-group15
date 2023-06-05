const timeout = 5000;
// Can't directly call genHoroscope because of module difference
describe('Fortune Page', () => {
	beforeAll(async () => {
		await page.goto(
			'https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/src/pages/fortune.html'
		);
	});

	it(
		'should see other fortunes after seeing other noodles',
		async () => {
			const fortune = await page.$eval('#fortuneText', (el) => el.innerText);
            await page.click('#dropbtn');
            await page.waitForSelector('.dropdown-content');
            await page.click('.noodleButton:nth-child(5)');
            const newFortune = await page.$eval('#fortuneText',(el)=>el.innerText);
            expect(fortune).not.toBe(newFortune);
		},
		timeout
	);
});
