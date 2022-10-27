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

  it("Invoke Command", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    // 1
    cy.get('[for="exampleInputEmail1"]').should("contain", "Email address");

    // 2
    cy.get('[for="exampleInputEmail1"]').then((inputLabel) => {
      const inputLabelText = inputLabel.text();

      expect(inputLabelText).to.equal("Email address");
    });

    // 3
    cy.get('[for="exampleInputEmail1"]')
      .invoke("text")
      .then((text) => {
        expect(text).to.equal("Email address");
      });

    cy.contains("nb-card", "Basic form")
      .find("nb-checkbox")
      .click()
      .find(".custom-checkbox")
      .invoke("attr", "class")
      // .should("contain", "checked");
      .then((classValue) => {
        expect(classValue).to.contain("checked");
      });
  });

  it("Assert Property", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Datepicker").click();

    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
        cy.get("nb-calendar-day-picker").contains("17").click();
        cy.wrap(input)
          .invoke("prop", "value")
          .should("contain", "Oct 17, 2022");
      });
  });

  it("Radio button", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.contains("nb-card", "Using the Grid")
      .find('[type="radio"]')
      .then((radioButtons) => {
        cy.wrap(radioButtons)
          .first()
          .check({ force: true })
          .should("be.checked");

        // eq(index)
        cy.wrap(radioButtons).eq(1).check({ force: true });

        cy.wrap(radioButtons).eq(0).should("not.be.checked");

        cy.wrap(radioButtons).eq(2).should("be.disabled");
      });
  });

  it("Check boxes", () => {
    cy.visit("/");
    cy.contains("Modal & Overlays").click();
    cy.contains("Toastr").click();

    // cy.get('[type="checkbox"]').check({ force: true });
    cy.get('[type="checkbox"]').eq(0).click({ force: true });
    cy.get('[type="checkbox"]').eq(0).check({ force: true });
  });

  it.only('List and Dropdowns', () => {
    cy.visit("/")
    // 1
    cy.get('nav nb-select').click()
    cy.get('.options-list').contains('Dark').click()
    cy.get('nav nb-select').should('contain', 'Dark')
    cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')
    
    // 2
    cy.get('nav nb-select').then(dropdown => {
      cy.wrap(dropdown).click()
      cy.get('.options-list nb-option').each((listItem, index) => {
       const itemText = listItem.text().trim()

       const colors = {
        "Light": "rgb(255, 255, 255)",
        "Dark": "rgb(34, 43, 69)",
        "Cosmic": "rgb(50, 50, 89)",
        "Corporate": "rgb(255, 255, 255)",
       }

       cy.wrap(listItem).click()
       cy.wrap(dropdown).should('contain', itemText)
       cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText])
       if (index < 3) {
        cy.wrap(dropdown).click()
       }
      })
    })
  })
});