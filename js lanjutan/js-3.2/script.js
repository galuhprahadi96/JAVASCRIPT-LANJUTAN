//konsep this pada arrow function

// constructor function

// const Mahasiswa = function () {
//     this.nama = 'Galuh';
//     this.umur = '23';
//     this.sayHello = function () {
//         console.log(`Halo nama saya ${this.nama}, umur ${this.umur}`)
//     };
// }
// const galuh = new Mahasiswa();



// arrow function

// const Mahasiswa = function () {
//     this.nama = 'Galuh';
//     this.umur = '23';
//     this.sayHello = () => {
//         console.log(`Halo nama saya ${this.nama}, umur ${this.umur}`)
//     };
// }

// const galuh = new Mahasiswa();


// object literal
// const mhs1 = {
//     name: 'Galuh Prahadi',
//     umur: '23',
//     sayHello: () => {
//         console.log(`Halo nama saya ${this.name}, umur ${this.umur}`)
//         // console.log(this);
//     }
// }



// ---------------------------------- //

// example 1

// const Mahasiswa = function () {
//     this.nama = 'Galuh';
//     this.umur = '23';
//     this.sayHello = function () {
//         console.log(`Halo nama saya ${this.nama}, umur ${this.umur}`)
//     };

//     setInterval(() => {
//         console.log(this.umur++)
//     }, 1000)
// }
// const galuh = new Mahasiswa();

// example 2

const box = document.querySelector('.box');
box.addEventListener('click', function () {

    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu]
    }

    this.classList.toggle(satu)

    setTimeout(() => {
        this.classList.toggle(dua)
    }, 600)
})