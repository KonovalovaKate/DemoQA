export class BasePo{
  open(path) {
    cy.visit(`https://demoqa.com/${path}`);
  }
}