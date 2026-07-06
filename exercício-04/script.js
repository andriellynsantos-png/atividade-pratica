function mostrarNome() {
    let nome = document.getElementById("nome").value;

    document.getElementById("mensagem").innerHTML = 
        "Bem-vindo, " + nome + "!";
}
