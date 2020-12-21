import React, { Component, } from 'react';

import axios from 'axios';

// var data = JSON.stringify({ "StoreKey": "0acf81c56a321cc87126", "AppId": 11, "Active": true, "AccountManager": "ok" });

export default class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: '',
      app: '',
    };

    this.handleStoreKey = this.handleStoreKey.bind(this);
    this.handleAppId = this.handleAppId.bind(this);
    this._criarResposta = this._criarResposta.bind(this);
  }

  handleStoreKey(evento) {
    this.setState({ store: evento.target.value })
    console.log(evento.target.value)
  }

  handleAppId(evento) {
    this.setState({ app: evento.target.value })
  }


  componentDidMount() {
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
      }
    })
      .then(res => {
        const respostas = res.data;
        this.setState(respostas);
        console.log(res.data)
      }).catch(function (error) {
        console.log(error);
      });
  }

  _criarResposta(evento) {
    // alert(`Esse é a StoreKey ${this.state.store} e esse é o número do App ${this.state.app}`);
    this.componentDidMount()
    evento.preventDefault();
  }

  render() {

    return (
      <div>
        <h1>PUT - AXIOS II</h1>
        <form
          onSubmit={this._criarResposta}
        >
          <label htmlFor="storeKey">Store Key</label><br />
          <input
            id="storeKey"
            type="text"
            placeholder="StoreKey"
            onChange={this.handleStoreKey}
            value={this.state.store}
          />
          <br /><br />
          <label htmlFor="appId">App Id</label><br />
          <input
            id="appId"
            type="text"
            placeholder="AppId"
            onChange={this.handleAppId}
            value={this.state.app}
          />
          <button className="enviar">
            Send
          </button>
        </form>
        {this.state.message}
      </div>

    )
  }
}
