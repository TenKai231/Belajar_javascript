class smartPhone {
    constructor(color, bradn, model) {
        this.color = color;
        this.brand = bradn;
        this.model = model;
    }

    charging(){
        console.log(`${this.brand} ${this.model} is charging`);
    }
}

class iOS extends smartPhone {
    ariDrop(){
        console.log('iOS has AirDrop feature');
    }
}

class Android extends smartPhone {
    splitScreen(){
        console.log('Android has split-screen feature');
    }
}

const ios = new iOS('black', 'A' , '14 Pro Max');
const android = new Android('white', 'S' , '22 Ultra');

ios.charging();
ios.ariDrop();

android.charging();
android.splitScreen();

console.log(ios instanceof smartPhone);
console.log(android instanceof smartPhone);
