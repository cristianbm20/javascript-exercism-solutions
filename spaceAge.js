// Recibe como parametro un planeta y un tiempo en
// segundos y devuelve el tiempo en años que habría
// transcurrido en el planeta pasado.
export const age = (planet, ageInSec) => {
  const PLANETS = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  }

  const earthYearInSec = 31557600
  const ageInYears = ageInSec / earthYearInSec

  return Object.keys(PLANETS).includes(planet)
    ? parseFloat((ageInYears / PLANETS[planet]).toFixed(2))
    : 'Invalid planet input'
}

console.log(age('pluto', 2134835688))
console.log(age('mercury', 2134835688))
console.log(age('earth', 1000000000))
console.log(age())
