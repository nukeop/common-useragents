require('isomorphic-fetch');
var cheerio = require('cheerio');
var sourceUrl = require('./const').sourceUrl;

module.exports = () => {
  return fetch(sourceUrl)
  .then(data => data.text())
  .then(html => {
    var $ = cheerio.load(html, {
      decodeEntities: false
    });
    return JSON.parse($('.get-the-list')[1].children[0].data);
  });
};
