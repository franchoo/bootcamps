import { RutasViernesPage } from './app.po';

describe('rutas-viernes App', function() {
  let page: RutasViernesPage;

  beforeEach(() => {
    page = new RutasViernesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
