"use strict";

import Joke from "./Joke.js";

let jokeInstance;
const app = {
    items: [],
    init() {
        this.getData();
    },
    getData() {
        fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=10&type=twopart')
        .then(function (response){
            return response.json();
        })
        .then(function (json){
            json.jokes.forEach(function (jokeData){
                jokeInstance = new Joke(jokeData.setup, jokeData.delivery);
                app.items.push(jokeData);

                app.render();
            });

            console.log(app.items[0]);
        });
    },
    onSearch() {
    },
    render(message) {
                document.querySelector("#list").insertAdjacentHTML('beforeend', jokeInstance.htmlString());
    }

};
app.init();