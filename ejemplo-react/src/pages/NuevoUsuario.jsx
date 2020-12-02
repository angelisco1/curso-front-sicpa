import React from 'react'

const NuevoUsuario = (props) => {

  console.log(props);

  const goToInicio = () => {
    setTimeout(() => {
      props.history.push('/');
    }, 1500)
  }

  return (
    <div>
      <h1>Nuevo usuario</h1>

      <button type="button" onClick={goToInicio}>Guardar usuario</button>
    </div>
  )
}

export default NuevoUsuario
