// Global Constants go up here!
let turnTimer = 1;

// Build Fighter Class With Basic Stats and functions. (-- Tested with Logs already! All Functions and stats are retrievable --)
class Fighter {
    constructor(name){
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
        console.log(`${this.name} has countered.`);
    }
    //Heal Function
    heal(){

        if (this.health < 100) {
            this.health += 15;
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


    // Variables Used In Fight
    const startFightDiv = $('<div>').text('Start Fight!').addClass('start-fight').appendTo('.playField');
    const emptyAlertBox = ()=>{
        $('#fightAlertBox').empty();
    };
    const turnLengthAnnounce = ()=>{
        $('#fightAlertBox').text(`Phase ${turnTimer}... Fight!`);
        setTimeout(emptyAlertBox, 4000);
    };
    const playerOneWins = ()=>{
        $('#fightAlertBox').text('Player One has won the game! Please reload the page if you want to play again.');
        return false;
    };
    const playerTwoWins = ()=>{
        $('#fightAlertBox').text('Player One has won the game! Please reload the page if you want to play again.');
        return false;
    };
    let playerOneRoundsWon = 0;
    let playerTwoRoundsWon = 0;



    //Checking to see if someone has won the best of three. If so, it ends the game.
    // (=== TO ADD: Want a button to pop up on the victory screen to reload the page so they can pick characters again and play again ===)
    const checkGameWin = ()=>{
        if (playerOneRoundsWon === 2) {
            playerOneWins();
        } else if (playerTwoRoundsWon === 2) {
            playerTwoWins();
        } else {
            startFight();
        }
    }


    const checkRoundWin = ()=>{
        //Checking who has 0 health and awarding a win to the victor (or a draw)
        if (playerOne.health > 0 && playerTwo.health <= 0) {
            const playerOneWinsMessageOne = ()=>{
                $('#fightAlertBox').text('Player One Wins This Round!');
                playerOneRoundsWon++;
                setTimeout(emptyAlertBox, 4000);
            }
            const playerOneWinsMessageTwo = ()=>{
                $('#fightAlertBox').text(`Player One has won ${playerOneRoundsWon} rounds and Player Two has won ${playerTwoRoundsWon}.`);
                setTimeout(emptyAlertBox, 4000);
            }
            playerOneWinsMessageOne();
            setTimeout(playerOneWinsMessageTwo, 5000)
            setTimeout(checkGameWin, 12000);
            console.log(playerOneRoundsWon);
        } else if (playerTwo.health > 0 && playerOne.health <= 0) {
            const playerTwoWinsMessageOne = ()=>{
                $('#fightAlertBox').text('Player Two Wins This Round!');
                playerTwoRoundsWon++;
                setTimeout(emptyAlertBox, 4000);
            }
            const playerTwoWinsMessageTwo = ()=>{
                $('#fightAlertBox').text(`Player One has won ${playerOneRoundsWon} rounds and Player Two has won ${playerTwoRoundsWon}.`);
                setTimeout(emptyAlertBox, 4000);
            }
            playerTwoWinsMessageOne();
            setTimeout(playerTwoWinsMessageTwo, 5000)
            setTimeout(checkGameWin, 12000);
            console.log(playerTwoRoundsWon);
        } else if (playerTwo.health <= 0 && playerOne.health <= 0){
            const playersDraw = ()=>{
                $('#fightAlertBox').text('Draw! Both players lost. Rematch!');
                setTimeout(emptyAlertBox, 4000);
            }
            const playerTwoWinsMessageTwo = ()=>{
                $('#fightAlertBox').text(`Player One has won ${playerOneRoundsWon} rounds and Player Two has won ${playerTwoRoundsWon}.`);
                setTimeout(emptyAlertBox, 4000);
            }
            playersDraw();
            setTimeout(playerTwoWinsMessageTwo, 5000);
            setTimeout(checkGameWin, 12000);
        } else {
            startPhase();
        }
    }

    const calculateRound = (playerOneInput, playerTwoInput)=>{
        //Player One attacks, player two counters
        if (playerOneInput === 'w' && playerTwoInput === 'j') {
            playerOne.health -= (playerTwo.attack * 2);
            console.log(playerOne);
            console.log(playerTwo);
            checkRoundWin();
            //Player One Counters, Player Two attacks
        } else if (playerOneInput === 'a' && playerTwoInput === 'i') {
            playerTwo.health -= (playerOne.attack * 2);
            console.log(playerOne);
            console.log(playerTwo);
            checkRoundWin();
            //Player One and Player Two attack
        } else if (playerOneInput === 'w' && playerTwoInput === 'i') {
            playerOne.fight(playerTwo);
            playerTwo.fight(playerOne);
            console.log(playerOne);
            console.log(playerTwo);
            checkRoundWin();
            //Player One heals and Player Two attacks
        } else if (playerOneInput === 's' && playerTwoInput === 'i') {
            playerOne.health -= (playerTwo.attack * 2.5);
            console.log(playerOne);
            console.log(playerTwo);
            checkRoundWin();
            //Player One attacks and player two heals
        } else if (playerOneInput === 'w' && playerTwoInput === 'k'){
            playerTwo.health -= (playerOne.attack * 2.5);
            console.log(playerOne);
            console.log(playerTwo);
            checkRoundWin();
            //Player One heals and player two counters
        } else if (playerOneInput === 's' && playerTwoInput === 'j') {
            playerOne.heal();
            console.log(playerOne);
            console.log(playerTwo);
            checkRoundWin();
            //Player one counters and player two heals
        } else if (playerOneInput === 'a' && playerTwoInput === 'k') {
            playerTwo.heal();
            console.log(playerOne);
            console.log(playerTwo);
            checkRoundWin();
            //Player one heals and player two heals
        } else if (playerOneInput === 's' && playerTwoInput === 'k') {
            playerOne.heal();
            playerTwo.heal();
            console.log(playerOne);
            console.log(playerTwo);
            checkRoundWin();
        }
    }

    const startPhase = ()=>{
        // Collect player input.
        const playerOneInput = prompt('Choose your attack! w = attack, a = counter, s = heal, d = super', 'w / a / s / d');
        const playerTwoInput = prompt('Choose your attack! i = attack, j = counter, k = heal, l = super', 'i / j / k / l');
        turnLengthAnnounce();
        turnTimer++;
        const calculateRoundDelay = ()=>{
            calculateRound(playerOneInput, playerTwoInput);
        };
        setTimeout(calculateRoundDelay, 6000);
    }


    const startFight = ()=>{
        //Reset round stats for new fight.
        playerOne.health = 100;
        playerTwo.health = 100;
        turnTimer = 1;
        //UI alerts
        $('#fightAlertBox').text('New Round Beginning! Prepare To Fight!');
        setTimeout(emptyAlertBox, 6000);

        //Start the round.
        setTimeout(startPhase, 6500);
    }
    // Just here for testing purposes. Should not be here when game is done.
    $('.start-fight').on('click', ()=>{
        startFight();
    });

    // Build a function that runs the outcome of the inputs and alters the character's stats (health).


});
