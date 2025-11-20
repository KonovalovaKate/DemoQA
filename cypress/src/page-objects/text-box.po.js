import {BasePo} from "./base.po.js";
class TextBoxPo extends BasePo {
  get name() { return cy.get("#userName"); }
  get email() { return cy.get("#userEmail"); }
  get current() { return cy.get("#currentAddress"); }
  get permanent() { return cy.get("#permanentAddress"); }
  get submit() { return cy.get("#submit"); }
  
  get output() { return cy.get("#output"); }
  get outputName() { return cy.get("#output #name"); }
  get outputEmail() { return cy.get("#output #email"); }
  get outputCurrentAddress() { 
    return cy.get("#output .border p#currentAddress, #output #currentAddress[role='output']"); 
  }
  get outputPermanentAddress() { 
    return cy.get("#output .border p#permanentAddress, #output #permanentAddress[role='output']"); 
  }

  fill({ name, email, current, permanent }) {
    if (name) this.name.clear().type(name);
    if (email) this.email.clear().type(email);
    if (current) this.current.clear().type(current);
    if (permanent) this.permanent.clear().type(permanent);
  }

  submitForm() { 
    this.submit.click({ force: true }); 
  }

  verifyOutput(expectedData) {
    this.output.should("be.visible");
    if (expectedData.name) {
      this.outputName.should("contain.text", expectedData.name);
    }
    if (expectedData.email) {
      this.outputEmail.should("contain.text", expectedData.email);
    }
    if (expectedData.current) {
      this.outputCurrentAddress.should(($p) => {
        const text = $p.text();
        expect(text).to.include(expectedData.current);
      });
    }
    if (expectedData.permanent) {
      this.outputPermanentAddress.should(($p) => {
        const text = $p.text();
        expect(text).to.include(expectedData.permanent);
      });
    }
  }
}
export const textBoxPo = new TextBoxPo();