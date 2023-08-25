describe('products', function () {
  this.beforeEach(function () {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.FillandSubmit()
    cy.title().should('be.equal', 'Swag Labs')
  })

  // CT5: Validar adicionar e remover itens no carrinho
  //Dado que estou na página de produtos
  //Quando clico no botão “ADD TO CARD” do item desejado
  //Então uma notificação aparece no carrinho de compra

  it(' Validar função add to cart', function () {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').should('be.visible')
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get("span[class='fa-layers-counter shopping_cart_badge']").should('be.visible')

  })
  // CT6: Validar adicionar e remover itens no carrinho
  //Dado que estou na página de produtos
  //Quando clico no botão “REMOVE” do item desejado
  //Então a notificação desaparece do carrinho de compra
  it('Validar função remove to cart', function () {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').should('be.visible')
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get('.fa-layers-counter').should('be.visible')
    cy.get('.btn_secondary').should('have.text', 'REMOVE').click()
    cy.get('.btn_secondary').should('not.exist')


  })

})


