// 4. Object.Create


const methodBiodata = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(
            `Selamat makan ${this.nama}, energi anda sekarang ${this.energi}`
        );
    };
    main: function (jam) {
        this.energi -= jam;
        console.log(
            `Selamat bermain ${this.nama}, energi anda sekarang ${this.energi}`
        );
    };
}

function Biodata(nama, energi) {
    let biodata = Object.create(methodBiodata);
    biodata.nama = nama;
    biodata.energi = energi;
}

let galuh = new Biodata("galuh", 20);