// buat object {}, key:value
const user = {
  nama: "Hasna",
  umur: 19,
  jurusan: "Teknik Informatika",
};
console.log(user.nama);
console.log(user["jurusan"]);

// looping data object
for (const kunci in user) {
  console.log(`Key: ${kunci} Value: ${user[kunci]}`);
};
