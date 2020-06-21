// template literal

// const nama = 'Galuh Prahadi';
// const umur = '24';
// console.log(`Halo nama saya ${nama}, umur saya ${umur}`);


// Embedded Exxpression 

// console.log(`${1+1}`);
// console.log(`${alert('halo')}`);
// console.log(`${(umur % 2 == 0)?'genap':'ganjil'}`)

// HTML Fragments

const mhs = {
    nama: 'Galuh Prahadi GUmelar',
    umur: 23,
    status: false
}

const el = `
<div>
    <ul>
        <li><h1>${mhs.nama}</h1></li>
        <li><h1>${mhs.umur}</h1></li>
    </ul>
</div>`;

console.log(el);