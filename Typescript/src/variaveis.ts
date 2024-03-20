 type heroi = {
        name: string;
        vulgo: string;
    }
    
    function printObjeto(pessoa: heroi){
        console.log(pessoa)
    }
    
    printObjeto({
        name: "Guto",
        vulgo: "Spider man"
    });
    
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
    