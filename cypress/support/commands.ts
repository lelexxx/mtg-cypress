Cypress.Commands.add('shouldElementVisibleAndNotEmpty', (element: Cypress.Chainable) => {
    return element.should('be.visible') //assert
                  .should('not.be.empty'); //assert
});

declare global {
    namespace Cypress {
        interface Chainable {
            shouldElementVisibleAndNotEmpty(element: Cypress.Chainable): Cypress.Chainable;
        }
    }
}

// Convert this to a module instead of script (allows import/export)
export { };

