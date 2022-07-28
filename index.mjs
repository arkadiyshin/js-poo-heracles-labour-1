// First Labour : Heracles vs Nemean Lion
// use your Figher class here
import Fighter from "./Fighter.mjs";


const lion = new Fighter('🦁 Nemean Lion', 11, 13);
const heracles = new Fighter('🧔 Heracles', 20, 6);

lion.show();
heracles.show();

let round = 0;
while (true) {

    console.log(`🕛 Round #${++round}`);

    heracles.makeMove(lion);
    if (!lion.isAlive()) {
        heracles.showWinner(lion);
        break;
    }

    lion.makeMove(heracles);
    if (!heracles.isAlive()) {
        lion.showWinner(heracles);
        break;
    }

}


