import { URLS } from "../fixtures/urls.fixtures";

describe('Test la présence d\'une balise H1', () => {
    URLS.forEach(url => {
        it(`Visiter une ${url}`, () => {
            cy.visit(url);
    
            cy.url().should('include', url);
        });
    
        it(`Vérifier la présence de la balise H1 sur la page ${url}`, () => {
            const h1 = cy.get('h1');
    
            cy.shouldElementVisibleAndNotEmpty(h1);
            cy.log('test');
            // h1.should('be.visible')
            //   .should('not.be.empty');
        });

        it('Cliquer sur le lien "Nos engagements"', () => {
            const a = cy.get('a[href="https://www.apside.com/fr/nos-engagements/"]').first();
            
            cy.shouldElementVisibleAndNotEmpty(a);
            a.click();
        });
    })
});