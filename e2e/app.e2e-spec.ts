import { NgBookInventoryAppPage } from './app.po';

describe('ng-book-inventory-app App', function() {
  let page: NgBookInventoryAppPage;

  beforeEach(() => {
    page = new NgBookInventoryAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
