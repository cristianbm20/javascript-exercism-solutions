// Devuelve la cadena de ADN convertida en ARN
// con sus equivalencias. GCTA -> CGAU
export const toRna = dna => {
  const RNA = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  }

  return dna === undefined
    ? 'No input DNA'
    : dna.split('').map(nucleotide => RNA[nucleotide]).join('')
}

console.log(toRna('ACTG'))
console.log(toRna(''))
console.log(toRna())
