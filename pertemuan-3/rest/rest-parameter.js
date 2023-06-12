// rest = menggabungkan item menjadi array

// buat fungsi tambah
function tambah(...numbers) {
    // hasil 
    let hasil = 0;

    // looping
    for (const number of numbers){
        hasil = hasil + number;
    }
    return hasil;

}

console.log(tambah(1, 2, 5));
