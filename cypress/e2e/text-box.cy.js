import { textBoxPo } from "../src/page-objects/text-box.po.js";

Cypress.on("uncaught:exception", () => false);

describe("DemoQA Text Box via POM", () => {
  const data = {
    name: "John Doe",
    email: "john.doe@example.com",
    current: "123 Main St",
    permanent: "742 Evergreen Terrace",
  };

  beforeEach(() => textBoxPo.open("text-box"));

  it("submits valid form", () => {
    textBoxPo.fill(data);
    textBoxPo.submitForm();
    textBoxPo.output.should("be.visible");
    cy.get("#name").should("contain.text", data.name);
    cy.get("#email").should("contain.text", data.email);
    cy.get(".border p#currentAddress, #currentAddress[role='output']").should(
      ($p) => {
        const t = $p.text();
        expect(t).to.include(data.current);
      }
    );
    cy.get(
      ".border p#permanentAddress, #permanentAddress[role='output']"
    ).should(($p) => {
      const t = $p.text();
      expect(t).to.include(data.permanent);
    });
  });

  it("highlights email field in red when invalid", () => {
    const badEmail = "bad@";
    textBoxPo.fill({
      name: data.name,
      current: data.current,
      permanent: data.permanent,
    });
    textBoxPo.email.clear().type(badEmail).blur();

    cy.get("#userEmail").should("match", ":invalid");
  });
});
