/// <reference types="cypress" />

context("Auth", () => {
    beforeEach(() => {
        cy.visit("https://upbeat-bartik-d32bf0.netlify.app/login");
    });

    it('can sign in', () => {
        cy.get(':nth-child(2) > .control > .input')
          .click()
          .type("pls@work.com");

        cy.get(':nth-child(3) > .control > .input')
          .click()
          .type("password123");

        cy.contains("Submit")
          .click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal("You're logged in and ready to go!");
        });

        cy.contains("Logout");
    });
});
