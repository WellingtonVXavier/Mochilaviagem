const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criarElemento(nome.value, quantidade.value)
    nome.value = "";
    quantidade.value = "";
})

function criarElemento(nome, quantidade) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)
    localStorage.setItem("nome", nome)
    localStorage.setItem("quantidade", quantidade)
}

let selecionaLista = [];
let indice = 2; // índice do elemento que você deseja remover

selecionaLista.splice(indice, 1); // Remove 1 elemento a partir do índice 2

console.log(lista); 