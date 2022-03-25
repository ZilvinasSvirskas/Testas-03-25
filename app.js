function rand(min, max) {           
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    }


class Vaisius {
constructor(){
    this.dydis = this.rand(5,25);
    this.id = this.rand(100000, 999999);
    this.prakastas = false;
}
   prakasti(){
    

    }
}


class Krepsys{
    static vaisiai = [];
    static pripildyti(){
    }
    static isiminti(){

    }
   constructor(vaisiai,uzpildo){
       this.vaisiai = vaisiai;
       this.uzpildo = uzpildo;
   }
}

console.log("I'm sorry, I'm not ready this time, have a nice day")