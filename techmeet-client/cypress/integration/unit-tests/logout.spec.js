/// <reference types="cypress" />

context("Auth", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/login");

        cy.get(':nth-child(2) > .control > .input')
          .click()
          .type("pls@work.com");

        cy.get(':nth-child(3) > .control > .input')
          .click()
          .type("password123");

        cy.contains("Submit")
          .click()
          .wait(2000);

        cy.on('window:alert', (str) => {
            expect(str).to.equal("You're logged in and ready to go!");
        });
    });

    it('can log out', () => {
        cy.get('.navbar-burger')
          .click();
       
        cy.contains("Logout")
          .click();

        cy.contains("Log in");
    });
});
