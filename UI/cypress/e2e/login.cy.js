describe('Login', () => {
  it('deve realizar login com sucesso', () => {
    // 1. Acessar site
    cy.visit('http://lojaebac.ebaconline.art.br/');

    // 2. Clicar em Login
    cy.get('.icon-user-unfollow').click();

    // 3. Preencher usuário
    cy.get('#username').type('usuario_valido');

    // 4. Preencher senha
    cy.get('#password').type('senha_valida');

    // 5. Clicar em entrar
    cy.get('[name="login"]').click();

    cy.get('.page-title').should('be.visible').and('contain.text', 'Minha conta');
  });
});
