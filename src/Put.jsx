import React, { Component } from "react"

import axios from 'axios';

var data = JSON.stringify({ "StoreKey": "0acf81c56a321cc87126", "AppId": 11, "Active": true, "AccountManager": "ok" });

export default class Put extends Component {
  constructor(props) {
    super();
    this.storeKey = "";
    this.appId = "";
  }

  handleStoreKey(evento) {
    evento.stopPropagation();
    // this.storeKey = evento.target.value
    // console.log(this.appId);
  }

  handleAppId(evento) {
    evento.stopPropagation();
    // this.appId = evento.target.value
    // console.log(this.appId);
  }

  _criarResposta(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarResposta(this.storeKey, this.appId)
  }


  componentDidMount() {
    axios({
      method: 'put',
      url: 'https://api.fidelizarmais.com//api/v2/public/loja-integrada/settings/enable-or-disable',
      headers: {
        'secret-key': 'E7D4AC4F-4074-4944-A0B6-0701C536B0A6',
        'Content-Type': 'application/json',
        'Cookie': '__cfduid=d612d5dd9870bf5d037f15bac11f7b2471605532402'
      },
      data: data
    })
      .then(res => {
        const respostas = res.data;
        this.setState(respostas);
        console.log(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(data)
  }

  render() {
    return (
      <div>
        <h1>PUT - AXIOS II</h1>
        <form
          // onSubmit={this._criarResposta.bind(this)}
        >

          <label htmlFor="storeKey">Store Key</label><br />
          <input
            id="storeKey"
            type="text"
            placeholder="StoreKey"
            // onChange={this.handleStoreKey().bind(this)}
          />

          <br /><br />

          <label htmlFor="appId">App Id</label><br />
          <input
            id="appId"
            type="text"
            placeholder="AppId"
            // onChange={this.handleAppId.bind(this)}
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