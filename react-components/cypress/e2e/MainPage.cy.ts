describe('menu', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('contains input', () => {
    cy.get('input').should('have.value', '');
  });
  it('user can type in input', () => {
    cy.get('input[type="search').type('avadakedavra').should('have.value', 'avadakedavra');
  });
  it('search works', () => {
    const text = 'Rick';
    cy.get('input[type="search').type(`${text}{enter}`).should('have.value', text);
    cy.get('.card__row_name').each(($el) => {
      expect($el).to.contain('Rick');
    });
  });
  it('modal-card works', () => {
    cy.get('.catalog__card').first().click();
    cy.get('.modal-card').should('exist');

    cy.get('.catalog__card')
      .get('.card__row_name>span')
      .first()
      .then(($el1) => {
        cy.get('.card__name').then(($el2) => {
          expect($el1.text()).to.eq($el2.text());
        });
      });

    cy.get('[data-testid=close-btn]').click();
    cy.get('.modal-card').should('not.exist');
  });
});
