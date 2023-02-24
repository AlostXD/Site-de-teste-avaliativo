var conteudosite = document.getElementById("container")
var botaoBorda = document.getElementById("saibamais")
var clicked = true
var nmCliks = 0
conteudosite.style.transition = "0.6s";
var localiza = document.getElementById("textos")

botaoBorda.addEventListener("click", () => {
    if (clicked == true) {
        conteudosite.style.border = "5px solid red";
        var produto = document.createElement("li")
        lista.appendChild(produto)
        produto.innerHTML = `<img src="img/computer-svgrepo-com (1).png" alt="monitor" class="fotos-direita-baixo">
                        <p>Computadores Prontos Para jogar</p>`
        produto.className = "produtos"
        clicked = false;
        nmCliks++
    } else {
        conteudosite.style.border = "5px solid orange";
        clicked = true
        nmCliks++
    }
    localiza.innerText = nmCliks
    localiza.style.transform.rotate = "0.25deg"
});

var lista = document.getElementById("listadeprodutos")