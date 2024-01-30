describe("All User Table", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/dashboard/manage-users");
  });
  it("Check Numbers Rows and Colum", () => {
    cy.get('[data-cy="user-table-row"]').should("have.length", "10");
    cy.get('[data-cy="user-table-head"]>tr>th').should("have.length", "5");
  });
  it("Check Cell data from specific row and colum", () => {
    cy.get('[data-cy="user-table-row"]:nth-child(5)>td:nth-child(4)').contains(
      "Normal member"
    );
  });
  it("Read all the row and colum data on the first page", () => {
    cy.get('[data-cy="user-table-row"]').each(($row, index, $rows) => {
      cy.wrap($row).within(() => {
        cy.get("td:nth-child(2)").each(($col, index, $cols) => {
          cy.log($col.text());
        });
      });
    });
  });

  it.skip("Pagination", () => {
    // getting all the pages number
    /* let totalPages;
    cy.get('[data-cy="pagination"]').then((e) => {
      let myText = e.text();
      totalPages = myText.substring(
        myText.indexOf("v") + 1,
        myText.indexOf("N")
      );
      console.log(myText);
      console.log("total number of pages=======>", totalPages);
    });*/

    // reading the data of 5 pages
    let totalPages = 4;
    for (let p = 1; (p = totalPages); p++) {
      if (totalPages > 1) {
        cy.log("active page" + p);
        cy.get("#user-table-button:nth-child(" + p + ")").click();
        cy.wait(3000);
        cy.get('[data-cy="user-table"]>tbody>tr').each(($row, index, $rows) => {
          cy.wrap($row).within(() => {
            cy.get("td:nth-child(3)").then((e) => {
              cy.log(e.text());
            });
          });
        });
      }
    }
  });
});
