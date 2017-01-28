import { OmniReplPage } from './app.po';

describe('omni-repl App', function() {
  let page: OmniReplPage;

  beforeEach(() => {
    page = new OmniReplPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
