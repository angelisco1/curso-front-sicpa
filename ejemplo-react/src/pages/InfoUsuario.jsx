import React, { useState, useEffect } from 'react'
import { URL } from './Usuarios'

const InfoUsuario = (props) => {

  const [usuario, setUsuario] = useState(null)
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    console.log('Pasa por aqui')
    fetch(`${URL}/${props.match.params.id}`)
      .then(resp => resp.json())
      .then(datos => {
        // console.log(datos)
        setUsuario(datos);
      })
  }, [props.match.params.id])

  useEffect(() => {
    if(mostrar) {
      alert('Mostrar es true')
    }
  }, [mostrar])

  return (
    <div>
      <h2>Info Usuario ({props.match.params.id})</h2>
      <pre>{JSON.stringify(usuario, null, 4)}</pre>
      <button type="button" onClick={() => setMostrar(!mostrar)}>Toggle mostrar</button>
      {mostrar ? <p>Se muestra</p> : null}
    </div>
  )
}

export default InfoUsuario
