class CoffeMechine {

#temperature = 90;

    constructor(waterAmout) {
        this.waterAmout = waterAmout;
        this.#temperature = this.#temperature;
    }

    set temperature(temprature) {
        console.log(`temperature di ubah dari ${this._temperature} menjadi ${temprature}`);
    }
    get temperature() {
        return this.#temperature;
    }
    
    #defaultTemprature() {
        return 90;
    }
}

const coffee = new CoffeMechine(10);
console.log('sebelum di ubah : ', coffee.temperature);
coffee.temperature = 100;
console.log('setelah di ubah : ', coffee.temperature);

