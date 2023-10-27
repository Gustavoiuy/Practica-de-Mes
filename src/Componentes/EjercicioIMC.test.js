// Importa la función que deseas probar
const EjercicioIMC = require('./EjercicioIMC');

// Prueba básica
test('Calcula el IMC correctamente', () => {
  // Llama a la función y comprueba si el resultado es el esperado
  expect(EjercicioIMC(70, 1.75)).toBe(22.86);
});
