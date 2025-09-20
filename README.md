# El enunciado, clases de equivalencia y tabla de decision se encuentra en la carpeta Doc
## Guía de Configuración para Proyecto con Vite, TypeScript y Jest

Esta guía detalla los pasos para configurar un proyecto con Vite, TypeScript y Jest, incluyendo la instalación de dependencias, configuración de archivos y scripts para pruebas.

## 1. Crear el Proyecto
Inicializa un nuevo proyecto utilizando Vite:

```bash
npm create vite
```

Sigue las instrucciones del asistente para configurar el proyecto, seleccionando el framework y la variante (por ejemplo, TypeScript).

## 2. Instalar Dependencias
Instala las dependencias necesarias para Jest y TypeScript:

```bash
npm install --save-dev jest@latest ts-jest@latest @types/jest@latest
```

- **jest**: Framework de pruebas.
- **ts-jest**: Transformador para ejecutar pruebas de TypeScript con Jest.
- **@types/jest**: Tipos de TypeScript para Jest, para mejor soporte en el editor.

## 3. Configurar Jest
Agrega un archivo `jest.config.js` en la raíz del proyecto con la siguiente configuración:

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'ts'],
};
```

### Explicación de `jest.config.js`:
- **preset: 'ts-jest'**: Usa el preset de `ts-jest` para manejar archivos TypeScript.
- **testEnvironment: 'node'**: Configura el entorno de pruebas como Node.js (cámbialo a `jsdom` si pruebas en un entorno de navegador).
- **transform**: Indica que los archivos `.ts` serán transformados por `ts-jest`.
- **moduleFileExtensions**: Permite a Jest reconocer archivos `.js` y `.ts`.

## 4. Modificar `package.json`
Elimina la propiedad `"type": "module"` del archivo `package.json` para usar CommonJS, ya que Jest funciona mejor con este módulo en esta configuración.

Agrega los siguientes scripts en la sección `"scripts"` de `package.json`:

```json
"test": "jest",
"test:cov": "jest --coverage"
```

### Explicación de los scripts:
- **npm run test**: Ejecuta todas las pruebas definidas en el proyecto usando Jest.
- **npm run test:cov**: Ejecuta las pruebas y genera un informe de cobertura de código, útil para evaluar qué partes del código están cubiertas por las pruebas.

## 5. Configurar TypeScript
Modifica el archivo `tsconfig.json` en la raíz del proyecto para que sea compatible con Jest:

```json
{
  "compilerOptions": {
    "module": "CommonJS",  // Usar CommonJS para trabajar con Jest
    "target": "ESNext",    // Compilar a ESNext para compatibilidad
    "moduleResolution": "Node",
    "esModuleInterop": true,  // Habilitar interop con ESModules
    "skipLibCheck": true,
    "strict": true
  },
  "include": ["src/**/*.ts"]
}
```

### Explicación de `tsconfig.json`:
- **module: "CommonJS"**: Configura TypeScript para usar CommonJS, necesario para compatibilidad con Jest.
- **target: "ESNext"**: Compila el código a la versión más reciente de JavaScript para aprovechar las últimas características.
- **moduleResolution: "Node"**: Usa la resolución de módulos de Node.js.
- **esModuleInterop: true**: Facilita la interoperabilidad entre CommonJS y ES Modules.
- **skipLibCheck: true**: Omite la verificación de tipos en archivos de definición para acelerar la compilación.
- **include**: Especifica que solo los archivos `.ts` en la carpeta `src` serán compilados.

## 6. Ejecutar Pruebas
Usa los siguientes comandos para ejecutar las pruebas:

```bash
npm run test
```

Para generar un informe de cobertura:

```bash
npm run test:cov
```
