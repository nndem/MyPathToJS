// Паттерн state. Здесь: несколько классов делегируют своё состояние в общий класс

class Light{
    constructor(light){
        this.light = light
    }
}

class RedLight extends Light {
    constructor(){
        super('red')
    }

    sign() {
        return 'СТОП'
    }
}

class YellowLight extends Light {
    constructor(){
        super('yellow')
    }

    sign() {
        return 'Готовься'
    }
}

class GreenLight extends Light {
    constructor(){
        super('green')
    }

    sign() {
        return 'Можно ехать'
    }
}

// Некий родительский класс, который объединяет различные state
class TrafficLight{
    constructor(){
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight()
        ]
        this.current = this.states[0]
    }
    change(){
        const total = this.states.length
        let index = this.states.findIndex(light => light === this.current)

        if (index +1 < total) {
            this.current = this.states[index +1]
        }else{
            this.current = this.states[0]
        }
    }

    sing(){
        return this.current.sign()
    }
}

const traffic = new TrafficLight()
console.log(traffic.sing())
traffic.change()
console.log(traffic.sing())
traffic.change()
console.log(traffic.sing())

