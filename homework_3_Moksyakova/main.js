function CoffeeMake(){}
CoffeeMake.prototype.on = function(){
    console.log('on  ||', this.drink)
}
CoffeeMake.prototype.off = function(){
    console.log('off X  ', this.drink)
}

function Capelna (drink){
    this.drink = drink
}

Capelna.prototype = CoffeeMake.prototype

Capelna.prototype.stop = function(){
    console.log('stop |> - ', this.drink)
}

const NewCoffemake = new Capelna('late')

NewCoffemake.on()
NewCoffemake.off()
NewCoffemake.stop()

function Rizhkova(drink){
    this.drink = drink
}
Rizhkova.prototype = Capelna.prototype;

Rizhkova.prototype.shugar = function(){
    console.log('How many spoons you need?')
}
Rizhkova.prototype.size = function(){
    console.log('Choose size')
}

let myRizhkova = new Rizhkova('Take your coffe')

myRizhkova.on()
myRizhkova.off()
myRizhkova.stop()
myRizhkova.shugar()
myRizhkova.size()

function CoffeMachine(drink){
    this.drink = drink
}
CoffeMachine.prototype = Rizhkova.prototype;

CoffeMachine.prototype.withMilk = function(){
    console.log('Do you want milk?')
}
CoffeMachine.prototype.withCofein = function(){
    console.log('Choose kind of coffee')
}

let myCoffeMachine = new CoffeMachine('Have a good time')

myCoffeMachine.on()
myCoffeMachine.off()
myCoffeMachine.stop()
myCoffeMachine.shugar()
myCoffeMachine.size()
myCoffeMachine.withMilk()
myCoffeMachine.withCofein()
