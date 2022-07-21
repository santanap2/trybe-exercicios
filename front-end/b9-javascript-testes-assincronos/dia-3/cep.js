const fetch = require('node-fetch');

const cepFind = async (cep) => {
  try {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const result = await fetch(url);
    const json = await result.json();
    const { logradouro } = json;
    console.log(logradouro);
  }
  catch (error) {
    console.log(`Something went wrong, please try again \n Error details: ${error}`);
  }
};

cepFind('30855330');