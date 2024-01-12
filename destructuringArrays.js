// Usando desestructuración, devuelve el primer
// elemento del array pasado como parametro.
export const getFirstCard = deck => {
  const [firstCard] = deck
  return firstCard
}

// Devuelve el segundo elemento del array pasado
// como parametro
export const getSecondCard = deck => {
  const [, secondCard] = deck
  return secondCard
}

// Devuelve un array con el primer y segundo
// elementos cambiados de posicion.
// IMPORTANTE: Esto no esta modificando el array
// original si no que esta devolviendo una copia
export const swapTopTwoCards = deck => {
  if (deck.length < 2) return deck
  const [firstCard, secondCard, ...rest] = deck

  return [secondCard, firstCard, ...rest]
}

// Devuelve un array con el primer elemento del
// array y un array con el resto de elementos
export const discardTopCard = deck => {
  const [firstCard, ...rest] = deck
  return [firstCard, rest]
}

// Devuelve el array pasado como parametro con el
// array FACE_CARDS integrado entre el primer elemento
// y el segundo
const FACE_CARDS = ['jack', 'queen', 'king']

export const insertFaceCards = deck => {
  const [firstCard, ...rest] = deck

  return [firstCard, ...FACE_CARDS, ...rest]
}

const desk = [10, 7, 3, 8, 5]

console.log(getFirstCard(desk))
console.log(getSecondCard(desk))
console.log(swapTopTwoCards(desk))
console.log(discardTopCard(desk))
console.log(insertFaceCards(desk))
