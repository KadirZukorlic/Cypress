export class FormLayoutPage {
  submitInlineFormWithNameAndEmail() {
    cy.contains("nb-card", "Inline form")
      .find("form")
      .then((form) => {
        cy.wrap(form).find('[placeholder="Jane Doe"]').type("test@test.com");
        cy.wrap(form).find('[placeholder="Email"]').type("test@test.com");
        cy.wrap(form).find('[type="checkbox]').check({ force: true });
        cy.wrap(form).submit()
      });
  }
}

export const onFormLayoutPage = new FormLayoutPage();
