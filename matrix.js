// Crea una clase de matriz con dos metodos
// que devuelvan filas y columnas
export class Matrix {
  constructor (matrixString) {
    this._rows = matrixString.split('\n').map(row => row.split(' ').map(Number))
  }

  get rows () {
    return this._rows
  }

  get columns () {
    return this._rows[0].map((_, i) => this._rows.map(row => row[i]))
  }
}

const matrix = new Matrix('9 8 7\n5 3 2\n6 6 7')
console.log(matrix.columns)
const matrix1 = '1'
console.log(matrix1.columns)
