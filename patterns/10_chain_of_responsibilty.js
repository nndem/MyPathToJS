/*Поведенческие паттерны улучшают взаимодействие между объектами разного типа
Паттерн chain_of_responsibility позволяет последовательно вызвывать набор операции
у какого-то объекта, изменяя его.
Например, библ jQuery*/

class MySum{
    constructor(initialValue = 42){
        this.sum = initialValue
    }

    add(value){
        this.sum += value
        return this  // это выражение активирует паттерн
    }
}

const sum1 = new MySum();
console.log(sum1.add(8).add(10).add(9).sum);
