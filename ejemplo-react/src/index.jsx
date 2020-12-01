import React from 'react';
import ReactDOM from 'react-dom';
import Contador from './components/Contador';


class App extends React.Component {
  render() {
    const nombre = 'Angel!';

    return (
      <div>
        <h1>Hola {nombre}</h1>
        <input type="text" placeholder={nombre} />
        <Contador />
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


ReactDOM.render(<App />, document.getElementById('root'))