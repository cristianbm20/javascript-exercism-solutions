// Devuelve una frase en funcion del tiempo restante
// pasado como parametro
export const cookingStatus = remainingTime =>
  remainingTime > 0
    ? 'Not done, please wait'
    : remainingTime === 0
      ? 'Lasagna is done'
      : 'You forgot to set the timer'

// Devuelve el tiempo total de preparacion de la lasaña
// en funcion del numero de capas y del tiempo por capa
// pasados como parametros. Si no se pasa el tiempo por
// capa entonces se establece en 2.
export const preparationTime = (layers, timePerLayer) =>
  timePerLayer !== null && timePerLayer !== undefined
    ? layers.length * timePerLayer
    : layers.length * 2

// Del array layers se extrae la cantidad de veces que
// aparecen noodles y sauce respectivamente y se devuelve
// un objeto {noodles: ***, sauce: ***} con valores
// multiplicados por 50 y 0.2 respectivamente
export const quantities = layers => {
  let noodles = 0
  let sauce = 0
  layers.forEach(layer => {
    if (layer === 'noodles') noodles++
    else if (layer === 'sauce') sauce++
  })

  return { noodles: noodles * 50, sauce: sauce * 0.2 }
}

// De dos listas de ingredientes pasadas como parametros
// cogemos el último ingrediente de la primera y lo
// añadimos al final de la segunda. Todo ello sin modificar
// la primera lista y sin devolver nada.
export const addSecretIngredient = (friendsList, myList) => {
  myList.push(friendsList.toReversed()[0])
}

// Devuelve un objeto con la receta adaptada para la cantidad
// de porciones pasada como parametro. El objeto recipe no
// puede ser modificado. La receta pasada como parámetro es
// para 2 porciones.
export const scaleRecipe = (recipe, portions) => {
  const newRecipe = { ...recipe }
  for (const key in newRecipe) {
    newRecipe[key] *= (portions / 2)
  }

  return newRecipe
}

console.log(preparationTime(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'], 4))
console.log(quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']))
console.log(scaleRecipe({ noodles: 200, sauce: 0.5, mozzarella: 1, meat: 100 }, 4))
