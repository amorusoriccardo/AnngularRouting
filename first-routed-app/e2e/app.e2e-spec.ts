import { FirstRoutedAppPage } from './app.po';

describe('first-routed-app App', function() {
  let page: FirstRoutedAppPage;

  beforeEach(() => {
    page = new FirstRoutedAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
