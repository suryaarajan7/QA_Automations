//npx playwright test tests/dropdown.spec.js

const { test, expect } = require('@playwright/test');
 
test.describe('Dropdown Tests', () => {
  test('should successfully select different dropdown options', async ({ page }) => {
    // Navigate to dropdown page
    console.log('Navigating to dropdown page...');
    await page.goto('https://the-internet.herokuapp.com/dropdown');
   
    // Take screenshot of initial state
    console.log('Taking screenshot of initial state...');
    await page.screenshot({
      path: 'MCP_Demo_Screenshots/02_Dropdown/01_initial_state.png',
      type: 'png'
    });
   
    // Verify initial state - default option should be selected
    const dropdown = page.locator('#dropdown');
    await expect(dropdown).toBeVisible();
   
    // Select Option 1
    console.log('Selecting Option 1...');
    await dropdown.selectOption('1');
   
    // Verify Option 1 is selected
    const selectedValue1 = await dropdown.inputValue();
    expect(selectedValue1).toBe('1');
    console.log('✓ Option 1 selected successfully');
   
    // Take screenshot of Option 1 selected
    console.log('Taking screenshot of Option 1...');
    await page.screenshot({
      path: 'MCP_Demo_Screenshots/02_Dropdown/02_option1_selected.png',
      type: 'png'
    });
   
    // Select Option 2
    console.log('Selecting Option 2...');
    await dropdown.selectOption('2');
   
    // Verify Option 2 is selected
    const selectedValue2 = await dropdown.inputValue();
    expect(selectedValue2).toBe('2');
    console.log('✓ Option 2 selected successfully');
   
    // Take screenshot of Option 2 selected
    console.log('Taking screenshot of Option 2...');
    await page.screenshot({
      path: 'MCP_Demo_Screenshots/02_Dropdown/03_option2_selected.png',
      type: 'png'
    });
   
    console.log('✅ Dropdown test completed successfully!');
  });
});
