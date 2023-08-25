describe('login', function () {
  this.beforeEach(function () {
    cy.visit('https://www.saucedemo.com/v1/index.html')
  })
  // CT1: Verificar se o login é feito com sucesso
  //Dado que estou na página de login
  //Quando preencho o formulário com os seguintes dados
  //Username: secret_sauce
  //Password: secret_sauce
  //E clico no botão “Login”
  //Então sou direcionado para página de produtos
  it('Verificar se o login é feito com sucesso', function () {
    cy.FillandSubmit()
    cy.get('.product_label').should('be.visible')

  })
  //CT2:Falha ao realizar login utilizando email
  //Dado que estou na página de login
  //Quando preencho o formulário de login com um email e senha
  //E clico no botão “Login”
  //Então permaneço na pagina de login
  //E recebo a mensagem “Epic sadface: Username and password do not match any user in this service”
 
  it('Falha ao realizar login utilizando email', function(){
    cy.get('[data-test="username"]').type('kitoypp@hotmail.com')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible') 
    
  })
  //CT3 - Falha ao realizar o login sem username
  //Dado que estou na página de login
  //Quando preencho o formulário de login sem o username
  //E clico no botão “Login”
  //Então permaneço na página de login
  //E recebo a mensagem “Epic sadface: Username is required”

  it('Falha ao realizar o login sem username', function(){
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.contains('Username is required').should('be.visible')
  })
  
  //CT4 - Falha ao realizar o login sem senha
  //Dado que estou na página de login
  //Quando preencho o formulário de login sem senha
  //Então permaneço na página de login
  //E recebo a mensagem “Epic sadface: Password is required”
  it('Falha ao realizar o login sem senha',function (){
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('#login-button').click()
    cy.contains('Password is required').should('be.visible')
  })
  

})