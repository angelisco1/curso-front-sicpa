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
    this.incrementar = this.incrementar.bind(this);
  }

  componentDidMount() {
    console.log('Se ha pintado el componente')
  }

  decrementar() {
    // console.log(this.state.cuenta);
    // console.log('-1')
    this.setState({
      cuenta: this.state.cuenta - 1
    });
  }

  incrementar() {
    this.setState({
      cuenta: this.state.cuenta + 1
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.decrementar}>-</button>
        <button type="button" onClick={() => this.decrementar()}>-</button>
        <span>Cuenta: {this.state.cuenta}</span>
        <button type="button" onClick={this.incrementar}>+</button>
      </div>
    )
  }
}
