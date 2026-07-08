function pegarValores() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    return [n1, n2];
}

function somar() {
    let valores = pegarValores();
    document.getElementById("resultado").innerText =
        "Resultado: " + (valores[0] + valores[1]);
}

function subtrair() {
    let valores = pegarValores();
    document.getElementById("resultado").innerText =
        "Resultado: " + (valores[0] - valores[1]);
}

function multiplicar() {
    let valores = pegarValores();
    document.getElementById("resultado").innerText =
        "Resultado: " + (valores[0] * valores[1]);
}

function dividir() {
    let valores = pegarValores();
    if (valores[1] === 0) {
        document.getElementById("resultado").innerText =
            "Resultado: Não é possível dividir por zero.";
    } else {
        document.getElementById("resultado").innerText =
            "Resultado: " + (valores[0] / valores[1]);
    }
}
