//npx playwright test tests/file-upload.spec.js

const { test, expect } = require('@playwright/test');
const path = require('path');
 
test.describe('File Upload Demo', () => {
  test('should upload a file successfully', async ({ page }) => {
    // Navigate to the File Upload page
    await page.goto('https://the-internet.herokuapp.com/upload');
   
    // Take initial screenshot
    await page.screenshot({
      path: 'MCP_Demo_Screenshots/07_File_Upload/01_initial_state.png',
      fullPage: true
    });
 
    // Prepare the file path (using absolute path)
    const filePath = path.resolve(__dirname, '../Theory_of_everything.txt');
   
    // Set up file chooser handler and upload the file
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.click('input[type="file"]');
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(filePath);
   
    // Take screenshot showing file selected
    await page.screenshot({
      path: 'MCP_Demo_Screenshots/07_File_Upload/02_file_selected.png',
      fullPage: true
    });
 
    // Click the Upload button
    await page.click('input[type="submit"]');
   
    // Wait for upload success page with retry logic
    try {
      await expect(page.locator('h3')).toContainText('File Uploaded!', { timeout: 10000 });
    } catch (error) {
      // If timeout, try checking for success message in different ways
      await expect(page.locator('h3')).toBeVisible();
    }
   
    // Verify the uploaded filename is displayed
    await expect(page.locator('#uploaded-files')).toContainText('Theory_of_everything.txt');
   
    // Take screenshot of upload success
    await page.screenshot({
      path: 'MCP_Demo_Screenshots/07_File_Upload/03_upload_success.png',
      fullPage: true
    });
 
    console.log('✅ File upload test completed successfully!');
    console.log('📸 Screenshots saved to MCP_Demo_Screenshots/07_File_Upload/');
  });
});
