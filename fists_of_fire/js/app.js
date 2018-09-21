// Global Constants go up here!

// Build Fighter Class With Basic Stats and functions. (-- Tested with Logs already! All Functions and stats are retrievable --)
class Fighter {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.attack = 10;
    }
    //Attack function
    fight(){
        console.log('Fighter has attacked!');
    }
    //Counter function
    counter(){
        console.log('Fighter has countered');
    }
    //Heal Function
    heal(){
        console.log('Fighter has healed');
    }
};

// Build Character Class extending on Fighter for every Unique Character (Add the ability) (-- Tested with Logs already! All functions and stats are retrievable --)
class Brawler extends Fighter {
    //Special Attack
    special(){
        console.log('The special attack has been used by the Brawler');
    }
}
class Priest extends Fighter {
    //Special Attack
    special(){
        console.log('The special attack has been used by the Priest');
    }
}
class Knight extends Fighter {
    //Special Attack
    special(){
        console.log('The special attack has been used by the Knight');
    }
}
class Ranger extends Fighter {
    //Special Attack
    special(){
        console.log('The special attack has been used by the Ranger');
    }
}

//List of Playable Characters, one for each player.
const testBrawler = new Brawler('GARR');
const testPriest = new Priest('Lillian');
const testKnight = new Knight('Sir Grant');
const testRanger = new Ranger('Outlaw');
console.log(testBrawler);
console.log(testPriest);
console.log(testKnight);
console.log(testRanger);
testBrawler.special();
testPriest.special();
testKnight.special();
testRanger.special();
// Build a Fight Function that takes User Inputs and converts them to actions from the Fighter class.

// Build a function that runs the outcome of the inputs and alters the character's stats (health).

// Document Ready Function Goes at the bottom!
$(()=>{




});
