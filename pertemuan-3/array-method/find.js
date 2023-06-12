const mente = [
    {
        nama: "Hasna",
        age: "19",
    },
    {
        nama: "Deva",
        age: "19",
    },
    {
        nama: "Ziyad",
        age: "21",
    },
    {
        nama: "Alifah",
        age: "19",
    },
];
//tampilin data berdasarkan kondi20
const foundMente = mente.find(function (mente) {
    return mente.age > 19;
});

const filteredMente = mente.filter(function (mente) {
    return mente.age > 19;
});

console.log(foundMente);
console.log(filteredMente);