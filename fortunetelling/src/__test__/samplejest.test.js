describe('Basic exploration of jest testing', () => {
  // First, visit the lab 8 website
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500/fortunetelling/index.html');//replace with published site's url
  });

  it('Initial Home Page - Navigation', async () => {
    console.log('Navigate to Questionnaire...');
    // Query select all of the <product-item> elements and return the length of that array
    await page.click('a[href="src/pages/questionnaire.html"]');
    expect(page.url()).toBe('http://127.0.0.1:5500/fortunetelling/src/pages/questionnaire.html');
  });
  
});
  