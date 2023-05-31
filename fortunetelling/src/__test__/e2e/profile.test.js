const timeout = 20000;
import { getHoroscope } from '../../js/genHoroscope.js';
describe('Noodle Profile', () => {
	beforeAll(async () => {
		await page.goto(
			'https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/src/pages/profiles.html'
		);
	});

	it('should get to the expected noodle profile', async () => {
        for (let i = 0;i < 3;++i){
			const noodleName = await page.$eval('#name h2', (el) => el.innerText);
			expect(noodleName).toBe(`Noodle ${(i+1)%3}`)
			const carousel = await page.$('#carousel-image');
			expect(carousel.alt).toBe(`Noodle ${(i+1)%3}`);
			await page.click('#next-noodle');
		}
		for (let i = 0;i < 3;++i){
			const noodleName = await page.$eval('#name h2', (el) => el.innerText);
			expect(noodleName).toBe(`Noodle ${(1-i)%3}`)
			const carousel = await page.$('#carousel-image');
			expect(carousel.alt).toBe(`Noodle ${(1-i)%3}`);
			await page.click('#prev-noodle');
		}
	}, timeout);

				
    it('should see a fortune', async () =>{
		await page.click('#next-noodle');
		await page.click('#fortune-button');
		const fortune = await page.$('#fortuneText').innerText;
		const fortuneExpected = genHoroscope(2);
		expect(fortune).toBe()
    }, timeout);

});
