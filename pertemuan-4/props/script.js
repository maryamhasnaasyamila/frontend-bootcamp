function Hello(props) {
  console.log(props);

  // melakukan destructing props
  const { name } = props;
  // di dlm return adalah JSX
  // JSX = merepresentasikan elemen/UI yang ingin ditampilkan ke User
  return (
    // Komponen = sususan dari berbagai elemen yang membentuk suatu UI
    <div className="hello">
      <h2>Hello React</h2>
      <p>Saya {name} - Frontend Engineer</p>
    </div>
  );
}

/**
 * membuat komponen Header
 * menampilkan Navigasi
 */
function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

/**
 * membuat komponen Main
 * menampilkan Konten Utama
 */
function Main() {
  // mengirim Props name="" ke komponen Hello
  return (
    <main>
      <Hello name="Hasna" />
      <Hello name="Jaemin" />
      <Hello name="Jeno" />
      <Hello name="Karina" />
      <Hello name="Yeri" />
    </main>
  );
}

/**
 * membuat komponen Footer
 * menampilkan Footer Website
 */
function Footer() {
  return (
    <footer>
      <h2>Copyright hasnaroot22</h2>
      <p>Dibuat menggunakan ReactJS</p>
    </footer>
  );
}

/**
 * membuat komponen App
 * menampilkan semua konten website (Header, Main, Footer)
 */
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
