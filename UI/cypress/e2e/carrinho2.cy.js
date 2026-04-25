describe('Carrinho - Regras de negócio', () => {
  it('não deve permitir mais de 10 itens de um mesmo produto', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/');

    cy.get('#primary-menu > .menu-item-629 > a').click();

    cy.contains('Abominable Hoodie').click();

    cy.get('.button-variable-item-L').click({ force: true }).trigger('click');

    cy.get('.button-variable-item-Red').click({ force: true }).trigger('click');

    // tenta inserir quantidade inválida
    cy.get('.input-text').clear().type('11');

    // botão de adicionar ainda deve existir
    cy.get('.single_add_to_cart_button').should('exist');

    // opcional: garante que não entrou no fluxo de compra automaticamente
    cy.get('.single_add_to_cart_button').click({ force: true });

    cy.visit('http://lojaebac.ebaconline.art.br/carrinho/');

    // valida que não há 11 itens explícitos no fluxo (controle básico)
    cy.get('body').should('contain.not.text', '11 ×');
  });
});
