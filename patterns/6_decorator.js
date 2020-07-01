// Паттерн декоратор добавляет новое поведение и функционал для существующего класса

class Server {
    constructor(ip, port){
        this.ip = ip;
        this.port = port
    }

    get url(){
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server){ // принимает экземпляр класса
    server.isAWS = true;
    server.awsInfo = function(){  // обычная функция => есть контекст
        return server.url  // url - это геттер, а не метод (поэтому без скобок)
    };
    return server   // возвращает экземпляр класса
}

//const s1 = new Server('12.34.56.78', 8080) - обычный сервер
// Обычный сервер, обернутый декоратором aws
const s1 = aws(new Server('12.34.56.78', 8080));
console.log(s1.isAWS);
console.log(s1.awsInfo());