import React, { Component } from 'react'

import axios from 'axios'

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.enviaFormulario = this.enviaFormulario.bind(this);
  }

  componentWillUpdate

  handleEmail(event) {
    this.setState({ email: event.target.value });
    console.log(evento.target.value)
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
    console.log(evento.target.value)
  }

  enviaFormulario(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.enviaFormulario}>
          <label htmlFor="email">
            <br />
            <input
              id="email"
              type="text"
              placeholder="Email"
              // onChange{this.} 
              value={this.state.email}
            />
          </label>

          <label htmlFor="password">
            <br />
            <input
              id="password"
              type="text"
              // onChange{this.}
              value={this.state.password}
            />
          </label>
        </form>
      </div>
    )
  }

}