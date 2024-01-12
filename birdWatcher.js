// Uso obligatorio de bucles for.
// Devuelve el recuento total de pájaros del array pasado.
export const totalBirdCount = (birdsPerDay) => {
  let count = 0
  for (let i = 0; i < birdsPerDay.length; i++) {
    count += birdsPerDay[i]
  }

  return count
}

// Devuelve el recuento total de pájaros de una semana
// específica.
export const birdsInWeek = (birdsPerDay, week) => {
  let count = 0
  for (let i = 7 * (week - 1); i < 7 * week; i++) {
    count += birdsPerDay[i]
  }

  return count
}

// Devuelve el array de pájaros sumando uno a cada
// elemento par del array.
export const fixBirdCountLog = (birdsPerDay) => {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i]++
  }

  return birdsPerDay
}

const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]

console.log(totalBirdCount(birdsPerDay))
console.log(birdsInWeek(birdsPerDay, 1))
console.log(fixBirdCountLog(birdsPerDay))
