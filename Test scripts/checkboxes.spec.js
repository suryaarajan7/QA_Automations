// npx playwright test tests/checkboxes.spec.js

const { test, expect } = require('@playwright/test');
 
test.describe('Checkboxes Tests', () => {
  test('should successfully check and uncheck checkboxes', async ({ page }) => {
    // Navigate to checkboxes page
    console.log('Navigating to checkboxes page...');
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
   
    // Take screenshot of initial state
    console.log('Taking screenshot of initial state...');
    await page.screenshot({
      path: 'MCP_Demo_Screenshots/03_Checkboxes/01_initial_state.png',
      type: 'png'
    });
   
    // Get both checkboxes
    const checkboxes = page.locator('input[type="checkbox"]');
    const checkbox1 = checkboxes.nth(0);
    const checkbox2 = checkboxes.nth(1);
   
    // Verify initial states
    await expect(checkbox1).not.toBeChecked();
    await expect(checkbox2).toBeChecked();
    console.log('✓ Initial states verified: checkbox 1 unchecked, checkbox 2 checked');
   
    // Check checkbox 1
    console.log('Checking checkbox 1...');
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();
    console.log('✓ Checkbox 1 is now checked');
   
    // Take screenshot after checking checkbox 1
    console.log('Taking screenshot after checking checkbox 1...');
    await page.screenshot({
      path: 'MCP_Demo_Screenshots/03_Checkboxes/02_checkbox1_checked.png',
      type: 'png'
    });
   
    // Uncheck checkbox 2
    console.log('Unchecking checkbox 2...');
    await checkbox2.uncheck();
    await expect(checkbox2).not.toBeChecked();
    console.log('✓ Checkbox 2 is now unchecked');
   
    // Take screenshot after unchecking checkbox 2
    console.log('Taking screenshot after unchecking checkbox 2...');
    await page.screenshot({
      path: 'MCP_Demo_Screenshots/03_Checkboxes/03_checkbox2_unchecked.png',
      type: 'png'
    });
   
    // Toggle both checkboxes back
    console.log('Toggling both checkboxes...');
    await checkbox1.uncheck();
    await checkbox2.check();
   
    // Verify final states match initial states
    await expect(checkbox1).not.toBeChecked();
    await expect(checkbox2).toBeChecked();
    console.log('✓ Checkboxes toggled back to initial states');
   
    // Take final screenshot
    console.log('Taking final screenshot...');
    await page.screenshot({
      path: 'MCP_Demo_Screenshots/03_Checkboxes/04_final_state.png',
      type: 'png'
    });
   
    console.log('✅ Checkboxes test completed successfully!');
  });
});
