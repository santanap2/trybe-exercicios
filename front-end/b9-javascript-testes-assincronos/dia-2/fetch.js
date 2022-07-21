const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const result = await fetch(url)
    const json = await result.json();
    const { value } = json;
    console.log(value);
  }
  catch (error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
};

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.