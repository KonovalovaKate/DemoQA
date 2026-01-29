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
    textBoxPo.verifyOutput(data);
  });

  it("highlights email field in red when its invalid", () => {
    const badEmail = "bad@";
    textBoxPo.fill({
      name: data.name,
      current: data.current,
      permanent: data.permanent,
    });
    textBoxPo.email.clear().type(badEmail).blur();
    textBoxPo.email.should("match", ":invalid");
  });
});
