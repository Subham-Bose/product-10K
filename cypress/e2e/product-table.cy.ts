describe('Product Page E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should load a form screen', () => {
    cy.visit('');
    cy.contains('Form').click();
    cy.contains('Product Form').should('be.visible');
  });

  it('should load product list', () => {
    cy.visit('/product');
    cy.contains('Product').click();
    cy.contains('Product List').should('be.visible');
    cy.contains('Running Shoes', { timeout: 15000 }).should('be.visible');
  });

  it('should navigate to Order page', () => {
    cy.contains('Order').click();
    cy.url().should('include', '/order');
    cy.contains('Order List').should('be.visible');
  });
});
