// filter, map, reduce

const angka = [
    2,
    1,
    9,
    -3,
    5,
    6,
    8,
    7,
    5,
    10
];

// mencari angka >= 3

//for
// const newAngka = []
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i])
//     }
// }

// console.log(newAngka);


// filter
// const newAngka = angka.filter(a => a >= 3);

// console.log(newAngka)


// map
//kalikan angka kali 2
// const newAngka = angka.map(a => a * 2)

// console.log(newAngka)



// reduce
//jumlahkan seluruh elemen pada array

// const newAngka = angka.reduce((accumulator, currentvalue) => accumulator + currentvalue)

// console.log(newAngka)



// method chaining
// cari angka > 5
const newAngka = angka.filter(a => a <= 5) // 2, 1, -3, 5, 5
    // kalikan 3
    .map(a => a * 3) // 3, 3, -6, 15, 15
    // jumlahkan
    .reduce((acc, cur) => acc + cur); //30

console.log(newAngka);