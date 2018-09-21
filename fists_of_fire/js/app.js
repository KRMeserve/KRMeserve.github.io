// Global Constants go up here!

// Build Fighter Class With Basic Stats and functions. (-- Tested with Logs already! All Functions and stats are retrievable --)
class Fighter {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.attack = 10;
    }
    //Attack function
    fight(enemy){
        enemy.health -= 10;
        console.log('Hyah! Attack has been made!');
    }
    //Counter function
    counter(){
        console.log('Fighter has countered');
    }
    //Heal Function
    heal(){
        if (this.health < 100) {
            this.health += 10;
        } else {
            return `${this.name} tried to heal, but was already at full health.`
        }
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
const brawlerOne = new Brawler('GARR');
const priestOne = new Priest('Lillian');
const knightOne = new Knight('Sir Grant');
const rangerOne = new Ranger('Outlaw');
const brawlerTwo = new Brawler('GARR');
const priestTwo = new Priest('Lillian');
const knightTwo = new Knight('Sir Grant');
const rangerTwo = new Ranger('Outlaw');

// Build a Fight Function that takes User Inputs and converts them to actions from the Fighter class.



// Build a function that runs the outcome of the inputs and alters the character's stats (health).

// Document Ready Function Goes at the bottom!
$(()=>{




});
