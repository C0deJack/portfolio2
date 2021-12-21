/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('<NavBar />', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('navigates to the projects page', () => {
        cy.contains('projects').click();
        cy.url().should('include', 'projects');
    });

    it('navigates to the contact page', () => {
        cy.contains('contact').click();
        cy.url().should('include', 'contact');
    });
});
