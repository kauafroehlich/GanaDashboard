let elenco = []
document.getElementById("vagas").innerHTML = 26 - elenco.length

function assumirCargo() {
    let nomeComandante = document.getElementById("nomeComandante").value

    // extra - verifica se input está vazio
    if (nomeComandante === "") {
        alert("Digite o nome do comandante!")
        return
    }

    //coloca o texto do novo comandante
    document.getElementById("exibirNomeComandante").innerHTML = "Treinador Oficial: " + nomeComandante

    // extra - apaga input do comandante
    document.getElementById("nomeComandante").value = ""
}


function convocarJogador() {
    let jogadorConvocado = document.getElementById("jogadorConvocado").value

    // verificação de duplicação
    let jaExiste = false
    for (i = 0; i < elenco.length; i++) {
        if (elenco[i] == jogadorConvocado) {
            jaExiste = true
        }
    }

    // verificação de variável e exibição de erro ou push do jogador na lista
    if (jogadorConvocado === "") {
        alert("Erro: Digite um nome!")
        return
    } else if (elenco.length >= 26) {
        alert("Elenco lotado! A seleção já tem 26 jogadores.")
        return
    } else if (jaExiste == true) {
        alert("Jogador já convocado!")
        return
    } else {
        elenco.push(jogadorConvocado)
        atualizarTela()
    }

    // extra - apaga input do jogador
    document.getElementById("jogadorConvocado").value = ""
}

function atualizarTela() {
    let htmlAcumulado = ""

    for (i = 0; i < elenco.length; i++) {
        htmlAcumulado += "<li>" + (i + 1) + " - " + elenco[i] + " <button class='botaoX' onclick='removerJogador(" + i + ")'>X</button>" + "</li>"
    }
    document.getElementById("elencoHtml").innerHTML = htmlAcumulado
    document.getElementById("vagas").innerHTML = 26 - elenco.length
}

// splice que remove um item do array
function removerJogador(i) {
    elenco.splice(i, 1)
    atualizarTela()
}

function sortearCapitao() {
    if (elenco.length > 0) {
        // sorteia um número entre 0 e o tamanho do elenco, o math floor serve para arrendondar inteiro para baixo
        let indiceSorteado = Math.floor(Math.random() * elenco.length)
        // pega o nome do jogador na posição 
        let capitao = elenco[indiceSorteado]

        //mostra resultado
        document.getElementById("resultadoSorteio").innerHTML = "<div class='painelAmarelo'>O Capitão é: " + capitao + "</div>"

    } else {
        alert("Adicione jogadores à lista para o sorteio.")
    }
}

function calcularClassificacao() {
    let vitorias = Number(document.getElementById("vitorias").value)
    let empates = Number(document.getElementById("empates").value)
    let derrotas = Number(document.getElementById("derrotas").value)

    let pontosVitorias = vitorias * 3
    let pontosEmpates = empates * 1
    let pontosDerrotas = derrotas * 0
    let totalPontuacao = pontosVitorias + pontosEmpates + pontosDerrotas

    let classificacao
    if (totalPontuacao >= 6) {
        classificacao = "Classificado!"
        //altera a classe do elemento
        document.getElementById("resultadoClassificacao").className = "texto-verde";
    } else {
        classificacao = "Eliminado!"
        document.getElementById("resultadoClassificacao").className = "texto-vermelho";
    }
    document.getElementById("resultadoClassificacao").innerHTML = classificacao
}

function areaSecreta() {
    let senha
    do {
        senha = prompt("Digite a senha secreta para entrar:")
    } while (senha !== "hexa2026" && senha !== null)
    if (senha === "hexa2026") {
        alert("Acesso Liberado: Táticas desbloqueadas.")
    }
}

function relatorioDesempenho() {
    let pontuacaoJogo
    let pontuacaoTotal = 0
    for (let i = 1; i <= 3; i++) {
        pontuacaoJogo = Number(prompt("Quantos gols a seleção fez no jogo " + i + "?"))
        pontuacaoTotal += pontuacaoJogo
    }

    alert("Total de Gols: " + pontuacaoTotal + ". Média de gols por jogo: " + pontuacaoTotal / 3 + ".")
}