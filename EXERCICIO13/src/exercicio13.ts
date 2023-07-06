//- Exercício 8
    
// Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa
// (ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). 
// A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não.
//  A carteira precisa ser renovada segundo os seguintes critérios:
    
// - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos


function validateRenovation( dateBirth: string, dateIssue: string): any {
    //pega o ano da data formatada
   
 let birth = new Date(dateBirth);
 return console.log(birth)

    let  year = birth.getFullYear();
    return year;

    let today   = new Date();
    return today;

    let month = birth.getMonth();
    return month;

    let correntYear = today.getFullYear;
    return correntYear;

      let date = new Date();
      console.log(date.toLocaleDateString('pt-BR'))
    
}
console.log(validateRenovation(`29/03/2007`, `03/07/2023`))

