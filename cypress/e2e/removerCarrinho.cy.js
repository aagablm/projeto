describe("Remover itens no carrinho", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");})
    it("Deve remover itens no carrinho e verificar", () => {
  
      cy.contains("Minha Loja");
  
      cy.get("button").contains("Adicionar ao Carrinho").click();
  
      cy.get("#quantidade").should("have.text", "1");
    
      cy.get('#carrinho > button').click();
      
      cy.get("li").should("have.be", "visible");

      cy.get('li > button').click();

      cy.get("#quantidade").should("have.text", "0");
    });
  });
  
