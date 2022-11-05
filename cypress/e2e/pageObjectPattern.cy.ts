import { onFormLayoutPage } from "../support/page-objects/formLayoutPage";
import { navigateTo } from "../support/page-objects/navigationPage";

describe("Test with Page Objects", () => {
  beforeEach("Open application", () => {
    cy.visit("/");
  });

  it("Verify navigation actross the pages", () => {
    navigateTo.formLayoutPage();
    navigateTo.datePickerPage();
    navigateTo.smartTablePage();
    navigateTo.tooltipPage();
    navigateTo.toasterPage();
  });

  it("Should submit Inline and Basic form and select tomorrow date in the calender", () => {
    navigateTo.formLayoutPage();
    onFormLayoutPage.submitInlineFormWithNameAndEmail('Kadir', 'test@test.com');
  });
});
