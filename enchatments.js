// Intercambio de cartas. Metodos para manejo
// y modificacion del array cards.

// Devuelve la carta de la posicion pasada.
const getItem = (cards, position) => cards[position]

// Intercambia la carta de la posicion pasada por la carta
// pasada como parametro.
const setItem = (cards, position, replacementCard) => {
  cards[position] = replacementCard
  return cards
}

// Añade la carta pasada al principio del array.
const insertItemAtTop = (cards, newCard) => {
  cards.unshift(newCard)
  return cards
}

// Elimina la carta de la posición pasada.
const removeItem = (cards, position) => {
  cards.splice(position, 1)
  return cards
}

// Elimina la primera carta.
const removeItemFromTop = cards => {
  cards.shift()
  return cards
}

// Añade la carta pasada al final.
const insertItemAtBottom = (cards, newCard) => {
  cards.push(newCard)
  return cards
}

// Elimina la última carta.
const removeItemAtBottom = cards => {
  cards.pop()
  return cards
}

// Devuelve true o false en funcion de si la longitud de cards
// es igual o no a la longitud pasada stackSize.
const checkSizeOfStack = (cards, stackSize) => cards.length === stackSize

console.log(getItem([1, 2, 3, 4], 2))
console.log(setItem([1, 2, 3, 4], 2, 'newCard'))
console.log(insertItemAtTop([1, 2, 3, 4], 'newCard'))
console.log(removeItem([1, 2, 3, 4], 2))
console.log(removeItemFromTop([1, 2, 3, 4]))
console.log(insertItemAtBottom([1, 2, 3, 4], 'newCard'))
console.log(removeItemAtBottom([1, 2, 3, 4]))
console.log(checkSizeOfStack([1, 2, 3, 4], 4))
