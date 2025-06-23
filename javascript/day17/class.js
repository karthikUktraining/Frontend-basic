//class 
//a class is like a blueprint 
//An object is an actual thing made from that blueprint 


//method is a function which defined already what to do
// function u write what to do

class Car {
    constructor(brand, model) {
        this.brand = brand;//property
        this.model = model;
    }


    //method
    startEngine() {
        console.log(`${this.brand}  ${this.model} engine start`)
    }

    getValues() {
        return [this.brand, this.model]
    }
    getKeys() {
        return Object.keys(this)
    }
}




let car1 = new Car("Audii", "A1")
let car2 = new Car("Audii", "A2")
console.log(car1)
car1.startEngine()

console.log(car1.getValues())
console.log(car1.getKeys())

//OOPS - Object Oreinted Programing
//there are four main pillars of OOPs Concepts
//Encapsulation:
//Abstract:
//Inheritance:
//Polymorphism:


//Encapsulation : is bundling of data and methods that operate on 
// that data(properties) into a single unit,and restricting access to some of the object's components


class Person {
    constructor(name, age) {
        this.name = name;
        let newAge = age; //private properties 
        this.getAge = function () {
            return newAge;
        };
    }

    greet() {
        console.log(`hello, my name is ${this.name}`)
    }
}


let newPreson1 = new Person("karthik", 30)

newPreson1.greet()
console.log(newPreson1.getAge())


//Abstract: means hiding the complex details 
// and showing only the essentials features of an object

//html css js oops react react-redux state git scrum kanban testing token api

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner
        this.newBalance = balance

    }

    deposit(amount) {
        this.#updateBalance(amount, "deposit")
    }
    withdraw(amount) {
        this.#updateBalance(amount, "withdraw")
    }
    getBalance() {
        console.log(this.newBalance);
    }

    #updateBalance(amount, type) {
        if (amount > 0 && type === "deposit") {
            this.newBalance = this.newBalance + amount
        } else if (type === "withdraw") {
            this.newBalance = this.newBalance - amount

        }
    }
}


let myAcc = new BankAccount("karthik", 5000)
myAcc.deposit(345)
myAcc.getBalance()
console.log(myAcc)


//inheritance Allow a class to inherit properties and methods from another class 
// in js inheritance can be implenmented using th e class syntax with the extends keywords

class Vechicle extends Car {
    constructor(brand, model, year, color) {
        super(brand, model)
        this.year = year
        this.color = color
    }
    getCarDetails() {
        console.log(`${this.brand}  ${this.model} built in ${this.year} with ${this.color}`)
    }
}


let newVechicle = new Vechicle("audii", "a1", 2024, "red")

newVechicle.getCarDetails()
newVechicle.startEngine()


//4.Polymorphism means many forms 
//in oops it allows objects to respons differently to the
//  same method call depending on their type

class Printer {
    print() {
        console.log("printing  Document.....")
    }
}

class PDFPrinter extends Printer {
    print() {
        console.log("printing PDF.....")

    }
}


class ImagePrinter extends Printer {
    print() {
        console.log("printing Image.....")

    }
}



function executePRint(printer) {
    printer.print()
}
const pdf = new PDFPrinter()
const img = new ImagePrinter()

executePRint(pdf)
executePRint(img)


//method overriding ---same function name with different function inside it