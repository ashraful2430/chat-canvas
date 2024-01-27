describe("Add Post form", () => {
  it("should submit a post successfully", () => {
    cy.visit("http://localhost:5173/dashboard/add-post"); // Replace with the actual route

    // Fill in the form fields
    cy.get('[data-cy="post-tag"]').select("TechTalk");
    cy.get('[data-cy="post-title"]').type("Test Post");
    cy.get('[data-cy="post-details"]').type("This is a test post");

    // Submit the form
    cy.get(' [data-cy="add-post"]').click();

    // Assert successful submission
    cy.visit("http://localhost:5173/dashboard/my-post");
  });
});
