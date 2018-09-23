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
    let playerOneHealthBarValue = document.getElementById('playerOneHealthBar');
    let playerTwoHealthBarValue = document.getElementById('playerTwoHealthBar');

    //Start Fight Button
    const startFightDiv = $('<div>').text('Start Fight!').addClass('start-fight').appendTo('.playField');

    // Variables Used In Fight
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
    let playerOneInput = '';
    let playerTwoInput = '';



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
            playerOneHealthBarValue.value -= (playerTwo.attack * 2);
            console.log(playerOne);
            console.log(playerTwo);
            playerOneInput = '';
            playerTwoInput = '';
            checkRoundWin();
            //Player One Counters, Player Two attacks
        } else if (playerOneInput === 'a' && playerTwoInput === 'i') {
            playerTwo.health -= (playerOne.attack * 2);
            playerTwoHealthBarValue.value -= (playerOne.attack * 2);
            console.log(playerOne);
            console.log(playerTwo);
            playerOneInput = '';
            playerTwoInput = '';
            checkRoundWin();
            //Player One and Player Two attack
        } else if (playerOneInput === 'w' && playerTwoInput === 'i') {
            playerOne.fight(playerTwo);
            playerTwo.fight(playerOne);
            playerOneHealthBarValue.value -= 10;
            playerTwoHealthBarValue.value -= 10;
            console.log(playerOne);
            console.log(playerTwo);
            playerOneInput = '';
            playerTwoInput = '';
            checkRoundWin();
            //Player One heals and Player Two attacks
        } else if (playerOneInput === 's' && playerTwoInput === 'i') {
            playerOne.health -= (playerTwo.attack * 2.5);
            playerOneHealthBarValue.value -= (playerTwo.attack * 2.5);
            console.log(playerOne);
            console.log(playerTwo);
            playerOneInput = '';
            playerTwoInput = '';
            checkRoundWin();
            //Player One attacks and player two heals
        } else if (playerOneInput === 'w' && playerTwoInput === 'k'){
            playerTwo.health -= (playerOne.attack * 2.5);
            playerTwoHealthBarValue.value -= (playerTwo.attack * 2.5);
            console.log(playerOne);
            console.log(playerTwo);
            playerOneInput = '';
            playerTwoInput = '';
            checkRoundWin();
            //Player One heals and player two counters
        } else if (playerOneInput === 's' && playerTwoInput === 'j') {
            playerOne.heal();
            playerOneHealthBarValue.value += 15;
            console.log(playerOne);
            console.log(playerTwo);
            playerOneInput = '';
            playerTwoInput = '';
            checkRoundWin();
            //Player one counters and player two heals
        } else if (playerOneInput === 'a' && playerTwoInput === 'k') {
            playerTwo.heal();
            playerTwoHealthBarValue.value += 15;
            console.log(playerOne);
            console.log(playerTwo);
            playerOneInput = '';
            playerTwoInput = '';
            checkRoundWin();
            //Player one heals and player two heals
        } else if (playerOneInput === 's' && playerTwoInput === 'k') {
            playerOne.heal();
            playerTwo.heal();
            playerOneHealthBarValue.value += 15;
            playerTwoHealthBarValue.value += 15;
            console.log(playerOne);
            console.log(playerTwo);
            playerOneInput = '';
            playerTwoInput = '';
            checkRoundWin();
        }
    }

    const startPhase = ()=>{
        //Once both players have pushed inputs, the game should continue.
        const continueGame = ()=>{
            if (playerOneInput !== '' && playerTwoInput !== ''){
                turnLengthAnnounce();
                turnTimer++;
                calculateRound(playerOneInput, playerTwoInput);
            }
        }
        // Player One Round Input Function:
        const playerOneTurnInput = ()=>{
            $('#modalOne').css('display', 'block');
            document.addEventListener('keydown', (event)=>{
                let keyName = event.key;
                if (keyName === 'w') {
                    playerOneInput = 'w';
                    $('#modalOne').css('display', 'none');
                } else if (keyName === 'a') {
                    playerOneInput = 'a';
                    $('#modalOne').css('display', 'none');
                } else if (keyName === 's') {
                    playerOneInput = 's';
                    $('#modalOne').css('display', 'none');
                }
            })
        }
        // Player Two Round Input Function:
        const playerTwoTurnInput = ()=>{
            $('#modalTwo').css('display', 'block');
            document.addEventListener('keydown', (event)=>{
                let keyName = event.key;
                if (keyName === 'i') {
                    playerTwoInput = 'i';
                    $('#modalTwo').css('display', 'none');
                } else if (keyName === 'j') {
                    playerTwoInput = 'j';
                    $('#modalTwo').css('display', 'none');
                } else if (keyName === 'k') {
                    playerTwoInput = 'k';
                    $('#modalTwo').css('display', 'none');
                }
            })
        }
        playerOneTurnInput();
        playerTwoTurnInput();

        setTimeout(continueGame, 15000);
    }


    const startFight = ()=>{
        //Reset round stats for new fight.
        playerOne.health = 100;
        playerTwo.health = 100;
        playerOneHealthBarValue.value = 100;
        playerTwoHealthBarValue.value = 100;
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
        $('.start-fight').css('display', 'none');
    });

    //Character Selection Brains (Tested and it WORKS! :D)
    $('#pickCharacters').css('display', 'block');
    $('#playerTwoCharacter').css('display', 'none');
    $('#playerOneCharacter>.characterSelect>img').on('click', (event)=>{
        const character = event.target.id;
        if (character === 'barbarianOne') {
            playerOne = brawlerOne;
            $('.playerOne').attr('src', 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/342/420/618/636272680339895080.png');
            $('#playerOneCharacter').css('display', 'none');
            $('#playerTwoCharacter').css('display', 'flex');
        } else if (character === 'priestOne') {
            playerOne = priestOne;
            $('.playerOne').attr('src', 'https://i.pinimg.com/originals/5c/aa/17/5caa172e75d7fcc0369b431ab53c224a.png');
            $('#playerOneCharacter').css('display', 'none');
            $('#playerTwoCharacter').css('display', 'flex');
        } else if (character === 'knightOne') {
            playerOne = knightOne;
            $('.playerOne').attr('src', 'https://i.pinimg.com/originals/cc/d9/d3/ccd9d348e2f084d1d84de8e3e2f0b1f4.png');
            $('#playerOneCharacter').css('display', 'none');
            $('#playerTwoCharacter').css('display', 'flex');
        } else if (character === 'rangerOne') {
            playerOne = rangerOne;
            $('.playerOne').attr('src', 'http://www.pngmart.com/files/6/Archer-Transparent-PNG.png');
            $('#playerOneCharacter').css('display', 'none');
            $('#playerTwoCharacter').css('display', 'flex');
        }
        console.log(character);
        console.log(playerOne);
    });
    $('#playerTwoCharacter>.characterSelect>img').on('click', (event)=>{
        const character = event.target.id;
        if (character === 'barbarianTwo') {
            playerTwo = brawlerTwo;
            $('.playerTwo').attr('src', 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/342/420/618/636272680339895080.png');
            $('#playerTwoCharacter').css('display', 'none');
            $('#pickCharacters').css('display', 'none');
        } else if (character === 'priestTwo') {
            playerTwo = priestTwo;
            $('.playerTwo').attr('src', 'https://i.pinimg.com/originals/5c/aa/17/5caa172e75d7fcc0369b431ab53c224a.png');
            $('#playerTwoCharacter').css('display', 'none');
            $('#pickCharacters').css('display', 'none');
        } else if (character === 'knightTwo') {
            playerTwo = knightTwo;
            $('.playerTwo').attr('src', 'https://i.pinimg.com/originals/cc/d9/d3/ccd9d348e2f084d1d84de8e3e2f0b1f4.png');
            $('#playerTwoCharacter').css('display', 'none');
            $('#pickCharacters').css('display', 'none');
        } else if (character === 'rangerTwo') {
            playerTwo = rangerTwo;
            $('.playerTwo').attr('src', 'http://www.pngmart.com/files/6/Archer-Transparent-PNG.png');
            $('#playerTwoCharacter').css('display', 'none');
            $('#pickCharacters').css('display', 'none');
        }
        console.log(character);
        console.log(playerTwo);
    });


});
