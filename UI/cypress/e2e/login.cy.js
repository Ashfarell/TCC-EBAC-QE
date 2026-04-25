import LoginPage from '../pages/LoginPage';

describe('Login', () => {
  it('deve realizar login com sucesso', () => {
    LoginPage.abrirLogin();
    LoginPage.preencherUsuario('usuario_valido');
    LoginPage.preencherSenha('senha_valida');
    LoginPage.clicarLogin();

    LoginPage.mensagemSucesso().should('be.visible').and('contain.text', 'Minha conta');
  });

  it('deve exibir erro ao tentar login inválido', () => {
    LoginPage.abrirLogin();
    LoginPage.preencherUsuario('usuario_invalido');
    LoginPage.preencherSenha('senha_errada');
    LoginPage.clicarLogin();

    LoginPage.mensagemErro().should('be.visible');
  });
});
