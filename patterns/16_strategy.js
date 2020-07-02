// Он определяет семейство алгоритмов, которые наследуют объекты в неизменяемом порядке

class Vehicle{
    travelTime(){
        return this.timeTaken
    }
}

class Bus extends Vehicle{
    constructor(){
        super()
        this.timeTaken = 10
    }
}


class Taxi extends Vehicle{
    constructor(){
        super()
        this.timeTaken = 5
    }
}


class Car extends Vehicle{
    constructor(){
        super()
        this.timeTaken = 3
    }
}


// Класс, показывающий то или иную стратегию
class Commute{
    travel(transport){
        return transport.travelTime()
    }
}

//Взаимодействие с различными стратегиями через единый интерфейс
const commute = new Commute()

console.log(commute.travel(new Taxi()))
console.log(commute.travel(new Bus()))
console.log(commute.travel(new Car()))