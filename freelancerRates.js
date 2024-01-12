// Métodos para calcular el coste del trabajo de un
// freelancer.

export const dayRate = ratePerHour => ratePerHour * 8

// Calcula los días que se trabajarán hasta que se agote el presupuesto
// fijado.
export const daysInBudget = (budget, ratePerHour) => Math.floor(budget / ratePerHour / 8)

// Se aplica un descuento para meses completos de 22 días. Los días
// restantes se calculan con la tarifa estandar.
export const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
  const monthsNumber = Math.floor(numDays / 22)
  const remainingDays = numDays % 22
  const priceOfMonths = ratePerHour * 8 * 22 * monthsNumber
  const discountAmount = priceOfMonths * discount
  const priceWithDiscount = priceOfMonths - discountAmount
  const priceOfRemainingDays = remainingDays * 8 * ratePerHour

  return Math.ceil(priceWithDiscount + priceOfRemainingDays)
}

console.log(daysInBudget(20000, 89))
console.log(priceWithMonthlyDiscount(89, 230, 0.42))
