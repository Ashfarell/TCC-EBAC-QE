const request = require('supertest');

describe('API Cupons', () => {
  it('deve listar cupons com sucesso', async () => {
    const response = await request('http://lojaebac.ebaconline.art.br')
      .get('/wp-json/wc/v3/coupons')
      .set('Authorization', 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('deve criar um novo cupom', async () => {
    const codigoCupom = 'TesteCupom' + Date.now();

    const response = await request('http://lojaebac.ebaconline.art.br')
      .post('/wp-json/wc/v3/coupons')
      .set('Authorization', 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy')
      .send({
        code: codigoCupom,
        amount: '10',
        discount_type: 'fixed_product',
        description: 'Cupom de teste automatizado',
      });

    expect(response.status).toBe(201);
    expect(response.body.code).toBe(codigoCupom.toLowerCase());
  });
});
