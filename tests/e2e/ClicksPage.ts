import { Page } from 'puppeteer';
import { TestElements } from '../../stories/TestElements';

export class ClicksPage {
  constructor(private page: Page) {}

  public async open() {
    await this.page.goto(
      'http://localhost:6006/iframe.html?selectedKind=Foco&selectedStory=clicks_and_focuses'
    );
  }

  public getClicksStatus(): Promise<string> {
    return this.page.$eval(
      getSelectorByTestID(TestElements.ClickStatusNode),
      node => node.textContent
    );
  }

  public getFocusStatus(): Promise<string> {
    return this.page.$eval(
      getSelectorByTestID(TestElements.FocusStatusNode),
      node => node.textContent
    );
  }

  public clickInside() {
    return this.page.click(
      `${getSelectorByTestID(TestElements.InnerNode)} button`
    );
  }

  public clickOutside() {
    return this.page.click(
      `${getSelectorByTestID(TestElements.OuterNode)} button`
    );
  }

  public focusInside() {
    return this.page.focus(
      `${getSelectorByTestID(TestElements.InnerNode)} button`
    );
  }

  public focusOutside() {
    return this.page.focus(
      `${getSelectorByTestID(TestElements.OuterNode)} button`
    );
  }
}

function getSelectorByTestID(testID: string) {
  return `[data-testID=${testID}]`;
}
