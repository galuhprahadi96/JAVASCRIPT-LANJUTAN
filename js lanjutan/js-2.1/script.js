// execution context, hoisting, scope

// console.log(nama);
// var nama = 'galuh';

// creation phase pada global content
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

//execution phase

var nama = 'galuh';
var umur = 23;

console.log(sayHello())

function sayHello() {
    return `Halo nama saya ${nama} saya ${umur} tahun`
}