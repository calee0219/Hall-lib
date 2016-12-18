import { HallPage } from './app.po';

describe('hall App', function() {
  let page: HallPage;

  beforeEach(() => {
    page = new HallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hall works!');
  });
});
