describe("Página Inicial", () => {
    it("Deve carregar a página inicial", () => {
      cy.visit("http://localhost:3000");
  
      // Verifica se o título da página está correto
      cy.contains("Minha Loja");
  
      // Verifica se o botão 'Adicionar ao Carrinho' está presente
      cy.get("button").contains("Adicionar ao Carrinho").click();
  
      // Verifica se a quantidade de itens no carrinho está correta
      cy.get("#quantidade").should("have.text", "1");
        
        // Verifica se o botão 'Adicionar ao Carrinho' está presente
      cy.get("button").contains("Adicionar ao Carrinho").click();
  
      // Verifica se a quantidade de itens no carrinho está correta
      cy.get("#quantidade").should("have.text", "2");
    });
  });
  
