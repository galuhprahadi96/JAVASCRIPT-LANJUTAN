// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'))

// pilih hanya Javascript Lanjutan
let jsLanjut = videos.filter((video) => {
        return video.textContent.includes('Javascript Lanjutan');
    })

    // ambil durasi masing2 video
    .map(item => item.dataset.duration)

    // ubah durasi menjadi int, ubah menit menjadi detik
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));
        return parts[0] * 60 + parts[1];
    })

    // jumlah semua detik

    .reduce((total, detik) => total + detik);

// ubah format jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM

// durasi
const durasi = document.querySelector('.total-durasi');
durasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

// jml video
const jmlVideo = videos.filter(video => video.textContent.includes('Javascript Lanjutan')).length;

const totalvideo = document.querySelector('.jumlah-video');
totalvideo.textContent = `${jmlVideo} video`

// console.log(jmlVideo);