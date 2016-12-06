import { Day4RoutingPage } from './app.po';

describe('day4-routing App', function() {
  let page: Day4RoutingPage;

  beforeEach(() => {
    page = new Day4RoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
