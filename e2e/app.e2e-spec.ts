import { Karti4kaPage } from './app.po';

describe('karti4ka App', function() {
  let page: Karti4kaPage;

  beforeEach(() => {
    page = new Karti4kaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
