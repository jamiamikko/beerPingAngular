import { BeerPingAngularPage } from './app.po';

describe('beer-ping-angular App', () => {
  let page: BeerPingAngularPage;

  beforeEach(() => {
    page = new BeerPingAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
