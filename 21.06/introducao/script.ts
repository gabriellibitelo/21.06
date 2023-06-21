//DECLARACAO DE VARIAVEIS
const conpany: string = "senac"

//NUMBER
let age: number = 28;

//BOLEAN
let isCorrect:boolean = true;

//DECLARAÇAO DE ARRAY
const arr: Array<number> = [1, 2, 3];

const Array: number[] = [1, 2, 3];

//DECLARACAO DE OBJETO
const person: {
    name: string
    age: number
} = {
    name: "senac"
    age: 30
}

//DECLARACAO TIPO ANY
let result: any;
result = "result";
result = 1903;
result = true;

//DECLARACAO DE FUNCAO TIPADA
function sum(n1: number, n2: number): number{
    return n1 + n2
}

function resultSum(n1: number, n2: number); String{
    let result = n1 + n2;
    return `Resultado é $(result)`;
}

//DECLARACAO DE FUNCAO VOID
function sayhello(name?: string): void{
    console.log("Hello, ", name || "world");
}
