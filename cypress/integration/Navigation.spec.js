/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Site Navigation', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.config('baseUrl')}`);
    });

    it('navigates to the projects page', () => {
        cy.contains('projects').click();
        cy.url().should('include', 'projects');
    });

    it('navigates to the contact page', () => {
        cy.contains('contact').click();
        cy.url().should('include', 'contact');
    });

    it('navigates to the home page', () => {
        cy.contains('home').click();
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}`);
    });

    it('logo navigates to the home page', () => {
        cy.contains('JWP').click();
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}`);
    });
});
