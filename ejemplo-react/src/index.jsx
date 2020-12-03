import React from 'react';
import ReactDOM from 'react-dom';
import Contador from './components/Contador';
import ContadorFn from './components/ContadorFn';
import ListaSugus from './components/ListaSugus';
import MisDatos from './components/MisDatos';
import App from './pages/App';
import { BrowserRouter } from 'react-router-dom';
import CmpFragment from './components/CmpFragment';


class Root extends React.Component {
  render() {
    const nombre = 'Angel!';

    return (
      <div id="div1">
        {/* <h1>Hola {nombre}</h1>
        <input type="text" placeholder={nombre} />
        <Contador />
        <ContadorFn />
        <ListaSugus />
        <MisDatos /> */}
        {/* <BrowserRouter>
          <App />
        </BrowserRouter> */}
        <CmpFragment />
      </div>
    )
  }
}

// class App extends React.Component {
//   render() {
//     return React.createElement(
//       'div',
//       null,
//       React.createElement('h1', null, 'Hola mundo'),
//       React.createElement('p', null, 'Hola mundo')
//     );
//   }
// }

// const App = React.createElement(
//   'div',
//   null,
//   React.createElement('h1', null, 'Hola mundo'),
//   React.createElement('p', null, 'Hola mundo')
// );


ReactDOM.render(<Root />, document.getElementById('root'))