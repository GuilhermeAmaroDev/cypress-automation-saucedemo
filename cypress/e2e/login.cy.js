describe('Login SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it.only('Login com erro!', () => {
    cy.login('qwewq', '1223');

    cy.get('.error-button').should('be.visible');
  })

  it('Login com sucesso!', () => {
    cy.login('standard_user', 'secret_sauce')
  })
  
})