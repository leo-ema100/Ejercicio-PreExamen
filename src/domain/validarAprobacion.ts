
type Resultado = 'Aprobado' | 'No aprueba';

export function validarAprobacion(examen: number, tareas: number): Resultado {
    if (examen < 60 || tareas < 70) {
        return 'No aprueba';
    }
    return 'Aprobado';
}