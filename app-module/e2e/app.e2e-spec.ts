import { AppModulePage } from './app.po';

describe('app-module App', () => {
  let page: AppModulePage;

  beforeEach(() => {
    page = new AppModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
