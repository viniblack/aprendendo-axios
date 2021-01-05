import React, { Component } from 'react'

import axios from 'axios'

export default class ScoreDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeId: '',
      document: '',
      version: 'v2',
      // authorization: '',
      // storeKey: '',
      secretKey: '',
      submit: '',
    }

    this.handleDocument = this.handleDocument.bind(this)
    this.handleStoreId = this.handleStoreId.bind(this)
    this.enviaFormulario = this.enviaFormulario.bind(this)
  }

  componentDidUpdate() {
    if (this.state.submit !== '') {
      axios({
        method: 'get',
        url: `http://sandbox.fidelizarmais.com/api/${this.state.version}/private/score/my-extract/${this.state.storeId}/${this.state.document}`,
        // url: `http://sandbox.fidelizarmais.com/api/${this.state.version}/private/admin/score/my-extract/${this.state.storeId}/${this.state.document}`,
        headers: {
          'secret-key': '4c981ed7-8813-4897-bbea-5a793c1a26ab',
          'Authorization': 'bearer bSpaHgKJjdAlCrgjUoI30TLePqkxR6SN5cp66qFVLBTjJzgf7OSnoY-1wdKHIrP_6uLQsifhJI3Dsb3JydTSpyR9x3d_9QU5xwQO5jLsVXE4YmwH8F9QRGckwThA7P6tJ0nj8dApbAvBG6_HQ1ijO7i5u9QqjlvxC2B8kLMPSfh6bAqgNZUtoUyXa4TxDEFRPCflutbBeCaIrfigWU_nYuIj1HHLD88dWUGsdgAVwTFP9xwhs3LA9DaPqDOsAjS5DRgQh-lBJ7Oa02cph2pqK3gQUxCcLDODhAiTK3JokNu4kXnf20fmHaSbG6JjDRfjxtg8rNOTYe7yNnyyW9LtRfS_MtU7p-i7kJEsa_nFqO5g33NZeD5s4ioGjaH4hyvp-hoY5DXE0BTE7VlLbDW9J0IO51S_fL0KT9B_aVpflXepCCxcPu7qA4JBigl33KMvPwIZTA98npk9aJIEX7rf8eCLs5Hy7ESxtmMeJL3El_-i-S7DRIpEq_v9i0tPnSfzsSUwEjthpBDdcTQQU0haXUwBXgulV2Tdw3pONr2Vkf8RHNt0cOaIH1HDPbqHwEUrcd6R-ww1-pq0DsQml6BJlvlxKVyx0tDnTJa6AC5C4CHXpTry4LkxrvKsrC5y6vWfYYpR28b8BRDUUt9LE5P2UTfVAOCfLnV86utk-r21g5d_lowuLgZTFzw8ESDTIacd3PjDoABsMST9wlDv0piX1ew2Bso6yFw6hVLeVGuNr7V9ma8lwM1UDXCQ_DGXOh_5wtb2B1kpL8N1rQvamFSm25lK__sTD86kKAn2vCW2MxV2SNswKVDM4j04Vsh103eWW12fG_5YkKxNRlcwtGOvkQ0L3CYg8jXNm4SKrwO4q3b8IfFu4j01YdbXy8am5lps2qrhLikceRofq9cQ4Kp8c27uQ7OpaQKLWBBXWQdILGJNAwohiPHP9nfPcIeEcjc6eRwjWgbv2CKiBEHrcAEk_1BTWHTsnt60c6bV7NeC8P3q6EOKZoKo-0OciMqnL9TGKIUZj8cGDU5s-Yu4FGzm2-Z5iUwhO95BW7-nezSJ-SBml2bANceJGGYbR-4lmrJ2PeI-a57JqKYE7tORWKq3dyeSjYCeSjs614VAAyhkEl51MkPrg6RCGeX5lYeSK7md7orQV7sOj7uvRwnJYBp1xJPDwzGpPOKRJEt6MRy87a_QoSUO39tuv90sd_cXBGmkZeNLYEhtHqQZkKZ_jqoz5kjb59yZ0URYjtIZ1D2iqgs0eckBBly8fR6ZCeCAERYfXYBGrAPPTWaF4u3pvCh2o--1PdlpRpGyvwNgS7jzx_ZABElmSKoxtVAgmuJJ4pg4',
        }
      })
        .then(res => {
          this.setState({ submit: '' })
          const respostas = res.data
          this.setState( respostas )
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  handleDocument(event) {
    this.setState({ document: event.target.value })

  }

  handleStoreId(event) {
    this.setState({ storeId: event.target.value })
  }


  enviaFormulario(event) {
    this.setState({ submit: true })
    this.componentDidUpdate();
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Pontos por documento</h1>

        <form
          onSubmit={this.enviaFormulario}
        >
          <label htmlFor="documento">
            CPF/CNPJ
            <br />
            <input
              id="documento"
              type="text"
              placeholder="Documento"
              onChange={this.handleDocument}
              value={this.state.document}
            />
          </label>
          <br /> <br />
          <label htmlFor="storeId">
            StoreId
            <br />
            <input
              id="storeId"
              type="text"
              placeholder="StoreId"
              onChange={this.handleStoreId}
              value={this.state.storeId}
            />
          </label>
          <br /> <br />
          <button>
            Send
          </button>
        </form>
        <br />
        {this.state.respostas}
        {this.state.message}
      </div>
    )
  }
}