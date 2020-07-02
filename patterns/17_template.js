// Паттерн определяет некоторый скелет, но при этом он делегирует некий функционал
// дочерним классам

class Employee{
    constructor(name, salary){
        this.name = name
        this.salary = salary
    }
    responsibilities() {}

    work(){
        return `${this.name} выполняет ${this.responsibilities()}`
    }

    getpaid(){
        return `${this.name} имее ЗП ${this.salary}`
    }
}

class Developer extends Employee{
    constructor(name, salary){
        super(name, salary)
    }

    responsibilities(){
        return `Процесс создания программ`
    }
}

class Tester extends Employee{
    constructor(name, salary){
        super(name, salary)
    }

    responsibilities(){
        return `Процесс тестирования программ`
    }
}

const dev = new Developer('Leha', 100000)
console.log(dev.getpaid())
console.log(dev.work())


const tester = new Tester('Lelya', 200000)
console.log(tester.getpaid())
console.log(tester.work())