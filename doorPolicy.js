// Devuelve la primera letra del string pasado.
export const frontDoorResponse = line => line[0]

// Devuelve la palabra pasada con la primera
// letra mayuscula y el resto minusculas.
export const frontDoorPassword = word => {
  word = word.toLowerCase()
  const firstLetter = word[0].toUpperCase()
  return firstLetter + word.slice(1)
}

// Devuelve la última letra de la palabra pasada.
export const backDoorResponse = line => {
  line = line.trim()
  return line.slice(line.length - 1)
}

// Devuelve la palabra pasada con la priemera letra
// mayúscula y el resto minúsculas y añade al final
// ', please'
export const backDoorPassword = word => {
  const firstLetter = word[0].toUpperCase()
  return firstLetter + word.slice(1).toLowerCase() + ', please'
}

console.log(frontDoorPassword('SHIRE'))
console.log(backDoorResponse('Hello world  '))
console.log(backDoorPassword('hORSE'))
