// Annalyn quiere rescatar a su amiga secuestrada por el caballero y el
// arquero. Código para la lógica de las acciones que puede hacer. Esta
// sintaxis es la más moderna con arrow functions además de ternaria en
// la última función.

// Acción de ataque rápido. El caballero debe estar dormido para ejecutarla.
export const canExecuteFastAttack = knightIsAwake => !knightIsAwake

// Acción de espiar. Al menos uno de ellos debe estar despierto.
export const canSpy = (knightIsAwake, archerIsAwake, prisonerIsAwake) =>
  knightIsAwake || archerIsAwake || prisonerIsAwake

// Acción de mandar una señal a la prisionera. El arquero debe estar dormido
// y la prisionera despierta.
export const canSignalPrisoner = (archerIsAwake, prisonerIsAwake) =>
  !archerIsAwake && prisonerIsAwake

// Acción de rescatar a la prisionera. Dependerá de si Annalyn está
// acompañada de su perro o no. Si lo está, el arquero debe estar
// dormido. Si el perro no está, la prisionera debe estar despierta
// y el caballero y el arquero dormidos.
export const canFreePrisoner = (knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) =>
  petDogIsPresent
    ? !archerIsAwake
    : prisonerIsAwake && !knightIsAwake && !archerIsAwake

console.log(canFreePrisoner(false, false, false, true))
