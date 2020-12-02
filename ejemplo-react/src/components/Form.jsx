import React from 'react'

const Form = (props) => {

  const cambiarApellido = (event) => {
    props.handleChangeApellido(event.target.value)
  }

  return (
    <div>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" value={props.nombre} onInput={
          (event) => props.handleChangeNombre(event.target.value)
        } />
        <input type="text" id="nombre" value={props.nombre} onInput={props.handleChangeNombre2} />
      </div>
      <div>
        <label htmlFor="apellido">Apellido</label>
        <input type="text" id="apellido" value={props.apellido} onInput={cambiarApellido} />
      </div>
    </div>
  )
}

export default Form
