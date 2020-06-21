// function expression

// const tampilNama = function (name) {
//     alert(`halo nama saya ${name}`);
//  return `halo nama saya ${name}`;
// }

// tampilNama('Galuh');

// ---------------------------------------//

// Arrow function 

// 1. satu parameter/atribute

// const tampilNama = (name) => {
//     // alert(`halo nama saya ${name}`);
//     return `halo nama saya ${name}`;
// }

// console.log(tampilNama('Galuh'));

// 2. dua parameter/atribute

// const sayHello = (name, umur) => {
//     return ` Halo nama saya ${name}, saya berumur ${umur}`;
// }

// console.log(sayHello('Galuh', 23));


// 3. implicite return

// const sayHello = name => `Halo nama saya ${name} `;

// console.log(sayHello('Galuh'))


// const sayHello = () => 'Hello world';
// console.log(sayHello());



// ---------------------------------------//

//Example

let mahasiswa = ['Galuh Prahadi', 'Aditya', 'Erik Made'];

// let jmlHuruf = mahasiswa.map(function (nama) {
//     return nama.length
// });

// console.log(jmlHuruf);


//menggunakan arrow function
// let jmlHuruf = mahasiswa.map(nama => {
//     return nama.length
// });

// console.log(jmlHuruf);


//ubah ke object
let jmlHuruf = mahasiswa.map(nama => ({
    name: nama,
    jml: nama.length
}));
console.table(jmlHuruf);