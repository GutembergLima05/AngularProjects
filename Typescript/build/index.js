"use strict";
// type heroi = {
//     name: string;
//     vulgo: string;
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// function printObjeto(pessoa: heroi){
//     console.log(pessoa)
// }
// printObjeto({
//     name: "Guto",
//     vulgo: "Spider man"
// });
// tipos primitivos: number, string, boolean
let ligado = false;
let nome = "meu Nome";
let idade = 130;
let altura = 130.2;
//tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno;
let retornoView = false;
//objeto - sem preview
let produto = {
    name: "felipe",
    cidade: "pe",
    idade: 20
};
let meuProduto = {
    nome: "Tenis",
    preco: 200.00,
    unidades: 1
};
//arrays
let dados = ["felipe", "ana"];
let dados2 = ["felipe", "ana"];
//arrays de multi tipos
let infos = ["felipe", 10];
//tuplas
let boleto = ["agua conta", 199.90, 12031200];
// dates
let dia = new Date('2022-10-01 05:00');
console.log(dia.toString());
// funções
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Helo ${name}`;
}
function CallToPhone(phone) {
    return phone;
}
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "felipe";
    });
}
const bot1 = {
    id: 1,
    name: "megamen"
};
const bot2 = {
    id: 2,
    name: "megamen2",
    sayHello: function () {
        return 'Hello';
    }
};
console.log(bot1.name = "cutman");
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello i'm ${this.name}`;
    }
}
//classes
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.skill = skill;
        this.stregth = stregth;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
//Subclass
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
// const p1 = new Character('guto', 1, 10);
// const p2 = new Magician('Mago', 9 , 30, 100);
// p1.attack();
// p2.attack();
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["felipe", "goku"], ["vegeta"]);
numArray.push("saitama");
console.log(numArray);
console.log(stgArray);
