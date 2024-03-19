// type heroi = {
//     name: string;
//     vulgo: string;
// }

// function printObjeto(pessoa: heroi){
//     console.log(pessoa)
// }

// printObjeto({
//     name: "Guto",
//     vulgo: "Spider man"
// });

// tipos primitivos: number, string, boolean
let ligado: boolean = false;
let nome: string = "meu Nome";
let idade: number = 130;
let altura: number = 130.2;

//tipos especiais: null, undefined
let nulo : null = null;
let indefinido: undefined = undefined;


//tipos abrangentes: any, void
let retorno:void
let retornoView:any = false


//objeto - sem preview
let produto: object = {
    name:"felipe",
    cidade:"pe",
    idade:20
};

//objeto tipado
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto : ProdutoLoja = {
    nome: "Tenis",
    preco: 200.00,
    unidades: 1
}

//arrays

let dados: string[] = ["felipe", "ana"];
let dados2: Array<string> = ["felipe", "ana"]

//arrays de multi tipos

let infos: (string | number)[] = ["felipe", 10]


//tuplas

let boleto:[string,number,number] = ["agua conta", 199.90, 12031200]

// dates

let dia: Date = new Date('2022-10-01 05:00');

console.log(dia.toString());

// funções

function addNumber (x: number, y: number) : number {
    return x + y;
}

function addToHello(name: string){
    return `Helo ${name}`;
}

function CallToPhone(phone: number | string): number | string{
    return phone;
}

async function getDataBase(id: number): Promise<string> {
    return "felipe";
}

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

const p = new Pessoa(1, "gustms")
console.log(p.sayHello());