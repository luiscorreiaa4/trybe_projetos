const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna undefined quando não é passado nenhum parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Retorna "Parâmetro inválido, é necessário uma string" quanto o parâmetro não é uma string', () => {
    expect(handlerElephants(42)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Retorna a quantidade de elefantes quando é passado "count"', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Retorna os nomes dos elefantes quando é passado "names"', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Retorna a média da idade dos elefantes quando é passado "averageAge"', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Retorna null quando o parâmetro é inválido', () => {
    expect(handlerElephants('invalido')).toBeNull();
  });
  it('Retorna a localização dos elefantes quando é passado "location"', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
});
