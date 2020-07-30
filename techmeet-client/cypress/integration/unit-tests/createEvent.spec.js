/// <reference types="cypress" />

context("EventCreation", () => {
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

    it('can create an event', () => {

        cy.get('.navbar-burger')
          .click();

        cy.contains("Start a Techmeet")
          .click();
       
        cy.get(':nth-child(2) > .input')
          .click()
          .type("cypress test event");

        cy.get(':nth-child(3) > .input')
          .click()
          .type("test event desc");

        cy.get(':nth-child(5) > .input')
          .click()
          .type("Online");

        cy.contains("Submit")
          .click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal("Great success!");
        });
    });
});
