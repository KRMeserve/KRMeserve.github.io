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

At the start of each game, if both players use their special attacks, sometimes the health totals act unexpectedly. Since some of them have healing involved, if their special attack is registered first, they heal first and then take the damage from their opponent. You can't heal over 100 though. So, sometimes where you think you'd take 20 damage and heal 15, instead you just take 20 damage. I'm not sure how to fix this problem though.
