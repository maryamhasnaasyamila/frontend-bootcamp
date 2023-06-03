// membuat variabel binatang
const animals = ["kelinci", "kucing", "rubah", "beruang", "singa"];

// akses berdsarkan index, index dimulai dari 0
// console.log(animals[1], animals[0]);

// // menampilkan data tertentu 
// // for (let i = 0; i < 4; i++) {
// //    console.log(`Hewan: ${animals[i]}`);
    
// // }

// // array.length
// for (let i = 0; i < animals.length; i++) {
//   console.log(`Hewan: ${animals[i]}`);
// }

// membuat looping for of
for (const animal of animals) {
    console.log(`Hewan: ${animal}`);
}