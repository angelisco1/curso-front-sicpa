import React, { useState } from 'react'
import DatosForm from './DatosForm'
import Form from './Form'

const MisDatos = () => {

  // const [datosPersona, setDatosPersona] = useState({nombre: '', apellido: ''})

  const [nombre, setNombre] = useState('Angel')
  const [apellido, setApellido] = useState('Villalba')

  // setNombre('Pepito')
  // setNombre(new Event({target, name, type}))

  const cambiarNombre = (event) => {
    setNombre(event.target.value)
  }

  return (
    <div>
      <Form
        nombre={nombre}
        apellido={apellido}
        handleChangeNombre={setNombre}
        handleChangeApellido={setApellido}
        handleChangeNombre2={cambiarNombre}
      />
      <DatosForm nombre={nombre} apellido={apellido} />
    </div>
  )
}

export default MisDatos
