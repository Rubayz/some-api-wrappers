let fetch = require("node-fetch");
module.exports = {
    getGIFBySeachTerm: async function(keyWord, tenorAPI, limit) {
        let SearchUrl = `https://g.tenor.com/v1/search?q=${keyWord}&key=${tenorAPI}&limit=${limit}`;
        const response = await fetch(SearchUrl);
        const result = await response.json();
        const index = Math.floor(Math.random() * result.results.length);
        console.log(`Your searched gif: ${result.results[index].url}`)
    },
    getTrendingGIFs: async function(tenorAPI, limit) {
        let trendingUrl = `https://g.tenor.com/v1/trending?key=${tenorAPI}&limit=${limit}`;
        const trendingResponse = await fetch(trendingUrl);
        const trendingResult = await trendingResponse.json();
        const trendingIndex = Math.floor(Math.random() * trendingResult.results.length);
        console.log(`One of the trending gifs: ${trendingResult.results[trendingIndex].url}`);
    },
    getGIFById: async function(gifId, tenorAPI) {
        let idGifUrl = `https://g.tenor.com/v1/gifs?ids=${gifId}&key=${tenorAPI}`;
        const idGifResponse = await fetch(idGifUrl);
        const idGifResult = await idGifResponse.json();
        const idGifIndex = Math.floor(Math.random() * idGifResult.results.length);
        console.log(`Here's your gif with the id: ${idGifResult.results[idGifIndex].url}`);
    }
}