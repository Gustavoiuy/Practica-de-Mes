// Importa la función que deseas probar
const calcularIMC = require('./EjercicioIMC');

// Prueba básica
test('Calcula el IMC correctamente', () => {
  // Llama a la función y comprueba si el resultado es el esperado
  expect(calcularIMC(70, 1.75)).toBe(22.86);
});
