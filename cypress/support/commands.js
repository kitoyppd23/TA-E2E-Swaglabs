//Logar automatico beforeach
Cypress.Commands.add('FillandSubmit', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
})

Cypress.Commands.add('AddItensToCar', () => {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').should('be.visible')
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        
})

Cypress.Commands.add('ClickCarIcon', () => {
    cy.get('#shopping_cart_container').click()
}) 

Cypress.Commands.add('ClickChecout', () => {
    cy.get('.btn_action').click()
})

Cypress.Commands.add('FillandSubmitCheckout', () => {
    cy.get('[data-test="firstName"]').type('Caue')
    cy.get('[data-test="lastName"]').type('Lopes')
    cy.get('[data-test="postalCode"]').type('06093060')
    cy.get('.btn_primary').click()
})
