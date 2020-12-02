import React from 'react'
import { Link } from 'react-router-dom'

const Usuario = (props) => {

  const rutaInfo = `/usuarios/${props.usuario.id}/info`
  const rutaEditar = `/usuarios/${props.usuario.id}/editar`

  return (
    <div>
      {props.usuario.name}
      <Link to={rutaInfo}>Info</Link>
      <Link to={rutaEditar}>Editar</Link>
    </div>
  )
}

export default Usuario
