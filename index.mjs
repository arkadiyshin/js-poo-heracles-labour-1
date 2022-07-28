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

    heracles.fight(lion);
    heracles.combo(lion);
    if (!lion.isAlive()) {
        heracles.showWinner(lion);
        break;
    }

    lion.fight(heracles);
    lion.combo(heracles);
    if (!heracles.isAlive()) {
        lion.showWinner(heracles);
        break;
    }

    heracles.recover();
    lion.recover();

}


