//object pada javascript
// 1.object literal

// let biodata = {
//     nama: 'Galuh Prahadi Gumelar',
//     jk: 'laki-laki',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Selamat makan ${this.nama}, energi anda sekarang ${this.energi}`)
//     }
// }

// let biodata2 = {
//     nama: 'Gumelar',
//     jk: 'laki-laki',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Selamat makan ${this.nama}, energi anda sekarang ${this.energi}`)
//     }
// }

// 2. function declaration
// function Biodata(nama, energi) {
//     let biodata = {};
//     biodata.nama = nama;
//     biodata.energi = energi;

//     biodata.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Selamat makan ${this.nama}, energi anda sekarang ${this.energi}`)
//     }
//     biodata.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Selamat bermain ${this.nama}, energi anda sekarang ${this.energi}`)
//     }
//     return biodata
// }

// let Galuh = Biodata('galuh', 10);
// let Gumelar = Biodata('gumelar', 10);

// 3. constructor function
//keyword new

function Biodata(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(
      `Selamat makan ${this.nama}, energi anda sekarang ${this.energi}`
    );
  };
  this.main = function (jam) {
    this.energi -= jam;
    console.log(
      `Selamat bermain ${this.nama}, energi anda sekarang ${this.energi}`
    );
  };
}

let galuh = new Biodata("galuh", 20);
