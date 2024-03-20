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
