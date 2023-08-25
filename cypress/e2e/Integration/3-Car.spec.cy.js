describe('car', function () {
  this.beforeEach(function () {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.FillandSubmit()
    cy.AddItensToCar()
    cy.ClickCarIcon()


  })
  //CT7 - Validar remoção de cada item por vez no carrinho de compras
  //Dado que estou na página do carrinho de compras
  //Quando clico no botão “Remove” em um dos itens de escolha
  //Então o item escolhido desaparece da página

  it('Validar remoção de cada item por vez no carrinho de compras', function () {
    cy.get('.item_pricebar > .btn_secondary').click()
    cy.get('.item_pricebar > .btn_secondary').should('not.exist')
  })



})