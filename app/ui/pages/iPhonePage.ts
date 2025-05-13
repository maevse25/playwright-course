import { BasePage } from './BasePage';
export class iPhonePage extends BasePage {

{
  constructor(page: Page) {
    this.locators = new IPhoneLocators(page);

    console.log('BasePage constructor');
  }

  init() {
    console.log('BasePage init');
  }
}

class IPhoneLocators {
    iPhoneIcon: Locator;

    this.page = page;
    this.iphoneIcon = page.locator('text=IPhone');

  constructor(page: Page) {
    console.log('IPhoneLocators constructor');
  }

  init() {
    console.log('IPhoneLocators init');
  }
}