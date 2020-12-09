import React from 'react';

import axios from 'axios';

var data = JSON.stringify({ "StoreKey": "0acf81c56a321cc87126", "AppId": 11, "Active": true, "AccountManager": "ok" });

export default class PersonList extends React.Component {
  state = {
    respostas: []
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
        console.log(res.data)
        this.setState(respostas);
      }).catch(function (error) {
        console.log(error);
      });

  }

  render() {
    return (
      <div>
        <h1>PUT - AXIOS</h1>

        {console.log(this.state.respostas)}
        {this.state.message}

      </div>
    )
  }
}
