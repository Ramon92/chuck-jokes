import { FrontmenCasePage } from './app.po';

describe('frontmen-case App', () => {
  let page: FrontmenCasePage;

  beforeEach(() => {
    page = new FrontmenCasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
