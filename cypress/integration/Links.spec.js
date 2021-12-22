/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Site Links (excluding main navigation)', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.config('baseUrl')}`);
    });

    it('checks all <a target=_blank> tags have no security vulnerabilities.', () => {
        cy.visit(`${Cypress.config('baseUrl')}`);
        cy.get('[target=_blank]').should('have.attr', 'rel', 'noopener noreferrer');

        // Need to open and check other pages for link issues.
        // The problem is asserting '.should' on something that might not be there.

        // cy.visit(`${Cypress.config('baseUrl')}/projects`);
        // cy.get('[target=_blank]').then($link => {
        //     $link.should('have.attr', 'rel', 'noopener noreferrer');
        // });
    });

    it('checks cv download has the correct url', () => {
        cy.get('[data-cy=cvDownload]').should('have.attr', 'href', '../../../Jack Wood-Pearce CV.pdf');
    });
});
