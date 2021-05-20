let fetch = require("node-fetch");
module.exports = {
    gif: async function(keyWord, tenorAPI, limit) {
        const url = `https://api.tenor.com/v1/search?q=${keyWord}&key=${tenorAPI}&limit=${limit}`;
        const response = await fetch(url);
        const result = await response.json();
        const index = Math.floor(Math.random() * result.results.length);
        console.log(result.results[index].url)
    }
}