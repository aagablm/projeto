describe("Página Inicial", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");})
    it("Deve carregar a página inicial", () => {
  
      cy.contains("Minha Loja");
  
      cy.get("button").contains("Adicionar ao Carrinho")
})
  });
  
