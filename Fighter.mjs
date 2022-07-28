const MAX_LIFE = 100

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

    fight(enemy){
        
        let damage    = this.getRandomInt(this.strength);
        let dexterity = this.getRandomInt(enemy.dexterity);

        damage = damage < dexterity ? damage  - dexterity : dexterity;
        enemy.life-= damage > enemy.life ? enemy.life : damage;

        console.log(`${this.name}  🗡️  ${enemy.name} ❤️  ${enemy.name}: ${enemy.life} `);
    }

    isAlive(){
        return this.life > 0;
    }

    showWinner(enemy){
        console.log(`💀 ${enemy.name} is dead`);
        console.log(`🏆 ${this.name} wins (${this.life})`);
    }

}

export default Fighter;