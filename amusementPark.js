// Manejo de objetos.
// Devuelve un objeto creado a partir de los parametros.
export const createVisitor = (name, age, ticketId) => {
  return { name, age, ticketId }
}

// Pasa a null la propiedad ticketId del objeto pasado.
export const revokeTicket = visitor => {
  visitor.ticketId = null

  return visitor
}

// Devuelve un mensaje en funcion del valor de la propiedad
// ticketId en el objeto tickets.
export const ticketStatus = (tickets, ticketId) => {
  if (Object.prototype.hasOwnProperty.call(tickets, ticketId)) {
    return tickets[ticketId] === null ? 'not sold' : `sold to ${tickets[ticketId]}`
  }

  return 'unknown ticket id'
}

// Devuelve un mensaje en funcion del valor de la propiedad
// tickedId en el objeto tickets version simplificada.
export const simpleTicketStatus = (tickets, ticketId) => {
  if (Object.prototype.hasOwnProperty.call(tickets, ticketId)) {
    return tickets[ticketId] === null ? 'invalid ticket !!!' : `${tickets[ticketId]}`
  }

  return 'invalid ticket !!!'
}

// Devuelve la propiedad gtc.version si el objeto la tiene.
// Si no devuelve undefined.
export const gtcVersion = visitor => {
  return visitor?.gtc?.version
}

console.log(createVisitor('Cristian Bermudez', 28, 'H32AZ123'))
console.log(revokeTicket({ name: 'Cristian Bermudez', age: 28, ticketId: 'H32AZ123' }))
console.log(ticketStatus({ '0H2AZ123': null, '23LA9T41': 'Verena Nardi' }, 'vdsfvdsv'))
console.log(simpleTicketStatus({ '0H2AZ123': null, '23LA9T41': 'Verena Nardi' }, '23LA9T41'))
console.log(gtcVersion({ name: 'Verena Nardi', age: 45, ticketId: 'H32AZ123' }))
