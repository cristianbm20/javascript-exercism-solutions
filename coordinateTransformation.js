// Concepto: Closures.
// Funciones que devuelven funciones.

// Devuelve una funcion que suma los parametros
// pasados a la primera con los pasados a la segunda
export const translateCoords = (x, y) =>
  (coordX, coordY) => [coordX + x, coordY + y]

const translatePosition = translateCoords(2, 0)
console.log(translatePosition(4, 8))

// Devuelve una funcion que multiplica los parametros
// pasados en la primera por los pasados a la segunda
export const scaleCoords = (x, y) =>
  (coordX, coordY) => [coordX * x, coordY * y]

const scalePosition = scaleCoords(2, 2)
console.log(scalePosition(3, -6))

// Funcion que recibe dos funciones como parametros.
// Se devuelve una funcion que ejecuta las funciones
// f y luego la funcion g con la salida de f.
export const composeTransform = (f, g) => {
  return function (x, y) {
    const [fx, fy] = f(x, y)

    return g(fx, fy)
  }
}

const composedTransformations = composeTransform(translateCoords(4, 8), scaleCoords(2, 2))
console.log(composedTransformations(1, 3))

// Concepto: Memoizacion.
// Funcion que memoriza los parámetros que recibe para
// devolver el resultado sin hacer cálculos en caso de
// recibir los mismos parametros a continuacion. Se da
// por hecho que serán dos parámetros x e y.
export const memoizeTransform = (f) => {
  let lastX, lastY, lastResult

  return function (x, y) {
    if (lastX === x && lastY === y) {
      return { 'Resultado recordado': lastResult }
    }

    lastX = x
    lastY = y
    lastResult = f(x, y)

    return { 'Resultado calculado': lastResult }
  }
}

const memoizedTransformation = memoizeTransform(scaleCoords(4, 3))
console.log(memoizedTransformation(10, 10))
console.log(memoizedTransformation(10, 10))
