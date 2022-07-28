const MAX_LIFE = 100;
const CHANCE_TO_RECOVER = 20;
const CHANCE_TO_ADD_DAMAGE = 20;


class Fighter {
    constructor(name, strength, dexterity, life = MAX_LIFE){
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = life;
    }

    getRandomInt(max){
        return Math.floor(Math.random() * max) + 1;
    }

    show(){
        console.log(`${this.name} ❤️  ${this.life}`);
    }

    makeMove(enemy) {
        this.recover();
        this.fight(enemy);
        this.combo(enemy);
    }

    fight(enemy){
        
        let damage    = this.getRandomInt(this.strength);
        let dexterity = this.getRandomInt(enemy.dexterity);

        damage = damage < dexterity ? dexterity : damage - dexterity;
        enemy.life-= enemy.life < damage ? enemy.life : damage;
        console.log(`${this.name}  🗡️  ${enemy.name} ❤️  ${enemy.name}: ${enemy.life} `);
    }

    isAlive(){
        return this.life > 0;
    }

    showWinner(enemy){
        console.log(`💀 ${enemy.name} is dead`);
        console.log(`🏆 ${this.name} wins (${this.life})`);
    }

    recover(){
        if(this.getRandomInt(100) <= CHANCE_TO_RECOVER) {
            this.life += 10;
            console.log(`${this.name} eat apple 🍏  and recover ❤️  ${this.name}: ${this.life}`);
        }
    }

    combo(enemy){
        if(enemy.life > 0 && this.getRandomInt(100) <= CHANCE_TO_ADD_DAMAGE) {
            console.log(`${this.name} drank potion 🧪 and made combo hit`);
            this.fight(enemy);
        }
    }

}

export default Fighter;