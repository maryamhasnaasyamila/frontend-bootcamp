/**
 * membuat Component Hello
 * mencetak UI (elements)
 */

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

export default Hello;

// note:
/**
 * simpan component di dalam folder component
 */
