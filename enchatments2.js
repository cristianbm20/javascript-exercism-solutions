// Metodos para manejo de arrays.

// Devuelve el indice de la carta pasada en el
// array pasado.
export const getCardPosition = (stack, card) =>
  stack.indexOf(card)

// Devuelve true o false en funcion de si el
// elemento pasado esta presente en el array
export const doesStackIncludeCard = (stack, card) =>
  stack.includes(card)

// Devuelve true o false en funcion de si todos
// los elementos del array son pares o no
export const isEachCardEven = stack =>
  stack.every(card => card % 2 === 0)

// Devuelve true o false en funcion de si algun
// elemento del array es impar o no.
export const doesStackIncludeOddCard = stack =>
  stack.some(card => card % 2 !== 0)

// Devuelve el primer elemento impar del array
export const getFirstOddCard = stack =>
  stack.find(card => card % 2 !== 0)

// Devuelve el indice del primer elemento par del array
export const getFirstEvenCardPosition = stack =>
  stack.findIndex(card => card % 2 === 0)
