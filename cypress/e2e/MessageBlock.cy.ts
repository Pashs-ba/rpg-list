describe('<MessageBlock />', () => {
    beforeEach(() => {
        localStorage.setItem("user", JSON.stringify({id: "1", name: "test"}))
    })
    it('make not-constant', () => {
        cy.visit('/test/message_block')
        cy.get('.form-control').type("Some text")
        cy.get('.btn').click()
        cy.get('.d-flex').should('have.text', "Some text")
    })
    it('make constant', () => {
        cy.visit('/test/message_block')
        cy.get('.form-control').type("Some text")
        cy.get('.form-check-input').check()
        cy.get('.btn').click()
        cy.get('.d-flex > :nth-child(1)').should('have.text', "Some text")
        cy.get('.btn-close').should('be.visible')
    })
    it('not-constant disappears', () => {
        cy.visit('/test/message_block')
        cy.get('.form-control').type("Some text")
        cy.get('.btn').click()
        cy.get(':nth-child(3) > a').click()
        cy.get('.d-flex').should('not.exist')

    })
    it('constant exists over pages', () => {
        cy.visit('/test/message_block')
        cy.get('.form-control').type("Some text")
        cy.get('.form-check-input').check()
        cy.get('.btn').click()
        cy.get(':nth-child(3) > a').click()
        cy.get('.d-flex').should('exist')
    })
    it('constant close on button', ()=>{
        cy.visit('/test/message_block')
        cy.get('.form-control').type("Some text")
        cy.get('.form-check-input').check()
        cy.get('.btn').click()
        cy.get('.d-flex > :nth-child(1)').should('have.text', "Some text")
        cy.get('.btn-close').click()
        cy.get('.d-flex').should('not.exist')
    })
})