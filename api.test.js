const request = require('supertest');

describe('Testes de API - JSONPlaceholder (Requisitos Oficiais)', () => {
  const url = 'https://jsonplaceholder.typicode.com';

  it('Deve validar o método GET /comments', async () => {
    const response = await request(url).get('/comments');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('Deve validar o método POST /albums', async () => {
    const response = await request(url)
      .post('/albums')
      .send({
        title: "Album de Teste Francisco QA",
        userId: 1
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe("Album de Teste Francisco QA");
  });
});