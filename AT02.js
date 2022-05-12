let velocidade = prompt('Insira sua velocidade')

if (velocidade > 80){
    let multa = (velocidade-80)*5
    alert(`Sua velocidade está acima de 80km. A sua multa é de R$${multa}`)
}else{
    alert('Muito bem! você está dentro do limite de velocidade.')
}
