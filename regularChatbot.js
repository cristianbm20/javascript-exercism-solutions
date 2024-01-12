// Concepto: Expresiones Regulares

// Devuelve true o false en funcion de si
// la frase comienza con chatbot
export const isValidCommand = command =>
  /^chatbot/i.test(command)

// Elimina de la frase pasada las palabras
// emoji seguidas de numeros
export const removeEmoji = message =>
  message.replace(/emoji\d+/gi, '')

// Comprueba que el numero de telefono pasado
// siga el formato (+##) ###-###-###
export const checkPhoneNumber = number => {
  const regex = /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/
  return regex.test(number)
}

// Devuelve la url o urls presentes en la frase
// pasada como argumento
export const getURL = userInput =>
  userInput.match(/(https?:\/\/)?[\w\-.]+\.\w+/g)

// Devuelve la frase 'Nice to meet you' seguida
// del nombre pasado como argumento. El nombre
// pasado sigue el formato apellido, nombre.
export const niceToMeetYou = fullName => {
  const name = fullName.split(/[,\s]+/)
  return `Nice to meet you, ${name[1]} ${name[0]}`
}

const quote = 'Chatbot, where is the closest pharmacy?'
const quote1 = 'I love emoji4387 playing videogames emoji3465 its one of my hobbies'
const phoneNumber = '(+34) 625-838-067'
const phoneNumber1 = '(+34) 625-83-80-67'
console.log(isValidCommand(quote))
console.log(removeEmoji(quote1))
console.log(checkPhoneNumber(phoneNumber))
console.log(checkPhoneNumber(phoneNumber1))
console.log(getURL('I learned a lot from http://exercism.com and www.khanacademy.org'))
console.log(niceToMeetYou('Smith, John'))
