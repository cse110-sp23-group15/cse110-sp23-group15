const timeout = 5000;

describe('Questionnaire', () => {
	beforeAll(async () => {
		await page.goto(
			'https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/src/pages/questionnaire.html'
		);
	});

	it(
		'should select only one radio button per form in the questionnaire',
		async () => {
			const questionForms = await page.$$('.Question'); // Get all question form elements
			const questionForm = questionForms[1];
			const radioButtons = await questionForm.$$('input[type="radio"]');
			for (const radioButton of radioButtons) {
				await radioButton.click(); // Click all radios in the second form, therefore only the last one should be selected in the end
			}
			await page.screenshot({
				path: 'src/__test__/screenshots/allradioselected-questionnaire.png'
			});
			const selectedRadios = await questionForm.$$eval(
				'input[type="radio"]:checked',
				(nodes) => nodes.length
			);
			expect(selectedRadios).toBe(1);
		},
		timeout
	);

	it(
		'should check all forms have their answers before submit',
		async () => {},
		timeout
	);

	it(
		'should navigate to the right noodle profile after submit',
		async () => {},
		timeout
	);
});
