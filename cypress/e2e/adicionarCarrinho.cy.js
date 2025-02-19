describe("Adicionar itens no carrinho", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");})
    it("Deve adicionar itens no carrinho e verificar", () => {
  
      cy.contains("Minha Loja");
  
      cy.get("button").contains("Adicionar ao Carrinho").click(); 

      cy.get("#quantidade").should("have.text", "1");        
 
      cy.get("button").contains("Adicionar ao Carrinho").click();
      cy.get("#quantidade").should("have.text", "2");
    });
  });
  
