describe("Checking info in card", () => {
  it("Info should exist in card", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="post-card-title"]').should("exist");
    cy.get('[data-cy="post-card-details"]').should("exist");
    cy.get('[data-cy="post-card-image"]').should("exist");
    cy.get('[data-cy="post-card-name"]').should("exist");
    cy.get('[data-cy="post-card-email"]').should("exist");
    cy.get('[data-cy="post-card-date"]').should("exist");
    cy.get('[data-cy="post-card-comment"]').should("exist");
    cy.get('[data-cy="post-card-upvote"]').should("exist");
    cy.get('[data-cy="post-card-downvote"]').should("exist");
  });
});
