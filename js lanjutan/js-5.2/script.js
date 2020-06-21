// 1. HTML Fragments

// const mhs = {
//     nama: 'Galuh Prahadi GUmelar',
//     umur: 23,
//     email: 'galuhprahadi96@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span>Umur : ${mhs.umur}</span><br>
//     <span>Email : ${mhs.email}</span>
// </div>`;

// document.body.innerHTML = el;



// 2.Looping
// const mhs = [{
//         nama: 'Galuh Prahadi Gumelar',
//         umur: 23,
//         email: 'galuhprahadi96@gmail.com'
//     },
//     {
//         nama: 'Aditya',
//         umur: 17,
//         email: 'aditya@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
// ${mhs.map( m => `<ul>
//     <li>Nama : ${m.nama}</li>
//     <li>Umur : ${m.umur}</li>
//     <li>Email : ${m.email}</li>
// </ul>`).join('')}
// </div>`;


// 3.Conditional
// Ternary

// const lagu = [{
//         judul: 'TETAP DALAM JIWA',
//         penyanyi: 'Isyana'
//     },
//     {
//         judul: 'BAIK BAIK SAYANG',
//         penyanyi: 'Wali'
//     },
//     {
//         judul: 'SUARA',
//         penyanyi: 'Hijau Daun',
//         feat: 'Luna Maya'
//     }
// ]

// const el = `<div class="Album">
//     ${lagu.map( a => `<ul>
//         <li>Penyanyi : ${a.penyanyi}</li>
//         <li>judul : ${a.judul}, ${a.feat ? `Feat ${a.feat}`: ''}</li>
//     </ul>`)}
// </div>`;



// 4.Nested
//HTML Fragment Bersarang
const mhs = {
    nama: 'Galuh Prahadi Gumelar',
    umur: 23,
    email: 'galuhprahadi96@gmail.com',
    matkul: [
        'Rekayasa perangkat lunak',
        'Ansi',
        'Dasar Pemrograman'
    ]
};

function cetakMataKuliah(matkul) {
    return `
    <ul>
        ${matkul.map( m => `<li>${m}</li>`).join('')}
    </ul>
    `
}
const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span>Umur : ${mhs.umur}</span><br>
    <span>Email : ${mhs.email}</span>
    
    <h3>Matkul</h3>
    ${cetakMataKuliah(mhs.matkul)}
</div>`;



document.body.innerHTML = el;