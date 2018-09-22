// Global Constants go up here!
let turnTimer = 1;

// Build Fighter Class With Basic Stats and functions. (-- Tested with Logs already! All Functions and stats are retrievable --)
class Fighter {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.attack = 10;
    }
    //Attack function
    fight(enemy){
        enemy.health -= this.attack;
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

// const playerOne = brawlerOne;
// const playerTwo = knightTwo;



// Document Ready Function Goes at the bottom of page, no functions below this one!
$(()=>{
    // NEED TO BUILD ====== Section where players get to choose their characters and save them to these constants.
    let playerOne = brawlerOne;
    let playerTwo = knightTwo;


    // Build a Fight Function that takes User Inputs and converts them to actions from the Fighter class.
    const startFightDiv = $('<div>').text('Start Fight!').addClass('start-fight').appendTo('.playField');
    const emptyAlertBox = ()=>{
        $('#fightAlertBox').empty();
    };
    const turnLengthAnnounce = ()=>{
        $('#fightAlertBox').text(`Phase ${turnTimer}... Fight!`);
        setTimeout(emptyAlertBox, 4000);
    };

    const calculateRound = (playerOneInput, playerTwoInput)=>{
        console.log(playerOneInput);
        console.log(playerTwoInput);
    }

    const startRound = ()=>{
        // Collect player input.
        const playerOneInput = prompt('Choose your attack! w = attack, a = counter, s = heal, d = super', 'w / a / s / d');
        const playerTwoInput = prompt('Choose your attack! i = attack, j = counter, k = heal, l = super', 'i / j / k / l');
        turnLengthAnnounce();
        turnTimer++;

        calculateRound(playerOneInput, playerTwoInput);
    }


    const startFight = ()=>{
        //Reset round stats for new fight.
        playerOne.health = 100;
        playerTwo.health = 100;
        turnTimer = 1;
        //UI alerts
        $('#fightAlertBox').text('Start Fight!');
        setTimeout(emptyAlertBox, 4000);

        console.log(playerOne);
        console.log(playerTwo);
        //Start the round.
        setTimeout(startRound, 2000);
    }
    // Just here for testing purposes. Should not be here when game is done.
    $('.start-fight').on('click', ()=>{
        startFight();
    });

    startFight();
    // Build a function that runs the outcome of the inputs and alters the character's stats (health).


});
