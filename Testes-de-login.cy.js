describe('Testes de Login', () => {
  it('Teste de Login: Email válido', () => {
    cy.visit('https://egrc.homologacao.com.br/Account/Login');
    cy.get('#Email').type('eduardo.tolentino@grcteam.com.br'); // inseri e-mail válido
    cy.get('#Password').type('Grcteam@2025');
    cy.get('#loading').click();
  });

  it('Teste de Login: Email inválido', () => {
    cy.visit('https://egrc.homologacao.com.br/Account/Login');
    cy.get('#Email').type('email.invalido@grcteam.com.br'); // inseri e-mail inválido
    cy.get('#Password').type('Grcteam@2025');
    cy.get('#loading').click();
    cy.contains('Login inválido').should('be.visible'); // validador de mensagem de exceção
  });

  it('Teste de Login: Email em branco', () => {
    cy.visit('https://egrc.homologacao.com.br/Account/Login');
    cy.get('#Password').type('Grcteam@2025');
    cy.get('#loading').click();
  });

  it('Teste de Login: Senha em branco', () => {
    // Acessa a página de login
    cy.visit('https://egrc.homologacao.com.br/Account/Login');
    // Insere dados no campo de email
    cy.get('#Email').type('eduardo.tolentino@grcteam.com.br');
    // Não insere nada no campo de senha
    cy.get('#loading').click();
  });
});
