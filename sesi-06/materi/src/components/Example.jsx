import React, { useEffect, useState } from "react";

function Example() {
  // deklarasi variabel state baru yang kita sebut "count"
  const [count, setCount] = useState(0);

  // penggunaan useEffect mirip dengan componentDidMount dan componentDidUpdate
  useEffect(() => {
    // memperbarui judul dokumen menggunakan API browser
    document.title = `you clicked ${count} times`;
  });

  return (
    <>
      <p>Anda Menekan sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)}>Klik Saya</button>
    </>
  );
}

export default Example;
