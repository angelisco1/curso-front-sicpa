import React, { Component } from 'react'

export default class Contador extends Component {
  constructor() {
    super();
    this.state = {
      cuenta: 0,
      nombre: 'Angel',
      email: '...'
    }

    this.decrementar = this.decrementar.bind(this);
  }

  decrementar() {
    console.log(this);
    console.log('-1')
    this.setState({
      cuenta: this.state.cuenta - 1
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.decrementar}>-</button>
        <button type="button" onClick={() => this.decrementar()}>-</button>
        <span>Cuenta: {this.state.cuenta}</span>
        <button type="button">+</button>
      </div>
    )
  }
}
