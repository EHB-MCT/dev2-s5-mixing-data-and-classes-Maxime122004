'use strict';

export default class Joke {
    constructor(setup, delivery){
        this.setup = setup;
        this.delivery = delivery;
    }
    htmlString(){
        return `
        <div class="item">
          <div>
            <div class="item-field">${this.setup}</div>
            <div class="item-field">${this.delivery}</div>
          </div>
          
          <div>
        `;
    }
}

