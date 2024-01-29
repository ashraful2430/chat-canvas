describe("All User Table", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/dashboard/manage-users");
  });
  it("Check Numbers Rows and Colum", () => {
    cy.get('[data-cy="user-table-row"]').should("have.length", "10");
    cy.get('[data-cy="user-table-head"]>tr>th').should("have.length", "5");
  });
  it("Check Cell data from specific row and colum", () => {
    cy.get('[data-cy="user-table-row"]:nth-child(4)>td:nth-child(3)').contains(
      "kuddus@koli.com"
    );
  });
  it("Read all the row and colum data on the first page", () => {
    cy.get('[data-cy="user-table"]>tbody>tr').each(($row, index, $rows) => {
      cy.wrap($row).within(() => {
        cy.get("td").each(($col, index, $cols) => {
          cy.log($col.text());
        });
      });
    });
  });

  it("Pagination", () => {});
});
