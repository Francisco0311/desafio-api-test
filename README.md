# Desafio de Automação de API - JSONPlaceholder

Este projeto contém a automação de testes para a API pública JSONPlaceholder, conforme solicitado no desafio técnico.

## 🛠️ Tecnologias Utilizadas
* **Node.js**
* **Jest** (Framework de testes)
* **Supertest** (Biblioteca para requisições HTTP)

## 🔍 Cenários Testados
* **GET /comments**: Validação de Status Code 200 e integridade da lista de comentários.
* **POST /albums**: Validação de criação de novo recurso com Status Code 201.

## 🚀 Como Executar os Testes
1. Instale as dependências: `npm install`
2. Execute os testes: `npm test`

## ⚙️ Integração Contínua (CI)
O projeto possui um workflow configurado no **GitHub Actions** que executa os testes automaticamente a cada push.
