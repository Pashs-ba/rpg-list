describe('App routing tests', () => {
    it('Unauthorized redirects', () => {
        cy.visit('/')
        cy.url().should('include', '/login')
    })
})