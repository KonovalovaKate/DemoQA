import {BasePo} from "./base.po.js";

class RadioButtonPo extends BasePo {
  get yesRadio() { return cy.get("#yesRadio"); }
  get impressiveRadio() { return cy.get("#impressiveRadio"); }
  get noRadio() { return cy.get("#noRadio"); }
  get result() { return cy.get(".mt-3"); }
  get resultText() { return cy.get(".text-success"); }

  selectRadioButton(label) {
    const labelMap = {
      "Yes": () => cy.get("label[for='yesRadio']").click(),
      "Impressive": () => cy.get("label[for='impressiveRadio']").click(),
      "No": () => cy.get("label[for='noRadio']").click(),
    };
    
    if (labelMap[label]) {
      labelMap[label]();
    } else {
      cy.contains("label", label).click();
    }
  }

  getRadioButton(label) {
    const radioMap = {
      "Yes": this.yesRadio,
      "Impressive": this.impressiveRadio,
      "No": this.noRadio,
    };
    
    return radioMap[label] || cy.contains("label", label).find("input[type='radio']");
  }

  verifySelected(label) {
    this.getRadioButton(label).should("be.checked");
  }

  verifyResult(expectedText) {
    this.result.should("be.visible");
    this.resultText.should("contain.text", expectedText);
  }
}

export const radioButtonPo = new RadioButtonPo();

