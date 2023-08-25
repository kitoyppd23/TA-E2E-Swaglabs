describe('ContinueShopping', function () {
    this.beforeEach(function () {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.FillandSubmit()
        cy.AddItensToCar()
        cy.ClickCarIcon()
        cy.ClickChecout()

    })

    //CT10 - Tentativa de cadastro sem preencher o nome
    //Dado que estou na página de “checkout your information”
    //Quando preencho o campo o “Last Name” com: Silva
    //E preencho o campo do “Zip/postal code” com: 06090060
    //E clico no botão “Continue”
    //Então recebo uma mensagem de erro “Error:  Name is required”
    it('Tentativa de cadastro sem preencher o nome', function () {
        cy.get('[data-test="lastName"]').type('Lopes')
        cy.get('[data-test="postalCode"]').type('06093060')
        cy.get('input[class="btn_primary cart_button"]').click()
        cy.get('[data-test="error"]').should('be.visible')
    })
    //CT11-Tentativa de cadastro sem preencher o o sobrenome
    //Dado que estou na página de “checkout your information”
    //Quando preencho o campo o “First Name” 
    //E preencho Código postal o campo de “Zip/postal code” 
    //E clico no botão “Continue”
    //Então recebo uma mensagem de erro “Error: Last Name is required”

    it('Tentativa de cadastro sem preencher o o sobrenome', function () {
        cy.get('[data-test="firstName"]').type('Caue')
        cy.get('[data-test="postalCode"]').type('06093060')
        cy.get('input[class="btn_primary cart_button"]').click()
        cy.get('[data-test="error"]').should('be.visible')

    })
    //CT12-Tentativa de cadastro sem preencher o código postal
    //Dado que estou na página de “checkout your information”
    //Quando preencho o campo o first name
    //E preencho Código postal o 
    //E clico no botão “Continue”
    //Então recebo uma mensagem de erro “Error: postal code is required”
    it('Tentativa de cadastro sem preencher o código postal', function () {
        cy.get('[data-test="firstName"]').type('Caue')
        cy.get('[data-test="lastName"]').type('Lopes')
        cy.get('input[class="btn_primary cart_button"]').click()
        cy.get('[data-test="error"]').should('be.visible')
    })

    //CT13 - Validar redirecionamento para o checkout: Overview
    //Dado que estou na página de “checkout your information”
    //Quando preencho o campo o “Name” 
    //E preencho o campo do "Sobrenome" 
    //E preencho o campo do “Zip/postal code” 
    //E clico no botão “Continue”
    //Então sou redirecionado para a pagina Checkout: Overview

    it('Validar redirecionamento para o checkout: Overview', function () {
        cy.get('[data-test="firstName"]').type('Caue')
        cy.get('[data-test="lastName"]').type('Lopes')
        cy.get('[data-test="postalCode"]').type('06093060')
        cy.get('input[class="btn_primary cart_button"]').click()

    })


})

