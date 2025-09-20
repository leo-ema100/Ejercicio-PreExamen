# Enunciado: Validación de Aprobación de Estudiante

Un profesor califica a sus estudiantes según su nota final, que se calcula con base en dos criterios:

1. **Examen Final**: Puede ser aprobado o reprobado.
2. **Tareas**: Puede ser aprobado o reprobado.

Los criterios de aprobación son los siguientes:
- El **Examen Final** es aprobado si la calificación es **≥ 60**.
- Las **Tareas** son aprobadas si la calificación es **≥ 70**.
- Si un estudiante aprueba el examen final y las tareas, **aprueba la asignatura**.
- Si **no aprueba** el examen o las tareas, **no aprueba la asignatura**.

### **Casos a validar:**

1. Si el examen es **menor a 60** y las tareas son **mayores o iguales a 70**, el estudiante **no aprueba**.
2. Si el examen es **mayor o igual a 60** y las tareas son **menores a 70**, el estudiante **no aprueba**.
3. Si el examen es **menor a 60** y las tareas son **menores a 70**, el estudiante **no aprueba**.
4. Si el examen es **mayor o igual a 60** y las tareas son **mayores o iguales a 70**, el estudiante **aprueba** la asignatura.

### **Validación Esperada:**

- **Aprobado**: Si el examen ≥ 60 y las tareas ≥ 70.
- **No aprueba**: En cualquier otro caso donde no se cumplan ambas condiciones.

### **Objetivo del sistema:**
Crear una función que valide si un estudiante aprueba o no la asignatura con base en los resultados del examen y las tareas.
