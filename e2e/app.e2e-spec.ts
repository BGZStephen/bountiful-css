import { BountifulCssPage } from './app.po';

describe('bountiful-css App', () => {
  let page: BountifulCssPage;

  beforeEach(() => {
    page = new BountifulCssPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
