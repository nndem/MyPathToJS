// Паттерн mediator позволяет выстраивать тесную и
// плотную коммуникацию между разными объектами
// Здесь имеется централизованная абстракция, через которую
// осуществляется взаимодействие

class User{
    constructor(name){
        this.name = name
        this.room = null
    }

    send(message, to){
        this.room.send(message, this, to)
    }

    receive(message, from){
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom{
    constructor(){
        this.users = {}
    }

    register(user){
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to){
        if (to){
            to.receive(message, from)
        }else {
            Object.keys(this.users).forEach(key=>{
                if (this.users[key] !==from){
                    this.users[key].receive(message, from)
                }
            })
        }
    }

}

const lelya = new User('Lelya')
const leha = new User('Leha')
const vova = new User('Vova')

const room = new ChatRoom()

room.register(lelya)
room.register(leha)
room.register(vova)

lelya.send('hello', vova)
vova.send('hello-hello', lelya)
leha.send('vsem privet')