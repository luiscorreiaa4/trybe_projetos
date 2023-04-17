const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Lança exceção para um dia inválido', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('Lança exceção para uma hora inválida', () => {
    expect(() => getOpeningHours('Monday', '25:00-PM')).toThrow('The hour must be between 0 and 12');
  });

  it('Lança exceção para um minuto inválido', () => {
    expect(() => getOpeningHours('Monday', '10:60-PM')).toThrow('The minutes must be between 0 and 59');
  });

  it('Lança exceção para abreviação inválida', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Lança exceção para hora não numérica', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });

  it('Lança exceção para minuto não numérico', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });

  it('Retorna a mensagem de aberto para um horário válido', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  it('Retorna a mensagem de fechado para segunda feira', () => {
    expect(getOpeningHours('Monday', '10:00-AM')).toBe('The zoo is closed');
  });

  it('Retorna a mensagem de fechado para um horário válido', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
});
