# NodeJS

## Como funciona ?

- Corre en V8 de Google, es un interprete estilo (JVM) que convierte el JS en binario.
- Es de tipo Non Blocking

### Blocking vs Non Blocking I/O

Al final es sync vs async.

# Fundamentos Node

## Nodemon

- Instalacion

	```bash
    npm install -g nodemon
	```

- Uso

	```bash
    nodemon <<app.js>>
	```

- Es un watcher de cambios para los archivos de la app node

## Let vs Var

* Var

	1. Multiples inicializaciones
	2. Scope global dentro del archivo
	3. Valores reemplazados independiente del scope

* Let

	1. Solo una inicializacion
	2. Scope focalizado en los corchetes de uso
	3. Valores acorde al scope donde se encuentre.

## Destructuracion

- Uso de let para extrer una propiedad de un objeto

## Callbacks

