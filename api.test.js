const request = require('supertest');

describe('Testes de API - ServeRest (Fluxo Completo)', () => {
  const url = 'https://serverest.dev';
  const emailValido = `francisco_qa_${Math.floor(Math.random() * 10000)}@teste.com`;

  it('Deve cadastrar um novo usuário com sucesso (POST)', async () => {
    const response = await request(url)
      .post('/usuarios')
      .send({
        nome: "Francisco QA",
        email: emailValido,
        password: "teste",
        administrador: "true"
      });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Cadastro realizado com sucesso");
  });

  it('Deve listar usuários cadastrados (GET)', async () => {
    const response = await request(url).get('/usuarios');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('usuarios');
  });
});