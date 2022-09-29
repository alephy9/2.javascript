var agora = new Date() // refere a data, hora, minutos e segundos atual do sistema do desktop do usuário
var hora = agora.getHours() // puxando a hora do New Date()

console.log (`Agora são exatamente ${hora} horas.`)

if (hora < 12) {
    console.log ('Bom Dia!')
} 

else if (hora <= 18) {
    console.log ('Boa Tarde!')
} 

else {
    console.log ('Boa Noite!')
}

// CONDIÇÃO ANINHADA