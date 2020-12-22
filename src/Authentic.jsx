import React, { Component } from 'react'

import axios from 'axios'

export default class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      grant_type: 'password',
      submit: '',
    };
    // state = {
    //   resposta: []
    // }

    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.enviaFormulario = this.enviaFormulario.bind(this);
  }

  componentDidUpdate() {
    if (this.state.submit !== '') {
      axios({
        method: 'post',
        url: 'http://sandbox.fidelizarmais.com/api/v2/public/admin/auth',

        headers: {
          'Content-Type': 'application/json',
        },
        // data: data
        data: {
          userName: this.state.username,
          password: this.state.password,
          grant_type: this.state.grant_type,
        }
      })
        .then(res => {
          this.setState({ submit: '' })
          const respostas = res.data.data.access_token;
          this.setState({ respostas });
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  handleUserName(event) {
    this.setState({ username: event.target.value })
  }

  handlePassword(event) {
    this.setState({ password: event.target.value })
  }

  enviaFormulario(event) {
    this.setState({ submit: true })
    this.componentDidUpdate()
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form
          onSubmit={this.enviaFormulario}
        >
          <label htmlFor="email">
            Email laraferreira.coelhoe21090@outlook.com
            <br />
            <input
              id="email"
              type="text"
              placeholder="Email"
              onChange={this.handleUserName}
              value={this.state.user_name}
            />
          </label>
          <br />
          <label htmlFor="password">
            Senha 123456
            <br />
            <input
              id="password"
              type="text"
              placeholder="Senha"
              onChange={this.handlePassword}
              value={this.state.password}
            />
          </label>
          <br />
          <button
            className="enviar"
            onSubmit={this.handleSend}
          >
            Send
          </button>
        </form>
        {this.state.respostas}
        {this.state.message}


      </div>
    )
  }

}