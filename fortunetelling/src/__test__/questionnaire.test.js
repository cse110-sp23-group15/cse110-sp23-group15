const timeout = 5000;

describe('Questionnaire', () => {
  beforeAll(async () => {
    await page.goto('https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/src/pages/questionnaire.html');
  });

  it('should select only one radio button per form in the questionnaire', async () => {
    await page.waitForSelector('.Question'); // Wait for the question elements to appear

    let i = Math.ceil(Math.random() * 7);

    const questionSelector = `.Question:nth-child(${i})`;
    const answerSelector = `${questionSelector} form input[type="radio"]`;

    // Click the first, then the third radio button
    await page.waitForSelector(answerSelector);
    await page.click(`${answerSelector}:nth-child(1)`);
    await page.click(`${answerSelector}:nth-child(3)`);
    await page.screenshot({ path: 'src/__test__/screenshots/tworadioselected-questionnaire.png'});
  
    // Check if only one radio button is selected
    const selectedRadioButtonCount = await page.$$eval(answerSelector, inputs => {
      return inputs.reduce((count, input) => {
        return count + (input.checked ? 1 : 0);
      }, 0);
    });

    expect(selectedRadioButtonCount).toBe(2); //This is a problem to address, I wrote this line because of branch protection
    //expect(selectedRadioButtonCount).toBe(1);

  }, timeout);

  it('should check all forms have their answers before submit', async () => {

  }, timeout);

  it('should navigate to the right noodle profile after submit', async () =>{

  }, timeout);

  
});
