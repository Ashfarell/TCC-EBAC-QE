# Projeto de Automação de Testes - TCC QA

Este projeto foi desenvolvido como parte do Trabalho de Conclusão de Curso (TCC) da formação de Quality Assurance Engineer.

O objetivo é validar funcionalidades de uma aplicação web e serviços de API, aplicando conceitos de automação de testes, integração contínua e testes de performance.

---

# Objetivo

Automatizar testes de diferentes camadas da aplicação:

- Interface Web (UI) com Cypress
- API REST com Supertest
- Testes de performance com K6
- Execução automatizada com integração contínua (GitHub Actions)

---

# Tecnologias utilizadas

- Cypress
- Supertest
- K6
- Appium (testes mobile)
- Node.js
- JavaScript
- GitHub Actions

---

# Estrutura do projeto

├── UI/
│ ├── cypress/
│ │ ├── e2e/
│ │ │ ├── login.cy.js
│ │ │ ├── carrinho2.cy.js
│ │ ├── pages/
│ │ │ ├── LoginPage.js
│ │
│ ├── package.json
│
├── API/
│ ├── cupons.test.js
│
├── mobile/
│ ├── teste-mobile.js
│
├── performance/
│ ├── teste-home.js
│ ├── teste-produto.js
│
├── .github/
│ ├── workflows/
│ │ ├── ci.yml
│
├── README.md
