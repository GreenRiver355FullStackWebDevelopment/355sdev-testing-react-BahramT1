describe('adds a new restaurant', () => {
  // run before every test
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('fills the form and sees the new card', () => {
    //type into each input
    cy.get('[data-cy=input-name]').type('Pizza House');
    cy.get('[data-cy=input-address]').type('123r PL NE, Seattle, USA');
    cy.get('[data-cy=input-phone]').type('111-123-1234');
    cy.get('[data-cy=input-cuisine]').type('Italian');
    cy.get('[data-cy=input-rating]').type('5');

    //submit
    cy.get('[data-cy=form-submit]').submit();

    //assert the new card appears with the right details
    cy.get('[data-cy=restaurant-Pizza\\ House] ul').within(() => {
      cy.contains('li', '123r PL NE, Seattle, USA').should('be.visible');
      cy.contains('li', '111-123-1234').should('be.visible');
      cy.contains('li', 'Italian').should('be.visible');
      cy.contains('li', '5').should('be.visible');
    });

  });
});
