const timeout = 5000;

describe('Noodle Profile', () => {
	beforeAll(async () => {
		await page.goto(
			'https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/src/pages/profiles.html'
		);
	});

	it('should get to the expected noodle profile', async () => {}, timeout);

	it('should review the expected fortune', async () => {}, timeout);
});
