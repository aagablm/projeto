# 🚀 CI/CD Pipeline com Cypress 

Este repositório contém um exemplo de pipeline CI/CD utilizando **GitHub Actions** para automatizar o processo de integração contínua e testes end-to-end com **Cypress**.

## 🔧 Como Funciona 

1. **Instalação das Dependências**: O workflow começa com a instalação das dependências do projeto usando `npm install`.
2. **Execução do Servidor**: Em seguida, o servidor é iniciado em segundo plano para que os testes possam ser executados contra ele.
3. **Execução dos Testes Cypress**: Após o servidor estar rodando, o Cypress executa os testes definidos na configuração.

## 👩‍💻 Como Usar

1. **Clone o repositório**:
   
   ```bash
   git clone https://github.com/aagablm/projeto.git

3. **Instale as dependências**:
   
   ```bash
   npm install

5. **Inicie o servidor localmente**:
   
   ```bash
   node server.js

7. **Execute os testes**:
   
   ```bash
   npx cypress open

## GitHub Actions
O pipeline é automaticamente executado quando há um push ou pull request na branch main.
Durante o processo, as dependências são instaladas, o servidor é iniciado, e os testes Cypress são executados para garantir que tudo esteja funcionando corretamente.


