import { iPhonePage } from "./iPhonePage";

export class PageManager {
    iPhonePage: iPhonePage;

    constructor(page: Page) {
        this.iPhonePage = new iPhonePage(page);
        console.log('PageManager constructor');
    }
    init() {
        console.log('PageManager init');
    }