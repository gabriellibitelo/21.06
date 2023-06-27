//console.log("pega pfv")

//função que recebe uma string com nome, e outra string com data (26/06/23)
//retornar string no formato:
//"olá me chamo $(nome), nasci no dia {dia} do mes $(mes) do ano de $(ano)"

//function apresentation(name: string, dateBirth: string): void{

//return `olá me chamo ${nome}, nasci no dia ${dia} do mes ${mes} do ano de ${ano}`




 //   const nameApresentation: string = name
 //   console.log(`"olá, me chamo" ${nameApresentation}`)

   // let slipDate  = dateBirth
    
//}


function apresentation(name: string, date: string): string {
  let splitDate = date.split('/');

  return `Olá me chamo ${name}, nasci no dia ${splitDate[0]} 
  do mês de ${splitDate[1]} do ano de ${splitDate[2]}`;

}

//não consegui fazer :)