// Конструктор - паттерн, используемый для создания объекта определенного типа.

// ES-5
function Server(name, ip){
    this.name = name;
    this.ip = ip
}
Server.prototype.getUrl = function(){
    return `https://${this.ip}:80`
};


//ES-6
class Server{
    constructor(name, ip){
        this.name = name;
        this.ip = ip
    }
    getUrl = function(){
        return `https://${this.ip}:80`
    }
}



const aws = new Server('Aws', '82.21.34.32.12')
console.log(aws.getUrl());