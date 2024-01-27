describe("HTTP req", () => {
  it("GET call report count", () => {
    cy.request("GET", "https://chat-canvas-server-site.vercel.app/report-count")
      .its("status")
      .should("equal", 200);
  });
  it("GET call for all posts", () => {
    cy.request("GET", "https://chat-canvas-server-site.vercel.app/comments")
      .its("status")
      .should("equal", 200);
  });
});
