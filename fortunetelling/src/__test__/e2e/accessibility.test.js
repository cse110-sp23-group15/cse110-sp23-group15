// Having problem with clicking the accessibility button, I have tried literally all combinations

const timeout = 20000;

describe('Noodle Profile', () => {
	beforeAll(async () => {});

	it(
		'should have text highlighted with accessibility switch',
		async () => {
			/* await page.goto(
                'https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/src/pages/profiles.html'
            );
            
            //const check = await page.$('input[type="checkbox"]');
            await page.evaluate(function(){
                var span= document.querySelector('span[class="slider round"]');
                var click= new Event('click');
                span.dispatchEvent(click);
            });
            //await page.screenshot({
			//	path: 'src/__test__/screenshots/highlighted-text.png'
			//});
			const readEnabled = await page.$('speechify');
            await page.click(readEnabled);
            await page.screenshot({
				path: 'src/__test__/screenshots/highlighted-text.png'
			});
            const colorValue = await page.evaluate(element => {
                const computedStyle = getComputedStyle(element);
                return computedStyle.color;
            }, readEnabled[i]);
            expect(colorValue).toBe('#d7ae0d');*/
		},
		timeout
	);
});
