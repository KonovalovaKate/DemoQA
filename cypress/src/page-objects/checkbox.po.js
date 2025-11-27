import {BasePo} from "./base.po.js";

class CheckboxPo extends BasePo {
  get treeNode() { return cy.get("#tree-node"); }
  get result() { return cy.get("#result"); }
  get resultText() { return cy.get("#result .text-success"); }
  get collapseButtons() { return cy.get(".rct-collapse-btn"); }

  getCheckboxLabel(label) {
    const nodeId = this.getNodeId(label);
    return cy.get(`label[for="tree-node-${nodeId}"]`);
  }

  getCheckbox(label) {
    const nodeId = this.getNodeId(label);
    return cy.get(`label[for="tree-node-${nodeId}"] span.rct-checkbox`);
  }

  getCheckIcon(label) {
    const nodeId = this.getNodeId(label);
    return cy.get(`label[for="tree-node-${nodeId}"] .rct-icon-check`);
  }

  getNodeId(label) {
    return label.toLowerCase().replace(/\s+/g, "-");
  }

  getTreeNode(label) {
    return cy.contains(".rct-node", label);
  }

  check(label) {
    this.getCheckboxLabel(label).find("span.rct-checkbox").click({ force: true });
  }

  verifyChecked(label) {
    this.getCheckIcon(label).should("exist");
  }

  verifyResult(expectedItems) {
    this.result.should("be.visible");
    if (Array.isArray(expectedItems)) {
      expectedItems.forEach(item => {
        this.resultText.should("contain.text", item.toLowerCase());
      });
    } else {
      this.resultText.should("contain.text", expectedItems.toLowerCase());
    }
  }

  expandFirst() {
    this.collapseButtons.first().click();
  }

  expandNode(label) {
    this.getTreeNode(label).find(".rct-collapse-btn").click();
  }
}

export const checkboxPo = new CheckboxPo();

