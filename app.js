//let nome = window.prompt("Qual é o seu nome? ");
//window.alert(`Bem vindo(a)  ${nome}! Pronto(a) pra tirar sua Habilitação? `);

function carregar(){
    let msg = window.document.getElementById('msg')
    let data = new Date()
    let hora = data.getHours()
    
    
    if(hora >= 0 && hora < 12){
        msg.innerHTML = ("Bom Dia! " )
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML = ("Boa Tarde! " )
    }else{
       msg.innerHTML = ("Boa Noite! " )
    }
}