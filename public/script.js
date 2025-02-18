let carrinho = [];

fetch("http://localhost:3000/produtos")
    .then(response => response.json())
    .then(produtos => {
        const container = document.getElementById("produtos-container");

        produtos.forEach(produto => {
            const div = document.createElement("div");
            div.classList.add("produto");
            div.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
            `;
            container.appendChild(div);
        });
    })
    .catch(error => console.error("Erro ao buscar produtos:", error));

function adicionarAoCarrinho(id) {
    fetch("http://localhost:3000/produtos")
        .then(response => response.json())
        .then(produtos => {
            const produto = produtos.find(p => p.id === id);
            carrinho.push(produto);
            atualizarCarrinho();
        });
}

function atualizarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const totalElement = document.getElementById("total");
    const quantidadeElement = document.getElementById("quantidade");

    lista.innerHTML = "";
    let total = 0;

    carrinho.forEach((produto, index) => {
        total += produto.preco;

        const li = document.createElement("li");
        li.innerHTML = `${produto.nome} - R$ ${produto.preco.toFixed(2)}
                        <button onclick="removerDoCarrinho(${index})">🗑️</button>`;
        lista.appendChild(li);
    });

    totalElement.innerText = total.toFixed(2);
    quantidadeElement.innerText = carrinho.length;
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function abrirCarrinho() {
    document.getElementById("modal-carrinho").style.display = "block";
}

function fecharCarrinho() {
    document.getElementById("modal-carrinho").style.display = "none";
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    alert("Compra finalizada com sucesso! 🛒🎉");
    carrinho = [];
    atualizarCarrinho();
    fecharCarrinho();
}
