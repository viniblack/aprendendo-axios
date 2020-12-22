import React, { Component, } from 'react';

import axios from 'axios';

// var data = JSON.stringify({ "StoreKey": "0acf81c56a321cc87126", "AppId": 11, "Active": true, "AccountManager": "ok" });

export default class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: '',
      app: '',
      active: '',
      submit: '',
    };

    this.handleStoreKey = this.handleStoreKey.bind(this);
    this.handleAppId = this.handleAppId.bind(this);
    this._criarResposta = this._criarResposta.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  componentDidUpdate() {
    if (
      // this.state.store !== '' &&
      // this.state.app !== '' &&
      // this.state.active !== '' &&
      this.state.submit !== ''
    ) {
      axios({
        method: 'put',
        url: 'https://api.fidelizarmais.com//api/v2/public/loja-integrada/settings/enable-or-disable',
        headers: {
          'secret-key': 'E7D4AC4F-4074-4944-A0B6-0701C536B0A6',
          'Content-Type': 'application/json',
        },
        data: {
          StoreKey: this.state.store,
          AppId: this.state.app,
          Active: this.state.active,
        }
      })
        .then(res => {
          this.setState({ submit: '' })
          const respostas = res.data;
          this.setState(respostas);
          console.log(res.data)
        }).catch((error) => {
          console.log(error);
        });
    }
  }

  handleStoreKey(evento) {
    this.setState({ store: evento.target.value })
  }

  handleAppId(evento) {
    this.setState({ app: evento.target.value })
  }

  handleSend() {
    this.setState({ submit: true })
  }

  onValueChange(evento) {
    this.setState({ active: evento.target.value })
  }

  _criarResposta(evento) {
    this.setState({ submit: true })
    this.componentDidUpdate()
    evento.preventDefault();
  }

  render() {

    return (
      <div>
        <h1>PUT - AXIOS II</h1>
        <form
          onSubmit={this._criarResposta}
        >
          <label htmlFor="storeKey">Store Key 0acf81c56a321cc87126
          <br />
            <input
              id="storeKey"
              type="text"
              placeholder="StoreKey"
              onChange={this.handleStoreKey}
              value={this.state.store}
            />
          </label>
          <br /><br />
          <label htmlFor="appId">App Id
          <br />
            <input
              id="appId"
              type="text"
              placeholder="AppId"
              onChange={this.handleAppId}
              value={this.state.app}
            />
          </label>
          <br /><br />
          <select onChange={this.onValueChange}>
            <option value="">Ativar / Desativar</option>
            <option value="true">Ativo</option>
            <option value="false">Desativo</option>
          </select>
          <button
            className="enviar"
            onSubmit={this.handleSend}
          >
            Send
          </button>
        </form>
        {this.state.message}
      </div>
    )
  }
}
