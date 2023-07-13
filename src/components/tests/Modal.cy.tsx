import ModalButton from "../UI/ModalButton.tsx";
import Modal from "../UI/Modal.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

describe('<Modal/> and <ModalButton/>', () => {
    it('renders', () => {
        cy.mount(
            <>
                <ModalButton connected_with={"example"} button_text={"Test"}/>
                <Modal title={"some"}
                       connected_with={'example'}/>
            </>)
    })
    it('connects', () => {
        cy.mount(
            <>
                <ModalButton connected_with={"example"} button_text={"Test"}/>
                <Modal title={"some"}
                       connected_with={'example'}/>
            </>)
        cy.get('.btn').click()
        cy.get('.modal-title').should('be.visible')
        cy.get('.modal-backdrop.fade.show').then((element) => element.remove());
    })
})