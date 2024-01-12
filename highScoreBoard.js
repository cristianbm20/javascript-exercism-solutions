// Manejo de objetos.
export const addToObject = (obj, key, value) => {
  obj[key] = value
  return obj
}

export const removeFromObj = (obj, key) => {
  delete obj[key]
  return obj
}

export const updateScore = (obj, key, value) => {
  obj[key] += value

  return obj
}

export const plus100 = (obj) => {
  for (const key in obj) {
    obj[key] += 100
  }

  return obj
}

console.log(addToObject({ 'The Best Ever': 1000000 }, 'new player', 200000))
console.log(removeFromObj({ 'The Best Ever': 1000000, 'new player': 200000 }, 'new player'))
console.log(updateScore({ 'The Best Ever': 1000000, 'new player': 200000 }, 'new player', 200000))
console.log(plus100({ 'The Best Ever': 1000000, 'new player': 200000 }))
