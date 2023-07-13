import {Form} from '../UI/Form.tsx'
import {
    elements,
    multi_select_element,
    smart_select,
    test_empty,
    test_initial_value,
    test_select
} from "../UI/test_form.ts";
import 'bootstrap/dist/css/bootstrap.min.css';

describe('<Form />', () => {
    it('renders', () => {
        cy.mount(<Form elements={elements} onSubmit={(el) => {
            console.log(el)
        }}/>)
    })
    it('test empty input', () => {
        cy.mount(<Form elements={test_empty} onSubmit={(el) => {
            expect(el["test_value"]).eq("")
        }}/>)
        cy.get('.btn').click()
    })
    it('test non-empty input', () => {
        cy.mount(<Form elements={test_empty} onSubmit={(el) => {
            expect(el["test_value"]).eq("some")
        }}/>)
        cy.get('.form-control').type("some")
        cy.get('.btn').click()
    })
    it('test initial value', () => {
        cy.mount(<Form elements={test_initial_value} onSubmit={(el) => {
            expect(el["test_value"]).eq("some")
        }}/>)
        cy.get('.btn').click()
    })
    it('test default select value', () => {
        cy.mount(<Form elements={test_select} onSubmit={(el) => {
            expect(el["test_select"]).eq("test")
        }}/>)
        cy.get('.btn').click()
    })
    it('test multi select default value', () => {
        cy.mount(<Form elements={multi_select_element} onSubmit={(el) => {
            expect(el["test_select_1"]).include.members(["some1", "some2"])
            expect(el["test_select_2"]).length(0)
        }}/>)
        cy.get('.btn').click()
    })
    it('test smart select filtering', () => {
        cy.mount(<Form elements={smart_select} onSubmit={() => {
        }}/>)
        cy.get('.form-control').type("test")
        cy.get('.form-select').find('option:visible').should('have.length', 2)
    })
    it('test smart select save chosen value', () => {
        cy.mount(<Form elements={smart_select} onSubmit={(el) => {
            expect(el["test_select"]).include.members(["test"])
        }}/>)
        cy.get('.form-select').select(0)
        cy.get('.form-control').type("some")
        cy.get('.btn').click()
    })
})