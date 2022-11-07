import { onDatepickerPage } from "../support/page-objects/datePickerPage";
import { onFormLayoutPage } from "../support/page-objects/formLayoutPage";
import { navigateTo } from "../support/page-objects/navigationPage";
import { onSmartTablePage } from "../support/page-objects/smartTablePage";

describe("Test with Page Objects", () => {
  beforeEach("Open application", () => {
    cy.openHomePage();
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
    onDatepickerPage.selectDatepickerWithRangeFromToday(7, 14);
    navigateTo.smartTablePage();
    onSmartTablePage.addNewRecordWithFirstAndLastName("Kadir", "Zukorlic");
    onSmartTablePage.updateAgeByFirstName("Kadir", "30");
    onSmartTablePage.deleteRowByIndex(1);
  });
});
