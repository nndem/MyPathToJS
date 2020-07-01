// Command
class MyMath{
    constructor(initialValue=0){
        this.num =initialValue
    }

    square(){
        return this.num ** 2
    }

    cube(){
        return this.num ** 3
    }
}

// Теперь применим паттерн Command
class Command{
    constructor(subject){
        this.subject = subject
        this.commandsExecited = []
    }
    execute(command){
        this.commandsExecited.push(command)
        return this.subject[command]()
    }
}
// создаем экз X у класса Command, который выполнен над объектом класса MyMath
const x = new Command(new MyMath(2))

console.log(x.execute('square'))  // при использовании паттерна получаем объект x
console.log(x.execute('cube'))    //  у которого можно динамично вызывать методы

console.log(x.commandsExecited) // Теперь у нас есть и мета-информация

