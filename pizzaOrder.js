// Concepto: Recursividad.

// Tabla de precios
const PIZZA_PRICES = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
  ExtraSauce: 1,
  ExtraToppings: 2
}

// Clase PizzaOrder
class PizzaOrder {
  constructor (pizza, ...extras) {
    this.pizza = pizza
    this.extras = extras
  }
}

// Devuelve el precio total de los parámetros
// pasados.
export const pizzaPrice = (pizza, ...extras) => {
  if (extras.length === 0) return PIZZA_PRICES[pizza]

  return PIZZA_PRICES[extras[0]] + pizzaPrice(pizza, ...extras.slice(1))
}

// Devuelve el precio total de un array de PizzaOrders
export const orderPrice = pizzaOrders => {
  const totalPrice = pizzaOrders.reduce((price, currentOrder) => {
    return price + pizzaPrice(currentOrder.pizza, ...currentOrder.extras)
  }, 0)

  return totalPrice
}

console.log(pizzaPrice('Caprese', 'ExtraToppings', 'ExtraToppings', 'ExtraToppings', 'ExtraSauce'))

const margheritaOrder = new PizzaOrder('Margherita', 'ExtraToppings', 'ExtraSauce')
const capreseOrder = new PizzaOrder('Caprese', 'ExtraSauce')
console.log(orderPrice([margheritaOrder, capreseOrder]))
