import { test, expect } from '@playwright/test';

test('Creating a message', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByTestId('messageText').click();
  await page.getByTestId('messageText').fill('New message');
  await page.getByTestId('sendButton').click();
  await expect(page.getByTestId('messageText')).toHaveText('');
  await expect(page.getByTestId('messageList')).toHaveText('New message');
});