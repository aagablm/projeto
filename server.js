const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Servindo arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, "public")));

const produtos = [
    { id: 1, nome: "Camisa", preco: 49.99, imagem: "camisa.jpg" },
    { id: 2, nome: "Calça Jeans", preco: 89.99, imagem: "calca.jpg" },
    { id: 3, nome: "Tênis", preco: 129.99, imagem: "tenis.jpg" }
];

// Rota para listar produtos
app.get("/produtos", (req, res) => {
    res.json(produtos);
});

// Rota para servir a página inicial corretamente
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
