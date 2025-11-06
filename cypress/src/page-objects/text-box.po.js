import {BasePo} from "./base.po.js";
class TextBoxPo extends BasePo {
  get name() { return cy.get("#userName"); }
  get email() { return cy.get("#userEmail"); }
  get current() { return cy.get("#currentAddress"); }
  get permanent() { return cy.get("#permanentAddress"); }
  get submit() { return cy.get("#submit"); }
  get output() { return cy.get("#output"); }
  fill({ name, email, current, permanent }) {
    if (name) this.name.clear().type(name);
    if (email) this.email.clear().type(email);
    if (current) this.current.clear().type(current);
    if (permanent) this.permanent.clear().type(permanent);
  }
  submitForm() { this.submit.click({ force: true }); }
}
export const textBoxPo = new TextBoxPo();