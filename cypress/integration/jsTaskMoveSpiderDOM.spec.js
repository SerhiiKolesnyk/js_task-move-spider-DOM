'use strict';

describe('Spider', () => {
  beforeEach('Open site', () => {
    cy.visit('');
  });

  it('spider should go down left', () => {
    cy.get('.wall').click('bottomLeft');
    cy.get('.spider').should(($spider) => {
      const spider = $spider.get(0);
      const spiderTop = spider.offsetTop;
      const spiderLeft = spider.offsetLeft;

      expect(spiderTop).to.equal(350);
      expect(spiderLeft).to.equal(0);
    });
  });

  it('spider should go up right', () => {
    cy.get('.wall').click('topRight');
    cy.get('.spider').should(($spider) => {
      const spider = $spider.get(0);
      const spiderTop = spider.offsetTop;
      const spiderLeft = spider.offsetLeft;

      expect(spiderTop).to.equal(0);
      expect(spiderLeft).to.equal(350);
    });
  });

  it('spider should go up', () => {
    cy.get('.wall').click('top');
    cy.get('.spider').should(($spider) => {
      const spider = $spider.get(0);
      const spiderTop = spider.offsetTop;
      const spiderLeft = spider.offsetLeft;

      expect(spiderTop).to.equal(0);
      expect(spiderLeft).to.equal(175);
    });
  });

  it('spider should go to the center', () => {
    cy.get('.wall').click('center');
    cy.get('.spider').should(($spider) => {
      const spider = $spider.get(0);
      const spiderTop = spider.offsetTop;
      const spiderLeft = spider.offsetLeft;

      expect(spiderTop).to.equal(175);
      expect(spiderLeft).to.equal(175);
    });
  });

  it('spider should go down right', () => {
    cy.get('.wall').click('bottomRight');
    cy.get('.spider').should(($spider) => {
      const spider = $spider.get(0);
      const spiderTop = spider.offsetTop;
      const spiderLeft = spider.offsetLeft;

      expect(spiderTop).to.equal(350);
      expect(spiderLeft).to.equal(350);
    });
  });

  it(`spider should not move on 
      the click out of the wall`, () => {
    cy.get('body').click('top');
    cy.get('.spider').should(($spider) => {
      const spider = $spider.get(0);
      const spiderTop = spider.offsetTop;
      const spiderLeft = spider.offsetLeft;

      expect(spiderTop).to.equal(0);
      expect(spiderLeft).to.equal(0);
    });
  });
});
