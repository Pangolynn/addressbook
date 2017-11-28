import { AddressbookclientPage } from './app.po';

describe('addressbookclient App', () => {
  let page: AddressbookclientPage;

  beforeEach(() => {
    page = new AddressbookclientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
