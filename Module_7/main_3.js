class Hewan {
    suara() {
        console.log("Hewan bersuara");
    }
}

class Kucing extends Hewan {
    suara(){
        console.log("Meow");
    }
}

const kitty = new Kucing();
kitty.suara(); // Output: Meow

class Smartphone {
    constructor(color,brand,model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }
    
    charge(){
        console.log(`console.log("Charging ${this.brand} ${this.model}...")`);
    }
}

class Android extends Smartphone {
    constructor(color,brand,model,divece){
        super(color,brand,model);
        this.divece = divece;  
    }
    charge(){
        super.charge();
        console.log(`console.log("Android ${this.brand} ${this.model} is charging...")`);
    }
    splitScreen(){
        console.log(`console.log("Android ${this.brand} ${this.model} is in split screen mode...")`);
    }
}

const myPhone = new Android("Black","Samsung","Galaxy S21","Mobile");
myPhone.charge();