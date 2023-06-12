// buat objek
const user = {
    name: "Hasna",
    age: 22,
    major: "Informatika",

};

// simpan ke variable menggunakan destruct
const {name, age, major} = user;

console.log(age, name, major);