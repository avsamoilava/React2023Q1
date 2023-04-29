describe('menu', () => {
  it('contains input', () => {
    cy.visit('/');
    cy.get('input').should('have.value', '');
  });
  it('user can type in input', () => {
    cy.visit('/');
    cy.get('input[type="search').type('avadakedavra').should('have.value', 'avadakedavra');
  });
  it('modal-card works', () => {
    cy.visit('/');
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
