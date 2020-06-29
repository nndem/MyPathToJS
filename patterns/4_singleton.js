/* Паттерн singleton используется если нам нужно гарантировать, что у класса будет только один экземпляр
 Здесь: база данных mongodb (с ORM mongoose)*/

class Database {
    constructor(data){
        if (Database.exists){     // делаем singleton в конструкторе
            return Database.instance
        }
        Database.instance = this;
        Database.exists = true;
        this.data = data
    }

    getData(){
        return this.data
    }
}

const mongo = new Database('MongoDB');
console.log(mongo.getData());  // выведет MongoDB

const mysql = new Database("MySQL");
console.log(mysql.getData());  // выведет MongoDB