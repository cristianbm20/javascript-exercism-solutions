const VEHICLES_WITH_LICENSE = ['car', 'truck']

// Devuelve true o false en funcion de si el vehiculo pasado
// como parametro necesita carnet. Solo car y truck lo necesitan.
export const needsLicense = kind => VEHICLES_WITH_LICENSE.includes(kind)

// Elige como opción la que aparezca antes en el diccionario.
// Entre seat y audi elegirá audi.
export const chooseVehicle = (option1, option2) =>
  (option1 > option2 ? option2 : option1) + ' is clearly the better choice.'

// Devuelve el precio del vehiculo en funcion de los años que
// tenga. Si tiene menos de 3 años su precio será del 80% del
// precio original. Entre 3 y 10 del 70% y con mas de 10 del
// 50%.
export const calculateResellPrice = (originalPrice, age) =>
  age < 3
    ? originalPrice * 0.8
    : age <= 10
      ? originalPrice * 0.7
      : originalPrice / 2
