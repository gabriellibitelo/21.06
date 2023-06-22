//A função abaixo pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função retorna  um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

//- Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
//- Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
//- Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos

//Dito isso, refatore a função para o Typescript.

function CzechRenewalId(): boolean {
    const currentYear = Number(prompt("Digite o ano atual"));
    const BirthYear = Number(prompt("Digite o ano de nascimento"));
    const issueyear = Number(prompt("Digite o ano de emissão do documento"));
 
    const age = currentYear -  BirthYear;
    const walletTime = currentYear - issueyear;
 
    const cond1 = age <= 20 && walletTime  >= 5;
    const cond2 = age > 20 && age <= 50 && walletTime  >= 10;
    const cond3 = age > 50 && walletTime  >= 15;
 
    return (cond1 || cond2 || cond3)
 }