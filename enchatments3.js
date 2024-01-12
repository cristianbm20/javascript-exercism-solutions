// Concepto: Bucles

// Devuelve la cantidad de veces que aparece el
// elemento card en el array stack
export const cardTypeCheck = (stack, card) => {
  let count = 0
  stack.forEach(element => {
    if (element === card) count++
  })

  return count
}

// Devuelve la cantidad de elementos pares si type
// es true o la cantidad de impares si es false
export const determineOddEvenCards = (stack, type) => {
  let even = 0

  for (const card of stack) {
    if (card % 2 === 0) even++
  }

  return type ? even : stack.length - even
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 1]
console.log(cardTypeCheck(array, 0))
console.log(determineOddEvenCards(array, false))
