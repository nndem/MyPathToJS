/* Структурные паттерны внедряеются в уже готовое приложения для нового функционала
Паттерн adapter позволяет объединить старый и новый интерфейсы*/

class OldCalc{
    operations(t1, t2, operation){
        switch(operation){
            case 'add': return t1+t2
            case 'sub': return t1-t2
            default: return NaN
        }
    }
}

class NewCalc{
    add(t1, t2){
        return t1+t2
    }

    sub(t1,t2){
        return t1-t2
    }
}

class Calcadapter{
    constructor(){
        this.calc = new NewCalc()
    }

    operations(t1, t2, operation){
        switch(operation){
            case 'add': return this.calc.add(t1,t2)
            case 'sub': return this.calc.sub(t1,t2)
            default: return NaN
    }
}}

// пользуемся только старым классом
const oldCalc = new OldCalc()
console.log(oldCalc.operations(10, 5, 'add'))

// пользуемся только новым классом
const newCalc = new NewCalc()
console.log(newCalc.add(10,5))

// пользуемся адаптером (совместно старый и новый)
// интерфейс старый, а функционал новый
const adapter = new Calcadapter()
console.log(adapter.operations(25, 10, 'sub'))
