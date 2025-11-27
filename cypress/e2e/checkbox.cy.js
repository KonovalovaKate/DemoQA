import { checkboxPo } from "../src/page-objects/checkbox.po.js";

Cypress.on("uncaught:exception", () => false);

describe("DemoQA Check Box – Home", () => {
  beforeEach(() => {
    checkboxPo.open("checkbox");
    checkboxPo.treeNode.should("be.visible").scrollIntoView();
  });

  it("checks Home and verifies result", () => {
    checkboxPo.check("Home");
    checkboxPo.verifyChecked("Home");
    checkboxPo.verifyResult("Home");
  });

  it("expands tree and selects Notes checkbox", () => {
    checkboxPo.expandFirst();
    checkboxPo.expandNode("Desktop");
    checkboxPo.check("Notes");
    checkboxPo.verifyResult("notes");
  });
});

