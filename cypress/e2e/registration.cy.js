describe("template spec", () => {
  it("registers a new user", () => {
    cy.visit("http://localhost:5173/register");
    cy.get("#reg-welcome")
      .should("exist")
      .should("have.text", "Welcome To Our website!");

    cy.get("#reg-name").type("John Doe");
    cy.get("#reg-email").type("john.doe@example.com");
    cy.get("#reg-pass").type("yourSecurePassword");
    cy.get("#reg-button").click();
    cy.url().should("include", "http://localhost:5173/");
  });
});
