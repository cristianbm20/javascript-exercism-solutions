// Manejo de arrays.

// Devuelve el array pasado con todos sus
// elementos duplicados
export const seeingDouble = deck =>
  deck.map(card => card * 2)

// Devuelve el array pasado con tres 3 en
// la posicion donde se encuetre un 3.
// Ej: [1, 2, 3, 4] -> [1, 2, 3, 3, 3, 4]
export const threeOfEachThree = deck => {
  for (let i = 0; i < deck.length; i++) {
    if (deck[i] === 3) {
      deck.splice(i, 0, 3, 3)
      i += 2
    }
  }
  return deck
}

// Devuelve los dos elementos del array
// pasado que se encuetran en el centro.
// Se da por hecho que el array es de
// longitud par
export const middleTwo = deck =>
  deck.slice(4, 6)

// Devuelve el array pasado con el primer
// y ultimo elemento en el centro del array
export const sandwichTrick = deck => {
  deck.splice(deck.length / 2 - 1, 0, deck.pop(), deck.shift())

  return deck
}

// Devuelve el array con los elementos
// que sean 2. El resto los elimina
export const twoIsSpecial = deck =>
  deck.filter(card => card === 2)

// Devuelve el array ordenado de menor a
// mayor
export const perfectlyOrdered = deck =>
  deck.sort((a, b) => a - b)

// Devuelve el array invertido
export const reorder = deck =>
  deck.reverse()
