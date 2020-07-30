/// <reference types="cypress" />

context("EventEdit", () => {
    beforeEach(() => {
        cy.visit("https://upbeat-bartik-d32bf0.netlify.app/login");

        // login
        cy.get(':nth-child(2) > .control > .input')
          .click()
          .type("pls@work.com");

        cy.get(':nth-child(3) > .control > .input')
          .click()
          .type("password123");

        cy.get('.has-text-centered > .button')
          .click()
          .wait(2000);

    });

    it('can edit an event', () => {

        cy.contains('Browse Events')
          .click();

        cy.contains("cypress test event")
          .click();

        cy.contains("Edit Techmeet")
          .click();

        cy.get(':nth-child(2) > .input')
          .click()
          .type("cypress test event edit");

        cy.contains("Save Changes")
          .click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal("Yay! Event updated!");
        });
    });
});
