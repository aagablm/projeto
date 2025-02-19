describe("Remover itens no carrinho", () => {
    it("Deve remover itens no carrinho e verificar", () => {
      cy.visit("http://localhost:3000");
  
      // Verifica se o título da página está correto
      cy.contains("Minha Loja");
  
      // Verifica se o botão 'Adicionar ao Carrinho' está presente
      cy.get("button").contains("Adicionar ao Carrinho").click();
  
      // Verifica se a quantidade de itens no carrinho está correta
      cy.get("#quantidade").should("have.text", "1");
    
      cy.get('#carrinho > button').click();
      
      cy.get("li").should("have.be", "visible");

      cy.get('li > button').click();

      cy.get("#quantidade").should("have.text", "0");
    });
  });
  
