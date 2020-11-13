let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneracion',
    getNombre: function () {
        return `${this.nombre} ${this.apellido} - Su poder es: ${this.poder}`;
    }
};


console.log(deadpool.getNombre());

let {nombre: name, apellido, poder} = deadpool;

console.log(name);
