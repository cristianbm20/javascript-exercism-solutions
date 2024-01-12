// Devuelve true o false en funcion de si la
// cadena pasada como argumento es un pangrama.
// Un pangrama es un texto que consta de todas
// las letras de un alfabeto.
export const isPangram = text => {
  const ALPHABET_SIZE = 26

  return new Set(text.toLowerCase().match(/[a-z]/g)).size === ALPHABET_SIZE
}

console.log(isPangram('hoLa 234423 que tal?'))
console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
