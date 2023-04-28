describe('menu', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('contains form', () => {
    cy.get('button').should('have.text', 'Submit');
  });

  it('not create empty card', () => {
    cy.get('button[type=submit]').click();
    cy.get('.form-card').should('not.exist');
    cy.get('.form__error').should('have.length', 6);
  });

  it('not create card with invalid name', () => {
    const submit = cy.get('button[type=submit]');
    const input = cy.get('[name=userName]');
    const errorMessage =
      'enter correct name; first and last name must start with a capital letter and contain at least three characters';
    input.type('aaa');
    submit.click();
    cy.contains(errorMessage).should('exist');
    input.clear();

    input.type('aaa aaa');
    submit.click();
    cy.contains(errorMessage).should('exist');
    input.clear();

    input.type('Aaa aaa');
    submit.click();
    cy.contains(errorMessage).should('exist');
    input.clear();

    input.type('aaa Aaa');
    submit.click();
    cy.contains(errorMessage).should('exist');
    input.clear();

    input.type('Aa Aa');
    submit.click();
    cy.contains(errorMessage).should('exist');
    input.clear();

    input.type('Aaa Aaa');
    submit.click();
    cy.contains(errorMessage).should('not.exist');
    input.clear();
  });

  it('create card with valid data', () => {
    cy.get('[name=userName]').type('Ivan Ivanov');
    cy.get('select[name=country]').select('belarus');
    cy.get('[name=date]').type('2010-01-12');
    cy.get('[value=male]').click();
    cy.get('[type=file]').selectFile('./cypress/fixtures/test.jpg');
    cy.get('[name=agreement]').check();
    cy.get('button[type=submit]').click();
    cy.get('.form__error').should('not.exist');
    cy.get('.form__message').should('exist');
    cy.get('.form-card').should('exist').should('have.length', 1);
  });
});
