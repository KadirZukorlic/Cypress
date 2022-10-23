/// <reference types="cypress" />

describe("Suit", () => {

  it("finding elements", () => {

    cy.visit('/') // slash / because we defined baseUrl in config file
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    // find elements
    // by Tag Name
    cy.get("input");

    // by ID
    cy.get("#inputEmail1");

    // by class name
    cy.get('.input-full-width')

    // by attribute name
    cy.get('[placeholder]')

    // by attribute name and value
    cy.get('[placeholder="Email"]')

    // by class - value have to provide entire value from class
    cy.get('[class="input-full-width size-medium shape-rectangle"]')

    // by Tag name and Attribute with value
    cy.get('input[placeholder="Email"]')

    // by two different attributes
    cy.get('[placeholder="Email"][fullwidth]')

    // by Tag name, attribute with value, id and class name
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

    // the most recommended way by cypress
    cy.get('[data-cy="imputEmail1"]')
  });
});
