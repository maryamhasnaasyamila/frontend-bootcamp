// spread = memishkan array, menjadi item tersendiri

// buat array
const mente = ["Hasna", "Alifah"];
// array 2
const newMente = [...mente, "Yuyun", "Deva"];

console.log(newMente);

// buat objek
const user = {
    name: "Hasna",
    age: 22,
    major: "Informatika",
};

const newUser = {
    ...user,
    hobby: "read"
}
console.log(newUser);
