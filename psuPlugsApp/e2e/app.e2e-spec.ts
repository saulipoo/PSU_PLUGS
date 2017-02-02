import { PsuPlugsAppPage } from './app.po';

describe('psu-plugs-app App', function() {
  let page: PsuPlugsAppPage;

  beforeEach(() => {
    page = new PsuPlugsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
