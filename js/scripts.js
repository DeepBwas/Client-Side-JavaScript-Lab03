const output = document.getElementById('hamburger');

function createHamburger(bun, sauce, vegetable, patty, pattyNum, cheese, condiments){
    let object = {};
    object.bun = bun;
    object.sauce = sauce;
    object.vegetable = vegetable;
    object.patty = patty;
    object.pattyNum = pattyNum;
    object.cheese = cheese;
    object.condiments = condiments;
    object.info = function(){
        return `Your hamburger order contains a ${this.bun} bun, ${this.sauce} sauce, ${this.vegetable}, ${this.pattyNum} ${this.patty} patty, ${this.cheese} cheese, and ${this.condiments} as extra.`;
    };
    return object;
};

const hamburger = createHamburger('sesame', 'special', 'lettuce', 'beef', 2, 'cheddar', 'pickles');
output.textContent = hamburger.info();
console.log("Input: createHamburger('sesame', 'special', 'lettuce', 'beef', 2, 'cheddar', 'pickles')");

