describe("Add Post form", () => {
  it("should submit a post successfully", () => {
    cy.visit("http://localhost:5173/dashboard/add-post");

    cy.get('[data-cy="post-tag"]').select("TechTalk");
    cy.get('[data-cy="post-title"]').type("Test Post");
    cy.get('[data-cy="post-details"]').type("This is a test post");

    cy.get(' [data-cy="add-post"]').click();

    cy.visit("http://localhost:5173/dashboard/my-post");
  });
});
