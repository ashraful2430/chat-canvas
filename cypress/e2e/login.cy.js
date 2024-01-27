describe("Login", () => {
  it("displays errors for invalid inputs", () => {
    cy.visit("http://localhost:5173/login");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="login-error-email"]').should("exist");
    cy.get('[data-cy="login-pass-error"]').should("exist");
  });

  it("logs in with valid credentials", () => {
    cy.visit("http://localhost:5173/login");
    cy.get('[data-cy="login-email"]').type("cypres@test7.com");
    cy.get('[data-cy="login-pass"]').type("123456Q!A%4d");
    cy.get('[data-cy="login-button"]').click();

    // Confirm successful login
    cy.url().should("include", "http://localhost:5173/");
  });
});
