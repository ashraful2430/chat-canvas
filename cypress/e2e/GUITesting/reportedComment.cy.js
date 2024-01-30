describe("Reported Table", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/dashboard/reported");
  });
  it("Checks The row and cols", () => {
    cy.get('[data-cy="reported-table"]').should("have.length", "10");
    cy.get('[data-cy="reported-head"]>tr>th').should("have.length", "7");
  });
});
