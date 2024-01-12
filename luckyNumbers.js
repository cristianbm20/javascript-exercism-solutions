// Devuelve la suma de los arrays pasados. Ej: [1, 2, 3] + [0, 7] = 130
export const twoSum = (array1, array2) => Number(array1.join('')) + Number(array2.join(''))

// Devuelve true o false si el numero pasado como parámetro es palíndromo.
export const luckyNumber = value => Number(value.toString().split('').reverse().join('')) === value

// Devuelve un mensaje en función del valor pasado como parámetro.
// Ej: Recibe '123' devuelve ''
// Ej: Recibe 'abc' o '0' devuelve 'Must be a number besides 0'
// Ej: Recibe '', null o undefined devuelve 'required field'
export const errorMessage = input =>
  input === '' || input === null || input === undefined
    ? 'required field'
    : isNaN(Number(input)) || Number(input) === 0
      ? 'Must be a number besides 0'
      : ''

console.log(twoSum([1, 2, 3, 40], [0, 7]))
console.log(luckyNumber(1441))
console.log(errorMessage('abc'))
