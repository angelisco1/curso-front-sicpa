import React from 'react'

const DatosForm = (props) => {
  return (
    <div>
      <p>Nombre: {props.nombre}</p>
      <p>Apellido: {props.apellido}</p>
    </div>
  )
}

export default DatosForm
