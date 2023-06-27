/**
 * membuat komponen Main
 * menampilkan Konten Utama
 */
function Main() {
  // mengirim Props name="" ke komponen Hello
  return (
    <main>
      <Main name="Hasna" />
      <Main name="Jaemin" />
      <Main name="Jeno" />
      <Main name="Karina" />
      <Main name="Yeri" />
    </main>
  );
}

export default Main;
