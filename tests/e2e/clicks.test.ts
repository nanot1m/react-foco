import puppeteer, { Browser } from 'puppeteer';
import { ClicksPage } from './ClicksPage';
import { ComponentActions } from '../../stories/index.stories';

let browser: Browser;
let clicksPage: ClicksPage;

beforeAll(async () => {
  browser = await puppeteer.launch();
  let page = await browser.newPage();
  clicksPage = new ClicksPage(page);
  await clicksPage.open();
});

afterAll(async () => {
  await browser.close();
});

test('default status', async () => {
  expect(await clicksPage.getClicksStatus()).toBe(ComponentActions.None);
});

test('click outside', async () => {
  await clicksPage.clickOutside();
  expect(await clicksPage.getClicksStatus()).toBe(
    ComponentActions.ClickOutside
  );
});

test('click inside', async () => {
  await clicksPage.clickInside();
  expect(await clicksPage.getClicksStatus()).toBe(ComponentActions.ClickInside);
});

test('focus outside', async () => {
  await clicksPage.focusOutside();
  expect(await clicksPage.getFocusStatus()).toBe(ComponentActions.FocusOutside);
});

test('focus inside', async () => {
  await clicksPage.focusInside();
  expect(await clicksPage.getFocusStatus()).toBe(ComponentActions.FocusInside);
});
