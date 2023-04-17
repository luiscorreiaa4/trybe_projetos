const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    const details1 = productDetails('Alcool gel', 'Máscara');
    const details2 = productDetails('Desodorante', 'Perfume');
    expect(typeof productDetails).toBe('function');
    expect(typeof details1).toBe('object');
    expect(details1.length).toBe(2);
    expect(typeof details1[0]).toBe('object');
    expect(typeof details1[1]).toBe('object');
    expect(details1[0]).not.toBe(details2[0]);
    expect(details1[1]).not.toBe(details2[1]);
    expect(details1[0].details.productId.endsWith('123')).toBe(true);
    expect(details1[1].details.productId.endsWith('123')).toBe(true);
  });
});
