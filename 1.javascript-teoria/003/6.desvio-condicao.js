var agora = new Date()  // refere a data atual do sistema do desktop do usuário
var diaSem = agora.getDay () // puxando o dia do New Date()

/*
    Ordem padrão no sistema dos dias da semana

            0 Domingo
            1 segunda
            2 terça
            3 quarta
            4 quinta
            5 sexta
            6 sabado

*/

console.log(`Hoje é ${diaSem}`)

switch(diaSem) {

    case 0:
        console.log('Domingo')
        break

    case 1:
        console.log('Segunda')
        break

    case 2:
        console.log('Terça')
        break

    case 3:
        console.log('Quarta')
        break

    case 4:
        console.log('Quinta')
        break

    case 5:
        console.log('Sexta')
        break

    case 6:
        console.log('Sábado')      
        break

    default: 
        console.log('[ERRO] Dia inválido')
        break

}

// CONDIÇÃO MULTIPLA

// o break é obrigatório ser usado, se o case for verdadeiro o brek vai levar ele pro resultado final

// Nomear cases só funciona com numeros inteiros '1,2,3' e strings 'NomesDeStrings'