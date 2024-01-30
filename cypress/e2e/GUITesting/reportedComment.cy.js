describe("Reported Table", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/dashboard/reported");
  });
  it.skip("Checks The row and cols", () => {
    cy.get('[data-cy="reported-table"]').should("have.length", "10");
    cy.get('[data-cy="reported-head"]>tr>th').should("have.length", "7");
  });
  it.skip("Checking single cell data", () => {
    cy.get(
      '[data-cy="main-table"]>tbody>tr:nth-child(1)>td:nth-child(3)'
    ).contains("Hidden Gems: Off the Beaten Path Travel Destinations");
  });
  it.skip("Checking if the button is disabled or not", () => {
    cy.get('[data-cy="reported-comment-button"]').should("be.disabled");
  });
});
