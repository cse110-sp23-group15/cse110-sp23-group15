describe('Basic exploration of jest testing', () => {
	// First, visit the lab 8 website
	beforeAll(async () => {
		await page.goto(
			'https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/index.html'
		); // replace with published site's url
	});

	it('Initial Home Page - Navigation', async () => {
		console.log('Navigate to Questionnaire...');
		// Query select all of the <product-item> elements and return the length of that array
		await page.click('a[href="src/pages/questionnaire.html"]');
		expect(page.url()).toBe(
			'https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/src/pages/questionnaire.html'
		);
	});
});
