describe('ContinueShopping', function () {
    this.beforeEach(function () {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.FillandSubmit()
        cy.AddItensToCar()
        cy.ClickCarIcon()


    })
    //CT8 - Continuar compras com os mesmos itens adicionados no carrinho
    //Dado que estou na página do carrinho de compras
    //Quando clico no botão “CONTINUE SHOPPING”
    //Então sou redirecionado para página de produtos
    //E os itens permanecem no carrinho
    it('Continuar compras com os mesmos itens adicionados no carrinho', function () {
        cy.get('.cart_footer > .btn_secondary').click()
        cy.ClickCarIcon()
        cy.get('.item_pricebar > .btn_secondary').should('be.visible')
    })
    //CT9 - Validar redirecionamento para o checkout
    //Dado que estou na página do carrinho de compras
    //Quando clico no botão “CHECKOUT”
    //Então sou redirecionado para a página checkout your information

    it('Validar redirecionamento para o checkout', function () {
        cy.get('.btn_action').click()
        cy.contains('Checkout: Your Information').should('be.visible')
    })
})