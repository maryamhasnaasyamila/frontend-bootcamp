// FUNGSI EXPRESSION
// const cekUmur = function (lahir) {
//   const year = 2023;
//   const age = year - lahir;

//   return age;
// };
 
// menambahkan default di paramater "lahir = 2004"
// sehingga tidak perlu menulis paramet di console.log
const cekUmur = function(lahir = 2004){
    const year = 2023;
    const age = year - lahir;

    return age;
};
console.log(cekUmur());

// ARROW FUNCTION untuk menyingkat codingan 
// arrow function, mengganti function menjadi tanda "=>"
// const cekUmur = (lahir) => {
//     const year = 2023;
//     const age = year - lahir;
    
//     return age;
// };


// atau bisa langsung di return
// const cekUmur = (lahir) => {
//   return 2023 - lahir;
// };

// atau bisa langsung tulis setelah tanda "=>"
// const cekUmur = (lahir) => 2023 - lahir;

// console.log(cekUmur(2004));