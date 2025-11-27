import { radioButtonPo } from "../src/page-objects/radio-button.po.js";

Cypress.on("uncaught:exception", () => false);

describe("DemoQA Radio Button via POM - Parametric Test", () => {
  const radioOptions = [
    { label: "Yes", expectedResult: "Yes" },
    { label: "Impressive", expectedResult: "Impressive" },
  ];

  beforeEach(() => {
    radioButtonPo.open("radio-button");
    cy.get("input[type='radio']").should("exist");
  });

  radioOptions.forEach(({ label, expectedResult }) => {
    it(`selects "${label}" radio button and verifies result`, () => {
      radioButtonPo.selectRadioButton(label);
      radioButtonPo.verifyResult(expectedResult);
    });
  });
});

