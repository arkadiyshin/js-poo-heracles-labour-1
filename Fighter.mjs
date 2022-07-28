const MAX_LIFE = 100;
const CHANCE_TO_RECOVER = 10;
const CHANCE_TO_COMBO = 10;

class Fighter {
    constructor(name, strength, dexterity, life = MAX_LIFE){
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = life;
    }

    getRandomInt(max){
        return Math.ceil(Math.random() * max);
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

        damage = Math.min(damage, dexterity, enemy.life);
        enemy.life-= damage;
        console.log(`${this.name}  🗡️  ${damage}  ${enemy.name} ❤️  ${enemy.name}: ${enemy.life} `);
    }

    isAlive(){
        return this.life > 0;
    }

    showWinner(enemy){
        console.log(`💀 ${enemy.name} is dead`);
        console.log(`🏆 ${this.name} wins (${this.life})`);
    }

    recover(){
        let random = this.getRandomInt(100);
        if(random <= CHANCE_TO_RECOVER) {
            this.life += random;
            console.log(`${this.name} eat apple 🍏 ${random} and recover ❤️  ${this.name}: ${this.life}`);
        }
    }

    combo(enemy){
        let random = this.getRandomInt(100);
        if(enemy.life > 0 && random<= CHANCE_TO_COMBO) {
            console.log(`${this.name} drank potion 🧪 and made combo hit`);
            this.fight(enemy);
        }
    }

}

export default Fighter;