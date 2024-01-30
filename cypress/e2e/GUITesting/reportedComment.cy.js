describe("Reported Table", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/dashboard/reported");
  });
  it.skip("Checks The row and cols", () => {
    cy.get('[data-cy="reported-table"]').should("have.length", "10");
    cy.get('[data-cy="reported-head"]>tr>th').should("have.length", "7");
  });
  it("Checking single cell data", () => {
    cy.get(
      '[data-cy="main-table"]>tbody>tr:nth-child(1)>td:nth-child(2)'
    ).contains("ASHRAFUL ISLAM ASHIK");
  });
});
