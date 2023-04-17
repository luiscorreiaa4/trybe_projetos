// Desafio 1 - Crie a função compareTrue

function compareTrue(val1, val2) {
  if (val1 && val2 === true) {
    return true;
  }
  return false;
}

// Desafio 2 - Crie a função splitSentence

function splitSentence(frase) {
  let splitted = frase.split(' ');
  return splitted;
}

// Desafio 3 - Crie a função concatName

function concatName(array) {
  let frase = `${array[array.length - 1]}, ${array[0]}`;
  return frase;
}

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 5 - Crie a função highestCount

function highestCount(array) {
  let arraySorted = array.sort((a, b) => a - b);
  let maior = arraySorted[arraySorted.length - 1];
  let count = 0;
  for (let index = arraySorted.length - 1; index >= 0; index -= 1) {
    if (arraySorted[index] === maior) {
      count += 1;
    } else {
      return count;
    }
  }
  return count;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea(base, height) {
  return ((base * height) / 2);
}

function calcRectangleArea(base, height) {
  return (base * height);
}

function calcAllAreas(base, height, form) {
  if (form == 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  }
  if (form == 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }

  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}

// Desafio 7 - Crie a função catAndMouse

function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  distCat1 = Math.abs(distCat1);
  let distCat2 = mouse - cat2;
  distCat2 = Math.abs(distCat2);
  if (distCat1 > distCat2) {
    return 'cat2';
  }
  if (distCat2 > distCat1) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz';
    } else {
      array[index] = 'bug!';
    }
  }
  return array;
}

// Desafio 9 - Crie a função encode e a função decode

function encode(frase) {
  let splitted = frase.split('');
  for (let index = 0; index < splitted.length; index++) {
    if (splitted[index] == 'a') {
      splitted[index] = '1';
    } else if (splitted[index] == 'e') {
      splitted[index] = '2';
    } else if (splitted[index] == 'i') {
      splitted[index] = '3';
    } else if (splitted[index] == 'o') {
      splitted[index] = '4';
    } else if (splitted[index] == 'u') {
      splitted[index] = '5';
    }
  }
  let res = '';
  for (let index = 0; index < splitted.length; index++) {
    res += splitted[index];
  }
  return res;
}
function decode(frase) {
  let splitted = frase.split('');
  for (let index = 0; index < splitted.length; index++) {
    if (splitted[index] == '1') {
      splitted[index] = 'a';
    } else if (splitted[index] == '2') {
      splitted[index] = 'e';
    } else if (splitted[index] == '3') {
      splitted[index] = 'i';
    } else if (splitted[index] == '4') {
      splitted[index] = 'o';
    } else if (splitted[index] == '5') {
      splitted[index] = 'u';
    }
  }
  let res = '';
  for (let index = 0; index < splitted.length; index++) {
    res += splitted[index];
  }
  return res;
}

// Desafio 10 - Crie a função techList

function techList(array, nome) {
  array = array.sort();
  if (array.length == 0) {
    return array;
  }
  let res = [];
  for (let index = 0; index < array.length; index++) {
    let object = {
      tech: array[index],
      name: nome,
    };
    res.push(object);
  }
  return res;
}

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
