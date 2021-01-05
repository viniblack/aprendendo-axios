import React, { Component } from 'react'

import axios from 'axios'

export default class PurchasePoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: '',
      version: 'v2',
      storeId: '',
      document: '',
      purchasePrice: '',
      Partner: 1,
      shopForSale: '4',
      currencyType: '1',
      shortDescription: 'Compra test',
      detailSale: '',
      approved: true,
      accountManager: 'API Vinicius',
    }
console.log(this.state)
    this.handleStoreId = this.handleStoreId.bind(this);
    this.handleDocument = this.handleDocument.bind(this);
    this.handlePurchasePrice = this.handlePurchasePrice.bind(this);
    this.enviaFormulario = this.enviaFormulario.bind(this);
  }

  componentDidUpdate() {
    if (this.state.submit !== '') {
      axios({
        method: 'POST',
        url: `http://sandbox.fidelizarmais.com/api/${this.state.version}/public/motor-of-points/score/by-purchase`,
        headers: {
          'Authorization': 'bearer cWB7vI_rKpF6kYPiHZBJlJ3_NGOSguiThbj314YJB2k8qT8WuUvGbESNNDXIletZTRfQ8N5OZB-mK_qUzdXWRMhhi9YPy5SlTAwjHJIzBj5JL4XdYgB6Ua4DK8B5Mx6rYCOx2Zx0ZSWUhGpI4WOn-jXuDpPneV3A1VKGVe7wI04C1HlnbKvv3yXaOkRQfPqaMiTlFK9nvvHH9CV6KqHU1R4Xjv2i-NMoDDEZgrVxco_r3peci6k-ii52_-iwDjeOWWMyvyGuFHCXx2e-P-0Bsq3Vq2rBoO0o47gVi9Rqihu2q46-zsfEyqGL85L9VUMC0x2ayniuOiC1Z0h_MvLC6ZVqbD32sY5Ii9mKsDW3kOHIWuP0kHNuZqOSsOT1Fac9zzuD7FFZdgsZ-JYzpdlQPTcohwkIWcJUjmT09oFH4RKyX9spgspmzYydhPE4K1wlavds8qtxPF8AVeY52LNn2v1eyvQTkLdpLkGOuQao2PRyhrRBsAde3HrurhdHMkkywAd4kMuOlJbQC9MWaVA1Kt07ncEDEgrklIZ-nw-WBYdjaw1zCEriK-rj6-R57W-uITiC-lSbemzDEUris8xUAEZ8XD4iE5J6N9tE2MrPEoSMYVpzyFDmSxeUDpb5mSacqKpS7v2K7OremCIhI1j-5HY4p__19okVbzzMJ0gMiZTvL2j_m-LEGjyA7h-O0owBCPi_EHxYM0q4JgoBO7MPZ8KYXDD1XdQX0IpZedwPIecuAq_WHs6GLBVhdHJNQiTaEJ9VasSGNx6lrtBJ6lME6B9cVRcOMJEpWJLUIWEY0WV_PQNWRwXo7GVf_vRlaOt289ODUC2VKkpzmbg7KvmobI1SHrHXdUSrH_mVAw_TCxsbSxRYhzg1tu2LUeG_FJTp3qOEg3pFC4ABsphfQUf0RwmWQCnHxrZL3vvQaF-G2NpGuKaOFVv3E04Oi56Q2Uw9C60hjv8NiXyWGv9dnWgueUCjf_CW3CxQ7sSju75lFPaSpFcHkglbNAiMEYcIDOQV3dE1Qo9rfxBWbxzlD8SYT-9X7bRMmyrEc0j_gCNa_grmh2djscHILf00-iZVXgfx94t6YMEEynPfmL-2F9F9tTwEq0VYGOc8fguj78t7ox2gdNgruhHdq-fS5Deah7QBNuKn9o9QaFAN8-ZgJWfazbvy7NT3lyegHgDFPVw0qyyAJ3NQAsAXTTOA8DKNgARkPelBEMCYB7UrIPdSehXji8n2BVHRmHDQ3gjrMwRpZ87rP0TzL22sqmwZMKIvgXEuTb9iP5gT0GG8zkEtTXadW0DHyvnaoadsAI_RK8Is5LYm8TUhgQtqkl0Hk44MBpfM',
          'secret-key': '4c981ed7-8813-4897-bbea-5a793c1a26ab',
          'store-key': this.state.storeId,
        },
        data: {
          StoreId: this.state.storeId,
          Document: this.state.document,
          PrchasePrice: this.state.purchasePrice,
          Partner: this.state.Partner, 
          ShopForSale: this.state.shopForSale,
          CurrencyType: this.state.currencyType,
          ShortDescription: this.state.shortDescription,
          DetailSale: this.state.detailSale,
          Approved: this.state.approved,
          AccountManager: this.state.accountManager, 
        },
      })
      .then(res => {
        this.setState({ submit: '' });
        const respostas = res.data;
        this.setState(respostas);
      })
      .catch((error) => {
        console.log(error);
      });
    };
  };

  handleStoreId(event) {
    this.setState({ storeId: event.target.value });
  };

  handleDocument(event) {
    this.setState({ document: event.target.value });
  };

  handlePurchasePrice(event) {
    this.setState({ purchasePrice: event.target.value });
  };

  enviaFormulario(event) {
    this.setState({ submit: true });
    this.componentDidUpdate();
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Pontos por compra</h1>

        <form
          onSubmit={this.enviaFormulario}
        >
          <label htmlFor="storeId">
            StoreId
            <br />
            <input
              id="storeId"
              type="text"
              placeholder="StoreId"
              onChange={this.handleStoreId}
              value={this.storeId}
            />
          </label>
          <br /><br />
          <label htmlFor="document">
            Documento
            <br />
            <input
              id="document"
              type="text"
              placeholder="Documento"
              onChange={this.handleDocument}
              value={this.document}
            />
          </label>
          <br /><br />
          <label htmlFor="purchasePrice">
            Valor da compra
            <br />
            <input
              id="purchasePrice"
              type="text"
              placeholder="Valor da compra"
              onChange={this.handlePurchasePrice}
              value={this.purchasePrice}
            />
          </label>
          <br /><br />
          <button>Send</button>
        </form>
        {this.state.message}
      </div>
    );
  };
}
