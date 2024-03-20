// interfaces (type x interfaces)

type robot = {
    readonly id: number | string;
     name: string;
 }
 
 interface robot2 {
    readonly id: number | string;
     name: string;
     sayHello(): string;
 }
 
 const bot1: robot = {
     id: 1,
     name: "megamen"
 }
 
 
 const bot2: robot2 = {
     id: 2,
     name: "megamen2",
     sayHello: function (): string {
         return 'Hello'
     }
 }
 
 console.log(bot1.name = "cutman");
 console.log(bot2);
 
 class Pessoa implements robot2{
     id: string | number;
     name: string;
 
     constructor(id: string | number, name: string){
         this.id = id
         this.name = name
     }
     sayHello(): string {
         return `hello i'm ${this.name}`;
     }
 
 }