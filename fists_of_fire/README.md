# Fists of Fire
---
[Play Fists of Fire](https://krmeserve.github.io/fists_of_fire/ "Play Fists of Fire")
---
## Instructions

Fists of Fire is based off of two player arcade-style fighting games. Both players will pick a unique character at the start of the game and fight until one (or both) players have reached 0 health. Where this game differs is that it handles combat through a turn-based system instead of timing based inputs.

This allows for the game to be played locally on the same keyboard without any issues. Player One will control their character with the w, a, s, and d keys while Player Two will control theirs with the i, j, k, and l keys.

A single game will put both players against one another in a best of three situation where the first one to win twice will win the game. Good luck outsmarting your opponent!

---
### Basic Attacks

All four characters share a few basic attacks that are the core of gameplay.

**Attack**

This is your basic damage dealing ability. It deals increased damage to the opponent if they are healing, but can be countered.

**Counter**

If your opponent attacks you, you take no damage and deal double damage back to them instead. Otherwise, this attack does nothing.

**Heal**

You will heal for 15 health on a successful cast. If this is interrupted by an attack, you will take heavy damage instead.

---

### Unique Attacks

All four characters have unique special attacks. Each special attack will stun the opponent on the turn it is played (unless both players use their specials at the same time).

**Barbarian**

The Barbarian is a high-damage class that deals 20 unblockable damage to the enemy.

**Priest**

The Priest is - above all - skilled at in holy magic that is focused on healing. Because of this, their special attack deals 5 unblockable damage but heals for 15.

**Knight**

The Knight is a master of melee and damage dealing. The knight does 15 unblockable damage and then raises his shield, increasing health by 5.

**Ranger**

The Ranger likes to stay at a distance and deals 10 unblockable damage and runs to a safer distance, healing for 10.


## Technologies Used/Approach Taken

Fists of Fire was made using HTML, CSS, JavaScript, and jQuery after only 3 weeks of class. The focus of the game was to make something that could be playable using the DOM, so JavaScript and jQuery were my focus until I had a baseline game functional. Then, my goal shifted to allow a player to enjoy the game without any prior knowledge or experience with this game before.

CSS became more and more important as I continued working to get the game to be visual and interactive, while still easy to pick up. Before the project began I drew a very basic wireframe of how I wanted everything to look throughout the various stages of each round, which really helped when I got down to actually working on the code.

All logic was made with JavaScript and jQuery, animations with CSS, and the elements were all made with HTML and jQuery.

Once I got the game in working condition (both visually and technically), I sent the game out to family and friends to viciously play-test and critique. This was probably the most helpful thing I could have done. Within an hour or so I had a list of bugs and UI/UX comments about what confused them or what didn't seem to be working correctly. I can't say enough how important (and somewhat discouraging) having someone else look at your work is. There is always more that could be done and when a brand new player starts playing with the game, they'll come back with "I wish it did this when I clicked a button" or "Why doesn't this happen when I..." etc. You can't fix everything that everyone mentions, but getting an outside reaction is priceless.

## Unsolved Problems

The game will run fairly flawlessly throughout the multiple times I have played it with my wife and had family and friends play-test it. Most of the problems are on the UI side.

I would have liked to make custom animations for each attack, but spent the better part of six hours working on a single animation and it turned out terrible. So I had to resort to floating text when a move was used instead, which gets the same point across but is nowhere near as cool.

When the Start Game button goes away, the fight arena shrinks. This problem doesn't cause any issues, but is annoying to me. Unfortunately, I ran out of time to fix this problem as the other bugs I ran into were either game breaking or ruined the game experience and were higher priority.

At the start of each game, if both players use their special attacks, sometimes the health totals act unexpectedly. Since some of them have healing involved, if their special attack is registered first, they heal first and then take the damage from their opponent. You can't heal over 100 though. So, sometimes where you think you'd take 20 damage and heal 15, instead you just take 20 damage.

If you selected a class that needed their image to be swapped to face the other direction and then restart the game and choose another class that needed to have the direction it is facing swapped, on your second playthrough you will be facing the wrong way. This could have been fixed if I had more time, but I found it the night before the project was due.

## Programming Thought Process

**Fighter Class and extensions**

I used a class to hold the basic information for the characters and then created the characters later in the program.

```
class Fighter {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.attack = 10;
    }
    //Attack function
    fight(enemy){
        enemy.health -= this.attack;
    }
    //Counter function
    counter(){
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
```

```
class Priest extends Fighter {
    //Special Attack
    specialPlayerOne(enemy){
        enemy.health -= 5;
        this.health += 15;
        playerTwoHealthBarValue.value -= 5;
        playerOneHealthBarValue.value += 15;
    }
    specialPlayerTwo(enemy){
        enemy.health -= 5;
        this.health += 15;
        playerTwoHealthBarValue.value += 15;
        playerOneHealthBarValue.value -= 5;
    }
}
```

The counter function ended up never getting used and instead was hard coded into the program. If I had more time I would have figured out a way to make this easier to pull later.

The extension classes only housed the special attacks. They have one version of the special attack for both player one and player two that takes 'enemy' as an argument. When it is called later in the code, I then didn't need to hard code anything in which was very useful. I even built the change of healthbar (which is a styled html progress bar) into the attack.


**Calling the Characters**

I called one version of the classes for each player so the characters would keep their names and both players could be the same character without any problems.

```
const brawlerOne = new Brawler('GARR');
const priestOne = new Priest('Lillian');
const knightOne = new Knight('Sir Grant');
const rangerOne = new Ranger('Outlaw');
const brawlerTwo = new Brawler('GARR');
const priestTwo = new Priest('Lillian');
const knightTwo = new Knight('Sir Grant');
const rangerTwo = new Ranger('Outlaw');

let playerOne = brawlerOne;
let playerTwo = knightTwo;
```

This let me create backup functions that were set equal to the new Brawler easily later once the players selected who they wanted to be.


**Start of Game**

I created two modals that both display the character images that you can click in order to select your class at the start of the game. On click of an image, I ran an if/else statement that checked for which character was selected and assigned that class to the correct player.

```
const modalPlayerOne = $('#modalPlayerOne').children();

$('#playerOneCharacter>.characterSelect>img').on('click', (event)=>{
    const character = event.target.id;
    if (character === 'barbarianOne') {
        playerOne = brawlerOne;
        $('.playerOne').attr('src', 'images/barbarian.png');
        $('#playerOneCharacter').css('display', 'none');
        $('#playerTwoCharacter').css('display', 'flex');
        $('#playerOneName').text(playerOne.name);
        $('#modalPlayerOne').children().remove();
        $('#modalPlayerOne').append(modalPlayerOne);
        const paragraph = ('<p>');
        $(paragraph).appendTo('#modalPlayerOne');
        $('#modalPlayerOne').children().eq(5).append('The Barbarian Special Attack deals 20 unblockable damage.');
        $('#playerOneCharacter>.characterSelect>img').off('click');
    }
```

Above is the click event for assigning a single character to player one. A lot of the code in the above block is unnecessary until you want to restart the game. I ran into an issue with the text that would inform you what your character's special attack is, where on the second play-through you would still have your first character's special attack text was still shown.


**Start Fight**

Since each game is a best of three, I needed to make a function that reset the counters and reset the health bars every round. I also had a fight alert box that would post alerts to the players and let them know the score throughout the game.

```
const startFight = ()=>{
    //Reset round stats for new fight.
    playerOne.health = 100;
    playerTwo.health = 100;
    playerOneHealthBarValue.value = 100;
    playerTwoHealthBarValue.value = 100;
    turnTimer = 1;
    playerOneSpecial = 1;
    playerTwoSpecial = 1;
    //UI alerts
    $('#fightAlertBox').text('New Round Beginning! Prepare To Fight!');
    setTimeout(emptyAlertBox, 4000);

    //Start the round.
    setTimeout(startPhase, 4500);
}
```


**Event Listeners and Player Inputs**

The largest challenge I had was with the player keyboard inputs. I needed to make the game playable on the keyboard so the move selection would be a secret from the other player. I only wanted inputs to be accepted while the modal with the player's moves was shown, so as soon as an input was accepted, it would remove the event listener.

```
const playerOneTurnInput = ()=>{
    $('#modalOne').css('display', 'block');
    document.addEventListener('keydown', playerOneEventListener);
}

const playerOneEventListener = (event)=>{
    let keyName = event.key;
    if (keyName === 'w') {
        playerOneInput = 'w';
        $('#modalOne').css('display', 'none');
        playerInputCount++;
        continueGame();
        document.removeEventListener('keydown', playerOneEventListener);
    }
```
I hard-coded in each input I would accept and then updated the player input variable. This also would hide the modal and continue the game.

I ran into an issue where the game would actually run the continueGame function twice since each player's input would tell the game to run the function. Because of that, I built a if statement that would only continue the game after both players had entered an input. Then, I would reset the player input variable so next round it would still work.

```
    const continueGame = ()=>{
        if (playerInputCount === 2){
            playerInputCount = 0;
            turnLengthAnnounce();
            turnTimer++;
            const calculateRoundDelay = ()=>{
                calculateRound(playerOneInput, playerTwoInput);
            }
            setTimeout(calculateRoundDelay, 4000);
        }
    }
```
The setTimeout function is there only so the players have a moment before the round starts.


**Calculate Rounds Based on User Input**

Each round requires a unique interaction, based on the player's inputs. This was hard coded with an if statement in order to get the health bars and animated text to show correctly.

```
const calculateRound = (playerOneInput, playerTwoInput)=>{
    //Player One attacks, player two counters
    if (playerOneInput === 'w' && playerTwoInput === 'j') {
        playerOne.health -= (playerTwo.attack * 2);
        playerOneHealthBarValue.value -= (playerTwo.attack * 2);
        $('.animationPlayerOne').text('ATTACK');
        $('.animationPlayerTwo').text('COUNTER');
        playerOneInput = '';
        playerTwoInput = '';
        setTimeout(checkRoundWin, 5000);
    }
```


**Checking if the game is over**

Every round, the game would then check to see if either character (or both) was out of health. Then, it would display the correct text and give a win to the correct player. It would then check if a player had won 2 games and if so, award the victory to that player.

```
const checkGameWin = ()=>{
    if (playerOneRoundsWon === 2) {
        playerOneWins();
        makeStartOverButton();
    } else if (playerTwoRoundsWon === 2) {
        playerTwoWins();
        makeStartOverButton();
    } else {
        startFight();
    }
}

const checkRoundWin = ()=>{
    $('.animationPlayerOne').empty();
    $('.animationPlayerTwo').empty();
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
        setTimeout(checkGameWin, 10000);
    }
```

***
