class Chaeracter {
    constructor(name,helath,posistio){
        this.name = name;
        this.helath = helath;
        this.posistio = posistio;
    }


    canMove(){
        console.log(`${this.name} is moves to onother psoition...`);
    }
}

function canAttack(character){
    return {
        attack: () => {
            console.log(`${character.name} is attacking with a weapon...`);
        }
    };
}

function canDefend(character){
    return {
        defend: () => {
            console.log(`${character.name} is defens with a shield`);
        }
    };
}

function canCastSpell(character){
    return {
        castSpell: () => {
            console.log(`${character.name} is casting a spell...`);
        }
    };
}

function crataMonster(name) {
    const charcter = new Chaeracter(name,100,0);
    return Object.assign(charcter, canAttack(charcter));
}

function createWarrior(name){
    const charcter = new Chaeracter(name,150,0);
    return Object.assign(charcter,canAttack(charcter),canDefend(charcter));
}

function createMage(name){
    const charcter = new Chaeracter(name,80,0);
    return Object.assign(charcter,canCastSpell(charcter));
}

function createDefender(name){
    const charcter = new Chaeracter(name,120,0);
    return Object.assign(charcter,canDefend(charcter));
}

const monster = crataMonster('Monster');
monster.canMove();
monster.attack();

const warrior = createWarrior('Warrior');
warrior.canMove();
warrior.attack();
warrior.defend();

const mage = createMage('Mage');
mage.canMove();
mage.castSpell();

const defender = createDefender('Defender');
defender.defend();
defender.canMove();
