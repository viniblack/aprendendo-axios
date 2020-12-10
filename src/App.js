import React, {Component} from 'react';

import Put from './Put';

 class App extends Component {
  constructor() {
    super();

    this.state = {
      respostas: []
    }
  }

  criarResposta(storeKey, appId) {
    const novaResposta = { storeKey, appId };
    const novoArrayResposta = [...this.state.respostas, novaResposta]
    const novaEstado = {
      respostas: novoArrayResposta
    }
    this.setState(novaEstado)
  }

  render() {
    return (
      <section>
        <Put criarResposta={this.criarResposta.bind(this)} />
      </section >
    )
  }
}

export default App;
