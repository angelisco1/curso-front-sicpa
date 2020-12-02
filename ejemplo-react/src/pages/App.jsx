import React from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import Usuarios from './Usuarios'
import NuevoUsuario from './NuevoUsuario'

const App = () => {
  return (
    <div>

      <Link to="/">Usuarios</Link>
      <Link to="/nuevo-usuario">Nuevo usuario</Link>

      <hr/>
      <Switch>
        <Route path="/usuarios" component={Usuarios} />
        <Route path="/nuevo-usuario" component={NuevoUsuario} />
        <Redirect from="/" to="/usuarios" />
      </Switch>
    </div>
  )
}

export default App
