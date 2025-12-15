//npx playwright test tests/form-authentication.spec.js

const { test, expect } = require('@playwright/test');

test.describe('Form Authentication Tests', () => {
  test('should successfully login with valid credentials', async ({ page }) => {
    // Navigate to login page
    console.log('Navigating to login page...');
    await page.goto('https://the-internet.herokuapp.com/login');
    
    // Take screenshot of login page
    console.log('Taking screenshot of login page...');
    await page.screenshot({ 
      path: 'MCP_Demo_Screenshots/01_Form_Authentication/01_login_page.png',
      type: 'png'
    });
    
    // Enter username
    console.log('Entering username...');
    await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
    
    // Enter password
    console.log('Entering password...');
    await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
    
    // Click login button
    console.log('Clicking login button...');
    await page.getByRole('button', { name: /Login/i }).click();
    
    // Wait for navigation and verify URL
    await expect(page).toHaveURL(/.*secure/);	
    
    // Verify success message is visible
    console.log('Verifying success message...');
    const successMessage = page.locator('text=You logged into a secure area!');
    await expect(successMessage).toBeVisible();
    
    // Verify we are on the secure page
    const secureHeading = page.getByRole('heading', { name: 'Secure Area', exact: true });
    await expect(secureHeading).toBeVisible();
    
    // Take screenshot of success page
    console.log('Taking screenshot of success page...');
    await page.screenshot({ 
      path: 'MCP_Demo_Screenshots/01_Form_Authentication/02_login_success.png',
      type: 'png'
    });
    
    console.log('✅ Login test completed successfully!');
  });
});
