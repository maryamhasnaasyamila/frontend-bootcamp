console.log("Mulai React");

/***
 * Membuat Component Hello
 * Mencetak UI (elements)
 */

// Komponen Hello 
// Komponen mirip dengan function, komponen bisa menerima paramater/input (props)
function Hello() {
  // diluar return adalah javascript biasa
  const nama = "Hasna";
  const major = "Teknik Informatika";

  // di dlm return adalah JSX
  // JSX = merepresentasikan elemen/UI yang ingin ditampilkan ke User
  return (
    // Komponen = sususan dari berbagai elemen yang membentuk suatu UI
    <div>
      <h2>Hello React</h2>
      <p>Saya {nama} - Frontend Engineer</p>
      <p>Jurusan saya {major}</p>
    </div>
  );
}

// Element = bagian terkecil yang ingin kita tampilkan ke website
const name = "Hasna";
const judul = <h1>Hello React - {name}</h1>;

/**
 * Mencetak Component Hello ke div root
 */
ReactDOM.render(<Hello />, document.getElementById("root"));

/**
 * Mencetak Element Hello React
 */
ReactDOM.render(judul, document.getElementById("root"));
