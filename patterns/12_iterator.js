// Идея в создании класса, у которого можно последовательно получать доступ к его информации

class MyIterator{
    constructor(data){
        this.index = 0;
        this.data = data;
    }

    [Symbol.iterator](){
        return {
            next: () => {
                if (this.index < this.data.length){
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                }else{
                    this.index = 0;
                    return{
                        done: true,
                        value: undefined
                    }
                }
            }
        }
    }

}
// То же самое можно и через генератор
function* generator(collection) {
    let index = 0;

    while(index<collection.length){
        yield collection[index ++]
    }
}


//  Для итератора
// const iterator = new MyIterator(['This', 'is', 'iterator'])
// for (const val of iterator){
//     console.log('Value:', val)
// }

// Для генератора
const gen = generator(['This', 'is', 'iterator'])
// for (const val of gen){
//     console.log('Value:', val)
// }

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)