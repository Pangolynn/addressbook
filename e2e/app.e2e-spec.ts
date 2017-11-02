import { AppWebAlphaPage } from './app.po';

describe('app-web-alpha App', () => {
  let page: AppWebAlphaPage;

  beforeEach(() => {
    page = new AppWebAlphaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
