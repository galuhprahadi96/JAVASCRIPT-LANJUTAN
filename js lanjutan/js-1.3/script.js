//prototype

// function biodata(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// biodata.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(
//         `Selamat makan ${this.nama}, energi anda sekarang ${this.energi}`
//     );
// }

// biodata.prototype.main = function (jam) {
//     this.energi -= jam;
//     console.log(
//         `Selamat bermain ${this.nama}, energi anda sekarang ${this.energi}`
//     );
// }

// biodata.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     console.log(
//         `Selamat tidur ${this.nama}, energi anda sekarang ${this.energi}`
//     );
// }

// let galuh = new biodata('galuh', 12)


//versi class
class Biodata {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Selamat makan ${this.nama}, energi anda sekarang ${this.energi}`;
    }

    main(jam) {
        this.energi -= jam;
        return `Selamat bermain ${this.nama}, energi anda sekarang ${this.energi}`
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `Selamat tidur ${this.nama}, energi anda sekarang ${this.energi}`;
    }
}

let galuh = new Biodata('galuh', 12)