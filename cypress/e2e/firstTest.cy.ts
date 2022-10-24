/// <reference types="cypress" />

describe("Suit", () => {
  it("finding elements", () => {
    cy.visit("/"); // slash / because we defined baseUrl in config file
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    // find elements
    // by Tag Name
    cy.get("input");

    // by ID
    cy.get("#inputEmail1");

    // by class name
    cy.get(".input-full-width");

    // by attribute name
    cy.get("[placeholder]");

    // by attribute name and value
    cy.get('[placeholder="Email"]');

    // by class - value have to provide entire value from class
    cy.get('[class="input-full-width size-medium shape-rectangle"]');

    // by Tag name and Attribute with value
    cy.get('input[placeholder="Email"]');

    // by two different attributes
    cy.get('[placeholder="Email"][fullwidth]');

    // by Tag name, attribute with value, id and class name
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');

    // the most recommended way by cypress
    cy.get('[data-cy="imputEmail1"]');
  });

  it("Second one", () => {
    cy.visit("/"); // slash / because we defined baseUrl in config file
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.get('[data-cy="signInButton"]');

    cy.contains("Sign in");

    cy.contains('[status="warning"]', "Sign in");

    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form")
      .find("nb-checkbox")
      .click();

    cy.contains("nb-card", "Horizontal form").find('[type="email"]');
  });

  it("then and wrap methods", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    // cy.contains("nb-card", "Using the Grid")
    //   .find('[for="inputEmail1"]')
    //   .should("contain", "Email");

    // cy.contains("nb-card", "Using the Grid")
    //   .find('[for="inputPassword2"]')
    //   .should("contain", "Password");

    // cy.contains("nb-card", "Basic form")
    //   .find('[for="exampleInputEmail1"')
    //   .should("contain", "Email address");

    // cy.contains("nb-card", "Basic Form")
    //   .find('[for="exampleInputPassword1"]')
    //   .should("contain", "Password");

    // Selenium

    // const firstForm = cy.contains("nb-card", "Using the Grid");
    // const secondForm = cy.contains("nb-card", "Basic form");

    // firstForm
    //   .find('[for="exampleInputEmail1"]')
    //   .should("contain", "Email address");
    // secondForm
    //   .find('[for="exampleInputPassword1"]')
    //   .should("contain", "Password");

    // doesn't work in cypress because cypress is synchronus

    // Cypress style

    cy.contains("nb-card", "Using the Grid").then((firstForm) => {
      const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text();
      const passwordLabelFirst = firstForm
        .find('[for="inputPassword2"]')
        .text();
      expect(emailLabelFirst).to.equal("Email");
      expect(passwordLabelFirst).to.equal("Password");

      cy.contains("nb-card", "Basic form").then((secondForm) => {
        const emailLabelSecond = secondForm
          .find('[for="exampleInputEmail1"]')
          .text();

        expect(emailLabelFirst).not.to.equal(emailLabelSecond);
      });

      cy.contains("nb-card", "Basic form").then((secondForm) => {
        const passwordLabelSecond = secondForm
          .find('[for="exampleInputPassword1"]')
          .text();

        expect(passwordLabelSecond).to.equal(passwordLabelFirst);

        cy.wrap(secondForm)
          .find('[for="exampleInputPassword1"]')
          .should("contain", "Password");
      });
    });
  });
});
