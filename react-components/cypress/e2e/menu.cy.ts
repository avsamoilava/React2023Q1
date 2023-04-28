describe('menu', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('contains menu', () => {
    cy.get('.header-nav__list li').should('have.length', 3);
    cy.get('.header-nav__list li a').first().should('have.text', 'Main');
    cy.get('.header-nav__list li a').last().should('have.text', 'Form');
  });
  it('should switch pages', () => {
    cy.contains('About us').click();
    cy.get('h1').should('have.text', 'About page');
    cy.url().should('include', '/about');

    cy.contains('Form').click();
    cy.get('button[type=submit]').should('have.text', 'Submit');
    cy.url().should('include', '/form');

    cy.contains('Main').click();
    cy.get('input[type=search]').should('exist');
    cy.url().should('include', '/');
  });
});
