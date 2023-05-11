

// // TIPOS PRIMITIVOS: BOOLEAN, NUMBER, STRING
// let ligado: boolean = false;
// let name: string = "edson";
// let idade: number = 41;
// let altura: number = 1.9;

// // null
// // undefined
// let nulo: null = null;
// let indefinido: undefined = undefined;

// // tipos abrangentes: any, void
// let retorno: void = void; // só aceita valores vazio
// let retornoView: any = false // aceita qualquer tipo de valor

// // objeto - sem previsibilidade
// let pessoa: object = {
//     name: "edson",
//     cidade: "Guarulhos",
//     idade: 41,
// };

// // objeto com tipagem
// type produtoLoja = {
//     name: string;
//     preco: number;
//     unidades: number;
// }

// let meuProduto: produtoLoja = {
//     name: "tenis",
//     preco: 90,
//     unidades: 5.

// };

// // arrays
// let dados: string[] = ["victor", "menezes",];
// let dados2: Array<string> = ["victor", "menezes",];

// let infos: (string | number)[] = ["victor", 58];

// // tuplas
// let boleto: [string, number, number] = ["luz", 89, 3252];

// // arrays metodos
// dados.pop();

// // datas
// let aniversario: Date = new Date("2023-05-10 09:34");
// console.log(aniversario.toString());



// // funções

// function addnumber(x:number, y:number): number{
//     return x + y;

// }

// let soma: number = addnumber(4, 7);
// console.log(soma);

// decorators
function ExibirNome(target: any) {
    console.log(target);
}

@ExibirNome
class funcionario { }