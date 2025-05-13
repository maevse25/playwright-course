import { test, expect, Page} from '@playwright/test';

test.describe('Home', () => {
    test('Open HomePage and verify title', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com/');
        // verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })
    test('Open About page and verify title', async ({ page }) => {
        // open url
         await page.goto('https://practice.sdetunicorns.com/about');
        // verify title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })
    test('Click Get Started button using CSS Selector', async ({ page }) => {
        // open home page
        await page.goto('https://practice.sdetunicorns.com/');

        // click on Get Started button using CSS Selector
        // await page.click('button#get-started');
        await page.locator('#get-started').click();

        // verify the URL
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');
    })
    
    test('Verify having text is visible using text selector', async ({ page }) => {
        // open home page
        await page.goto('https://practice.sdetunicorns.com/');

        // find the element using text selector
        const headingText = page.locator('text=Think different. Make different.');

        // verify the text is visible
        await expect(headingText).toBeVisible();
    })

    test('Verify Home link is enabled using TEXT and CSS selector', async ({ page }) => {
        // open home page
        await page.goto('https://practice.sdetunicorns.com/');

        // find the element using text selector
        const homeText = await page.locator('#primary-menu:has-text("Home")');

        // verify the homeText is enabled
        await expect(homeText).toBeVisible();

    })
})
