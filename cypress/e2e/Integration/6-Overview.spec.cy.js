describe('ContinueShopping', function () {
    this.beforeEach(function () {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.FillandSubmit()
        cy.AddItensToCar()
        cy.ClickCarIcon()
        cy.ClickChecout()
        cy.FillandSubmitCheckout()

    })

    //CT14 - Validação de informações de compra
    //Dado que após adicionar itens no carrinho e preencher minhas informações
    //Quando acesso página de “checkout overview”
    //Então visualizo os dados de "valores" compra

    it('Validação de informações de compra', function () {
        cy.contains('Checkout: Overview')
        cy.contains('Shipping Information:').should('be.visible')
        cy.get('.summary_subtotal_label').should('be.visible')
        cy.get('.summary_tax_label').should('be.visible')
        cy.get('.summary_total_label').should('be.visible')

    })
    //CT15 - Validação de informações do produto
    //Dado que após adicionar itens no carrinho e preencher minhas informações
    //Quando acesso página de “checkout overview”
    //Então visualizo as informações do produto

    it('Validação de informações do produto', function () {

        cy.get('.cart_item_label').should('be.visible')
        cy.get('.cart_quantity_label').should('be.visible')
    })

    //CT16 - Confirmar compra e redirecionamento
    //Dado que após adicionar itens no carrinho e preencher minhas informações
    //Quando confirmo a compra na página de “checkout overview”
    //Então sou direcionado para página de agradecimento
    it('Confirmar compra e redirecionamento', function () {
        cy.get('.btn_action').click()
        cy.get('.subheader').should('be.visible')
    })

    //CT17 - Cancelamento de compra
    //Dado que estou na página “Checkout: Overview”
    //Quando clico no botão “CANCEL”
    //Então a compra é cancelada
    //E sou redirecionado para página de itens novamente

    it('Cancelamento de compra', function () {
        cy.contains('CANCEL').click()
        cy.contains('Products').should('be.visible')
    })
})

