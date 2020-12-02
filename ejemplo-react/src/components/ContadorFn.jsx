import React, { useState } from 'react'

const ContadorFn = () => {

  const [cuenta, setCuenta] = useState(0);
  // const [nombre, setNombre] = useState('Angel');
  // const [email, setEmail] = useState('...');
  // console.log(cuenta);

  const incrementar = () => {
    setCuenta(cuenta + 1)
  }

  const decrementar = () => {
    setCuenta(cuenta - 1)
  }

  return (
    <div>
      <h2>Contador funcional con Hooks</h2>
      <button type="button" onClick={decrementar}>-</button>
      <span>Cuenta: {cuenta}</span>
      <button type="button" onClick={incrementar}>+</button>
    </div>
  )
}

export default ContadorFn