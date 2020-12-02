import React, { useEffect, useState } from 'react'
import Usuario from '../components/Usuario';
import InfoUsuario from './InfoUsuario';
import { Route } from 'react-router-dom'

export const URL = 'https://jsonplaceholder.typicode.com/users';
// function cambiarAMayusculas (txt) {
//   return txt.toUpperCase();
// }


const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(resp => resp.json())
      .then(datos => {
        // console.log(datos)
        setUsuarios(datos);
      })
  }, [])


  const listaUsuarios = usuarios.map((usuario) => <Usuario usuario={usuario} key={usuario.id} />)

  const pathInfoUsuario = '/usuarios/:id/info';

  return (
    <div>
      <h1>Usuarios</h1>
      {listaUsuarios}

      <Route path={pathInfoUsuario} component={InfoUsuario} />
    </div>
  )
}

export default Usuarios
