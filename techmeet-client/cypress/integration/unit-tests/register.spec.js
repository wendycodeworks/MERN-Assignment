/// <reference types="cypress" />

context("Register", () => {
    beforeEach(() => {
        cy.visit("https://upbeat-bartik-d32bf0.netlify.app/login");
    });

    it('can create an account', () => {
        cy.get(':nth-child(2) > .control > .input')
          .click()
          .type("Cypress");

        cy.get(':nth-child(3) > .control > .input')
          .click()
          .type("Test");

        cy.get(':nth-child(4) > .control > .input')
          .click()
          .type("666666");

        cy.get(':nth-child(5) > .control > .input')
          .click()
          .type("cypress@test.com");

        cy.get(':nth-child(6) > .control > .input')
          .click()
          .type("cypress123");

        cy.contains("Submit")
          .click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal("Successfully created!");
        });

        cy.contains("Logout");
    });
});
