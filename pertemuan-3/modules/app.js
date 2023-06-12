// Membuat array of object
const users = [
    { name: "Jonas", age: 15 },
    { name: "Michael", age: 40 },
    { name: "Hannah", age: 35 },
];

/**
 * Membuat User Controller.
 * Terdapat method index dan store.
 */
const index = () => {
    console.log("Index - Get All Users");
    users.forEach(function (user) {
        console.log(user);
    });
};
const store = (user) => {
    users.push(user);
};

/**
 * Membuat Fungsi Utama
 * Fungsi dijalankan pertamak kali
 */

const main = () => {
    const user = { name: "Martha", age: 22 };

    index();
    store(user);
    index();
};

main();