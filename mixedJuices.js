// Devuelve el tiempo en minutos que tarda en preparar
// un zumo.
export const timeToMixJuice = name => {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5
    case 'Energizer':
    case 'Green Garden':
      return 1.5
    case 'Tropical Island':
      return 3
    case 'All or Nothing':
      return 5
    default:
      return 2.5
  }
}

// Devuelve la cantidad de limas que cortará para conseguir
// todas las rodajas que necesita para preparar los zumos.
// Recibe como parámetro la cantidad de rodajas que necesita
// y el array de limas. Coge las limas en orden del array limes.
export const limesToCut = (wedgesNeeded, limes) => {
  let wedges = 0
  let counter = 0
  while (wedges < wedgesNeeded && counter < limes.length) {
    switch (limes[counter]) {
      case 'small':
        wedges += 6
        break
      case 'medium':
        wedges += 8
        break
      case 'large':
        wedges += 10
        break
      default:
        break
    }
    counter++
  }
  return counter
}

// Con un tiempo en minutos pasado como parametro, devuelve los
// zumos del array pasados que no dará tiempo a preparar. Si se
// empieza a preparar un zumo se termina aunque necesite más
// tiempo del restante. Si da tiempo a preparar todos se devuelve
// un array vacio.
export const remainingOrders = (timeLeft, orders) => {
  while (timeLeft > 0 && orders.length > 0) {
    timeLeft -= timeToMixJuice(orders[0])
    orders.shift()
  }
  return orders
}

console.log(timeToMixJuice('Energizer'))
console.log(timeToMixJuice('Green Garden'))
console.log(limesToCut(8, ['small', 'small', 'large', 'small', 'medium', 'large']))
console.log(remainingOrders(5, ['Pure Strawberry Joy', 'Energizer', 'Green Garden']))
