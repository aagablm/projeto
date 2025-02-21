describe("Finalizar compra", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");})
    it("Finalizar compra", () => {
  
      cy.contains("Minha Loja");
  
      cy.get("button").contains("Adicionar ao Carrinho").click();
  
      cy.get('#carrinho > button').click();

      cy.get('[onclick="finalizarCompra()"]').click()

      cy.on('window:alert', (text) => {
        expect(text).to.equal('Compra finalizada com sucesso! 🛒🎉');
      });
      
    });
  });
  
