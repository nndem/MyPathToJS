// Фабрика - это объединяющая абстракция для похожих классов

class SimplyMembership{
    constructor(name){
        this.name=name;
        this.cost=50;
    }
}

class StandardMembership{
    constructor(name){
        this.name=name;
        this.cost=150;
    }
}

class PremiumMembership{
    constructor(name){
        this.name=name;
        this.cost=500;
    }
}

// фабрика и ее главный метод create
class MemberFactory{
    static list = {             // поле класса
        simple: SimplyMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    };

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new Membership(name);

        // Расширим функционал
        member.type = type;
        member.define = function(){
            console.log(`${this.name}(${this.type}): ${this.cost}`)
        };

        return member
    }
}

const factory = new MemberFactory();

const members = [
    factory.create('Alexey', 'simple'),
    factory.create('Mariya', 'standard'),
    factory.create('Nikolay', 'premium'),
    factory.create('Petr')
];

//console.log(members)

members.forEach(m => {
    m.define()
});