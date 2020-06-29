//Паттерн prototype: в основе собъекта лежит другой объектов


const car = {
    wheels: 4,

    init(){
        console.log(`у меня ${this.wheels} колеса, мой владелец ${this.owner}`)
    }
};


const carWithOwner = Object.create(car, {   // Создаём объект на основе car                                         */
    owner: {                                // со свойством owner
        value:'Хэмилтон'}                   // которое имее значение value
});

carWithOwner.init();

console.log(carWithOwner.__proto__ === car); //прототипом действительно является объект car