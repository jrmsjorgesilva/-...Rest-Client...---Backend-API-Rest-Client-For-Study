const cheerio = require("cheerio");
const axios = require('axios');

async function createSeed(req, res) {
  // url
  const URL = `https://pt.wikipedia.org/wiki/Lista_de_linguagens_de_programa%C3%A7%C3%A3o`;

//   const { data } = await axios.get(URL);
//   const $ = cheerio.load(data);
//   const categories = $('table');
//   console.log('fsd', categories);

  // TODO
  
  res.redirect(201, 'index');
}

module.exports = createSeed;
