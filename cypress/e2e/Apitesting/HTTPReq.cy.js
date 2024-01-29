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

  it("post method", () => {
    cy.request({
      method: "POST",
      url: "https://chat-canvas-server-site.vercel.app/comments",
      body: {
        comment: "this is a good post",
        postId: "6563100c96a9c250d7538196",
        commentUser: "ASHRAFUL ISLAM ASHIK",
        commentEmail: "www.savage582@gmail.com",
      },
    })
      .its("status")
      .should("equal", 200);
  });

  it("PATCH call", () => {
    cy.request({
      method: "PATCH",
      url: "https://chat-canvas-server-site.vercel.app/posts/upvote/65992740400ed26212828982",
      body: {},
    })
      .its("status")
      .should("equal", 200);
  });

  it("DELETE call", () => {
    cy.request({
      method: "DELETE",
      url: "https://chat-canvas-server-site.vercel.app/posts/65b52f721a282f026c968293",
    })
      .its("status")
      .should("equal", 200);
  });
});
