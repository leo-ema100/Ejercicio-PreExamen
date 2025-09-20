# Tabla de decisiones

La siguiente tabla resume las decisiones que toma el sistema para la aprobación de la asignatura.

| **Condición**                 | **Examen Aprobado (≥ 60)** | **Examen Reprobado (< 60)** | **Tareas Aprobadas (≥ 70)** | **Tareas Reprobadas (< 70)** | **Aprobación de Asignatura** |
| ----------------------------- | -------------------------- | --------------------------- | --------------------------- | ---------------------------- | ---------------------------- |
| **Examen Aprobado (≥ 60)**    | V                          | F                           | V                           | F                            | Aprobado                     |
| **Examen Reprobado (< 60)**   | F                          | V                           | F                           | V                            | No aprueba                   |
| **Tareas Aprobadas (≥ 70)**   | V                          | F                           | V                           | F                            | Aprobado                     |
| **Tareas Reprobadas (< 70)**  | F                          | F                           | F                           | V                            | No aprueba                   |
| **Aprobación de Asignatura**  | V                          | F                           | V                           | F                            |                              |

### **Lógica de aprobación**
1. **Si el examen es menor a 60 y las tareas son menores a 70**, el estudiante **no aprueba**.
2. **Si el examen es mayor o igual a 60 y las tareas son menores a 70**, el estudiante **no aprueba**.
3. **Si el examen es menor a 60 y las tareas son mayores o iguales a 70**, el estudiante **no aprueba**.
4. **Si el examen es mayor o igual a 60 y las tareas son mayores o iguales a 70**, el estudiante **aprueba** la asignatura.
