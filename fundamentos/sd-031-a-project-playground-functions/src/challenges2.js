// Desafio 11 - Crie a função generatePhoneNumber

function generatePhoneNumber(array) {
  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let index = 0; index < array.length; index++) {
    let count = 0;
    let numberToTest = array[index];
    for (let index = 0; index < array.length; index++) {
      if (array[index] == numberToTest) {
        count++;
      }
      if (count >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}

// Desafio 12 -  Crie a função triangleCheck

function conditionOne(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}

function conditionTwo(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineA + lineC > lineB && lineB + lineC > lineA) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  let c1 = conditionOne(lineA, lineB, lineC);
  let c2 = conditionTwo(lineA, lineB, lineC);
  if (c1 || c2) {
    return true;
  }
  return false;
}

// Desafio 13 - Crie a função hydrate

function hydrate(frase) {
  let reg = /\d+/g;
  let resul = frase.match(reg);
  for (let index = 0; index < resul.length; index++) {
    resul[index] = parseInt(resul[index]);
  }
  let soma = 0;
  for (let index = 0; index < resul.length; index++) {
    soma += resul[index];
  }
  if (soma == 1) {
    return '1 copo de água';
  }
  return `${soma} copos de água`;
}

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
