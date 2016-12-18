import { browser, element, by } from 'protractor';

export class HallPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hall-root h1')).getText();
  }
}
