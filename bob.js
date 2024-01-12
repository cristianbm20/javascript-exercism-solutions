// Devuelve una frase en funcion de la frase pasada
// como argumento.
export const hey = message => {
  const RESPONSES = {
    question: 'Sure.',
    capital: 'Whoa, chill out!',
    capitalQuestion: 'Calm down, I know what I\'m doing!',
    undefined: 'Fine. Be that way!',
    whatever: 'Whatever.'
  }

  if (!message || message.trim() === '') return RESPONSES.undefined

  message = message.trim()
  const isQuestion = message.endsWith('?')
  const isShouting = message === message.toUpperCase() && /[A-Z]/.test(message)
  const noContainsLetters = /^[^a-zA-Z]+$/.test(message)

  return isShouting
    ? isQuestion
      ? RESPONSES.capitalQuestion
      : RESPONSES.capital
    : isQuestion
      ? RESPONSES.question
      : noContainsLetters
        ? RESPONSES.whatever
        : RESPONSES.whatever
}

console.log(hey('    '))
console.log(hey(''))
console.log(hey('HEY!'))
console.log(hey('What are you doing?'))
console.log(hey('WHAT ARE YOU DOING?'))
console.log(hey('WHAT ARE YOU ? DOING'))
console.log(hey('Hello'))
console.log(hey('1, 2, 3'))
console.log(hey('4?'))
console.log(hey(':) ?'))
