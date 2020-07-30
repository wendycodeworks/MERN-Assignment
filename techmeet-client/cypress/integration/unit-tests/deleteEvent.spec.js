/// <reference types="cypress" />

context("EventDelete", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/login");

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

    it('can delete an event', () => {

        cy.contains('Browse Events')
          .click();

        cy.contains("cypress test event")
          .click();

        cy.contains("Edit Techmeet")
          .click();

        cy.contains("Delete")
          .click()
          .wait(2000);

        cy.on('window:alert', (str) => {
            expect(str).to.equal("Event deleted :(");
        });
    });
});
