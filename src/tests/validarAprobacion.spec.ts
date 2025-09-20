
import { validarAprobacion } from '../domain/validarAprobacion'; 

describe('Pruebas para la función validarAprobacion', () => {
    
    test('Debería aprobar cuando el examen es mayor o igual a 60 y las tareas son mayores o iguales a 70', () => {
        expect(validarAprobacion(70, 75)).toBe('Aprobado');
        expect(validarAprobacion(60, 70)).toBe('Aprobado');
    });
    
    test('Debería no aprobar cuando el examen es menor a 60 y las tareas son mayores o iguales a 70', () => {
        expect(validarAprobacion(50, 80)).toBe('No aprueba');
    });

    test('Debería no aprobar cuando el examen es mayor o igual a 60 y las tareas son menores a 70', () => {
        expect(validarAprobacion(70, 65)).toBe('No aprueba');
    });

    test('Debería no aprobar cuando el examen es menor a 60 y las tareas son menores a 70', () => {
        expect(validarAprobacion(55, 65)).toBe('No aprueba');
    });

    test('Debería no aprobar cuando el examen es menor a 60 y las tareas son menores a 70 (caso límite)', () => {
        expect(validarAprobacion(59, 69)).toBe('No aprueba');
    });

    test('Debería aprobar cuando el examen es exactamente 60 y las tareas exactamente 70', () => {
        expect(validarAprobacion(60, 70)).toBe('Aprobado');
    });

});
