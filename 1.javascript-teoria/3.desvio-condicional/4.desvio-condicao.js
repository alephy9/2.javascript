/*

var idade = 22

if (idade < 18) {
    console.log ('Menor de idade')
} else {
    console.log('Maior de idade')
}

*/

var idade = 20

console.log(`Você tem ${idade} anos.`)

if (idade < 18) {   
    console.log('Não vota')
} 

else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} 

else {
    console.log('Voto obrigatório')
}

// CONDIÇÃO ANINHADA

// não pode usar document.write pq não tá aplicando no navegador ultiliza console.log pq roda no terminal

