describe('Carrinho', () => {
  it('deve adicionar produto ao carrinho', () => {
    // Acessar a página inicial da loja
    cy.visit('http://lojaebac.ebaconline.art.br/');

    // Navegar para a página de produtos
    cy.get('#primary-menu > .menu-item-629 > a').click();

    // Selecionar o produto "Abominable Hoodie"
    cy.contains('Abominable Hoodie').click();

    // Selecionar o tamanho (L)
    cy.get('.button-variable-item-L').click({ force: true }).trigger('click');

    // Selecionar a cor (Red)
    cy.get('.button-variable-item-Red').click({ force: true }).trigger('click');

    // Definir a quantidade do produto
    cy.get('.input-text').clear().type('1');

    // Validar que o botão "Adicionar ao carrinho" está habilitado
    cy.get('.single_add_to_cart_button').should('not.have.class', 'disabled');

    // Adicionar o produto ao carrinho
    cy.get('.single_add_to_cart_button').click();

    // Abrir o mini-carrinho (ícone do carrinho)
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click();

    // Clicar em "Ver carrinho"
    cy.get(
      '#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart'
    ).click();

    // Validar que estamos na página do carrinho
    cy.get('.page-title').should('contain.text', 'Carrinho');

    // Validar que o produto foi adicionado corretamente ao carrinho
    cy.get('.product-name > a').should('contain.text', 'Abominable Hoodie');
  });
});
