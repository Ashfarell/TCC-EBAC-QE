class LoginPage {
  abrirLogin() {
    cy.visit('http://lojaebac.ebaconline.art.br/');
    cy.get('.icon-user-unfollow').click();
  }

  preencherUsuario(usuario) {
    cy.get('#username').type(usuario);
  }

  preencherSenha(senha) {
    cy.get('#password', { timeout: 10000 }).should('be.visible').and('not.be.disabled').type(senha);
  }

  clicarLogin() {
    cy.get('[name="login"]').click();
  }

  mensagemSucesso() {
    return cy.get('.page-title');
  }

  mensagemErro() {
    return cy.get('.woocommerce-error');
  }
}

export default new LoginPage();
