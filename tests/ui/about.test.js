const { test, expect } = require('@playwright/test');

test('Check about page', async({ page }) => {
    await page.goto('https://borkou17-exam.onrender.com/about');
    const heading = await page.$('h1');
    const text = await heading.textContent();
    expect(text).toBe('About');
});
