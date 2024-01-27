describe("Registration", () => {
  it("Register new users", () => {
    cy.visit("http://localhost:5173/register");
    cy.get('[data-cy="reg-name"]').type("John Doe");
    cy.get('[data-cy="reg-email"]').type("cypres@test8.com");
    cy.get('[data-cy="reg-pass"]').type("123456Q!A%4d");
    cy.get('[data-cy="reg-button"]').click();

    cy.url().should("include", "http://localhost:5173/");
  });

  it("displays errors for invalid inputs", () => {
    cy.visit("http://localhost:5173/register");
    cy.get('[data-cy="reg-button"]').click();
    cy.get('[data-cy="reg-error-name"]').should("exist");
    cy.get('[data-cy="reg-error-email"]').should("exist");
    cy.get('[data-cy="reg-error-pass"]').should("exist");
  });
});
