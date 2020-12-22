import axios from 'axios';


var config = {
  method: 'get',
  url: 'https://api.fidelizarmais.com//api/v2/public/loja-integrada/settings/exist/8993de5f-0eb5-4021-8de2-38dae580f457/10/by',
  headers: {
    'secret-key': 'E7D4AC4F-4074-4944-A0B6-0701C536B0A6',
    'Cookie': '__cfduid=d612d5dd9870bf5d037f15bac11f7b2471605532402'
  }
};

const api = axios(config)
  .then(function (response) {
    const hsib = response.data
    console.log(hsib.data.iframe);
  })
  .catch(function (error) {
    console.log(error);
  });


export default api;