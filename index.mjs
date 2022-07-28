import Fighter from "./Fighter.mjs";

const fighters = [
    { 
        name: '🦁 Nemean Lion',
        strength: 11,
        dexterity: 13,
    },
    { 
        name: '🧔 Heracles',
        strength: 20,
        dexterity: 6,
    },
    { 
        name: '🐺 Wolf',
        strength: 16,
        dexterity: 10,
    },
    { 
        name: '🐵 Monkey',
        strength: 10,
        dexterity: 18,
    },

]
const randFigter1 = 0;
const randFigter2 = 1;
const fighter1 = new Fighter(fighters[randFigter1].name, fighters[randFigter1].strength, fighters[randFigter1].dexterity,100);
const fighter2 = new Fighter(fighters[randFigter2].name, fighters[randFigter2].strength, fighters[randFigter2].dexterity);

fighter1.show();
fighter2.show();

let round = 0;
while (true) {

    console.log(`🕛 Round #${++round}`);

    fighter1.makeMove(fighter2);
    if (!fighter2.isAlive()) {
        fighter1.showWinner(fighter2);
        break;
    }

    fighter2.makeMove(fighter1);
    if (!fighter1.isAlive()) {
        fighter2.showWinner(fighter1);
        break;
    }

}

