let fetch = require("node-fetch");
module.exports = {
    fact: async function(animal){
        fetch(`https://some-random-api.ml/facts/${animal}`)
        .then(res => res.json())
        .then(json => console.log(json));
    },
    animalImg: async function(animal) {
        fetch(`https://some-random-api.ml/animal/${animal}`)
        .then(res => res.json())
        .then(json => console.log(json));
    },
    animuGifs: async function(gifQuery){
        fetch(`https://some-random-api.ml/animu/${gifQuery}`)
            .then(res => res.json())
            .then(json => console.log(json));
    },
    animuQuotes: async function() {
        fetch(`https://some-random-api.ml/animu/quote`)
            .then(res => res.json())
            .then(json => console.log(json));
    },
    binary: async function(text) {
        fetch(`https://some-random-api.ml/binary?text=${text}`)
        .then(res => res.json())
        .then(json => console.log(json))
    },
    joke: async function() {
        fetch(`https://some-random-api.ml/joke`)
        .then(res => res.json())
        .then(json => console.log(json))
    },
    meme: async function() {
        fetch(`https://some-random-api.ml/meme`)
        .then(res => res.json())
        .then(json => console.log(json));
    },
    base64Encode: async function(text) {
        fetch(`https://some-random-api.ml/base64?encode=${text}`)
        .then(res => res.json())
        .then(json => console.log(json));
    },
    base64Decode: async function(text) {
        fetch(`https://some-random-api.ml/base64?decode=${text}`)
        .then(res => res.json())
        .then(json => console.log(json));
    }
}