import { onDatepickerPage } from "../support/page-objects/datePickerPage";
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

  it.only("Should submit Inline and Basic form and select tomorrow date in the calender", () => {
    navigateTo.formLayoutPage();
    onFormLayoutPage.submitInlineFormWithNameAndEmail("Kadir", "test@test.com");
    onFormLayoutPage.submitBasicFormWithEmailAndPassword(
      "test@test.com",
      "password123"
    );
    navigateTo.datePickerPage();
    onDatepickerPage.selectCommonDatepickerDateFromToday(1);
    onDatepickerPage.selectDatepickerWithRangeFromToday(7, 14)
  });
});
