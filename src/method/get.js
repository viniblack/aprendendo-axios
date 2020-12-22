import React from 'react';

import axios from 'axios';

/* var config = {
  method: 'get',
  url: 'https://api.fidelizarmais.com//api/v2/public/premio/listar-por-loja/72f3c751-0f04-479a-93eb-8029eaf83d39/1/20',
  headers: {
    'Authorization': 'bearer bSpaHgKJjdAlCrgjUoI30TLePqkxR6SN5cp66qFVLBTjJzgf7OSnoY-1wdKHIrP_6uLQsifhJI3Dsb3JydTSpyR9x3d_9QU5xwQO5jLsVXE4YmwH8F9QRGckwThA7P6tJ0nj8dApbAvBG6_HQ1ijO7i5u9QqjlvxC2B8kLMPSfh6bAqgNZUtoUyXa4TxDEFRPCflutbBeCaIrfigWU_nYuIj1HHLD88dWUGsdgAVwTFP9xwhs3LA9DaPqDOsAjS5DRgQh-lBJ7Oa02cph2pqK3gQUxCcLDODhAiTK3JokNu4kXnf20fmHaSbG6JjDRfjxtg8rNOTYe7yNnyyW9LtRfS_MtU7p-i7kJEsa_nFqO5g33NZeD5s4ioGjaH4hyvp-hoY5DXE0BTE7VlLbDW9J0IO51S_fL0KT9B_aVpflXepCCxcPu7qA4JBigl33KMvPwIZTA98npk9aJIEX7rf8eCLs5Hy7ESxtmMeJL3El_-i-S7DRIpEq_v9i0tPnSfzsSUwEjthpBDdcTQQU0haXUwBXgulV2Tdw3pONr2Vkf8RHNt0cOaIH1HDPbqHwEUrcd6R-ww1-pq0DsQml6BJlvlxKVyx0tDnTJa6AC5C4CHXpTry4LkxrvKsrC5y6vWfYYpR28b8BRDUUt9LE5P2UTfVAOCfLnV86utk-r21g5d_lowuLgZTFzw8ESDTIacd3PjDoABsMST9wlDv0piX1ew2Bso6yFw6hVLeVGuNr7V9ma8lwM1UDXCQ_DGXOh_5wtb2B1kpL8N1rQvamFSm25lK__sTD86kKAn2vCW2MxV2SNswKVDM4j04Vsh103eWW12fG_5YkKxNRlcwtGOvkQ0L3CYg8jXNm4SKrwO4q3b8IfFu4j01YdbXy8am5lps2qrhLikceRofq9cQ4Kp8c27uQ7OpaQKLWBBXWQdILGJNAwohiPHP9nfPcIeEcjc6eRwjWgbv2CKiBEHrcAEk_1BTWHTsnt60c6bV7NeC8P3q6EOKZoKo-0OciMqnL9TGKIUZj8cGDU5s-Yu4FGzm2-Z5iUwhO95BW7-nezSJ-SBml2bANceJGGYbR-4lmrJ2PeI-a57JqKYE7tORWKq3dyeSjYCeSjs614VAAyhkEl51MkPrg6RCGeX5lYeSK7md7orQV7sOj7uvRwnJYBp1xJPDwzGpPOKRJEt6MRy87a_QoSUO39tuv90sd_cXBGmkZeNLYEhtHqQZkKZ_jqoz5kjb59yZ0URYjtIZ1D2iqgs0eckBBly8fR6ZCeCAERYfXYBGrAPPTWaF4u3pvCh2o--1PdlpRpGyvwNgS7jzx_ZABElmSKoxtVAgmuJJ4pg4',
    'Cookie': '__cfduid=d612d5dd9870bf5d037f15bac11f7b2471605532402'
  }
}; */

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://api.fidelizarmais.com//api/v2/public/premio/listar-por-loja/e1a6ea4f-0546-47a3-99fe-9d0a304a5158/1/20',
      headers: {
        'Authorization': 'bearer bSpaHgKJjdAlCrgjUoI30TLePqkxR6SN5cp66qFVLBTjJzgf7OSnoY-1wdKHIrP_6uLQsifhJI3Dsb3JydTSpyR9x3d_9QU5xwQO5jLsVXE4YmwH8F9QRGckwThA7P6tJ0nj8dApbAvBG6_HQ1ijO7i5u9QqjlvxC2B8kLMPSfh6bAqgNZUtoUyXa4TxDEFRPCflutbBeCaIrfigWU_nYuIj1HHLD88dWUGsdgAVwTFP9xwhs3LA9DaPqDOsAjS5DRgQh-lBJ7Oa02cph2pqK3gQUxCcLDODhAiTK3JokNu4kXnf20fmHaSbG6JjDRfjxtg8rNOTYe7yNnyyW9LtRfS_MtU7p-i7kJEsa_nFqO5g33NZeD5s4ioGjaH4hyvp-hoY5DXE0BTE7VlLbDW9J0IO51S_fL0KT9B_aVpflXepCCxcPu7qA4JBigl33KMvPwIZTA98npk9aJIEX7rf8eCLs5Hy7ESxtmMeJL3El_-i-S7DRIpEq_v9i0tPnSfzsSUwEjthpBDdcTQQU0haXUwBXgulV2Tdw3pONr2Vkf8RHNt0cOaIH1HDPbqHwEUrcd6R-ww1-pq0DsQml6BJlvlxKVyx0tDnTJa6AC5C4CHXpTry4LkxrvKsrC5y6vWfYYpR28b8BRDUUt9LE5P2UTfVAOCfLnV86utk-r21g5d_lowuLgZTFzw8ESDTIacd3PjDoABsMST9wlDv0piX1ew2Bso6yFw6hVLeVGuNr7V9ma8lwM1UDXCQ_DGXOh_5wtb2B1kpL8N1rQvamFSm25lK__sTD86kKAn2vCW2MxV2SNswKVDM4j04Vsh103eWW12fG_5YkKxNRlcwtGOvkQ0L3CYg8jXNm4SKrwO4q3b8IfFu4j01YdbXy8am5lps2qrhLikceRofq9cQ4Kp8c27uQ7OpaQKLWBBXWQdILGJNAwohiPHP9nfPcIeEcjc6eRwjWgbv2CKiBEHrcAEk_1BTWHTsnt60c6bV7NeC8P3q6EOKZoKo-0OciMqnL9TGKIUZj8cGDU5s-Yu4FGzm2-Z5iUwhO95BW7-nezSJ-SBml2bANceJGGYbR-4lmrJ2PeI-a57JqKYE7tORWKq3dyeSjYCeSjs614VAAyhkEl51MkPrg6RCGeX5lYeSK7md7orQV7sOj7uvRwnJYBp1xJPDwzGpPOKRJEt6MRy87a_QoSUO39tuv90sd_cXBGmkZeNLYEhtHqQZkKZ_jqoz5kjb59yZ0URYjtIZ1D2iqgs0eckBBly8fR6ZCeCAERYfXYBGrAPPTWaF4u3pvCh2o--1PdlpRpGyvwNgS7jzx_ZABElmSKoxtVAgmuJJ4pg4',
      }
    })
      .then(res => {
        const persons = res.data.data;
        this.setState({ persons });
      })

  }

  render() {
    return (
      <div>
        <h1>GET - AXIOS</h1>
        <ul>
          {this.state.persons(person => <li>{person.nome}</li>)}
        </ul>
      </div>
    )
  }
}



/* export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: `https://jsonplaceholder.typicode.com/users`,
    })
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        <p>Teste</p>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}  */