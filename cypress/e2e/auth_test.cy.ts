describe('App auth tests', () => {
    it('Unauthorized restricted', () => {
        cy.visit('/')
        cy.url().should('include', '/login')
    })
    it ('Unauthorized allowed', ()=>{
        cy.visit('/login')
        cy.url().should('include', '/login')
    })
    it ('Login successful', ()=>{
        cy.visit('/login')
        cy.get('.form-control').type("kt_sosat")
        cy.get('.btn').click()
        cy.url().should('equal', 'http://localhost:8239/')
    })
    it ('Login Failed', ()=>{
        cy.visit('/login')
        cy.get('.form-control').type("kt_goood")
        cy.get('.btn').click()
        cy.url().should('include', '/login')
        cy.get('.alert').should('be.visible')
    })

})