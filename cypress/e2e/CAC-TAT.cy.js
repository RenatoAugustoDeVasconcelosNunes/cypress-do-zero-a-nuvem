
//describe define a suite de testes
describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
   cy.visit('./src/index.html')
})

//it define o caso de teste
  it('verifica o título da aplicação', () => {

      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })


  it('preenche os campos obrigatórios e envia o formulário', () => {
      
    cy.get('#firstName').should('be.visible').type('Renato')
    cy.get('#lastName').should('be.visible').type('Nunes')
    cy.get('#email').should('be.visible').type('tesste@teste.com')
    cy.get('#open-text-area').should('be.visible').type('Texto obrigatórioTexto obrigatórioTexto obrigatórioTexto obrigatórioTexto obrigatórioTexto obrigatórioTexto obrigatórioTexto obrigatórioTexto obrigatórioTexto obrigatórioTexto obrigatórioTexto obrigatório', {delay: 0})
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  });


  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
      
    cy.get('#firstName').should('be.visible').type('Renato')
    cy.get('#lastName').should('be.visible').type('Nunes')
    cy.get('#email').should('be.visible').type('tesste.teste.com')
    cy.get('#open-text-area').should('be.visible').type('Texto obrigatório')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  });



  it.only('valida aceitação apenas de número no campo Telefone', () => {
      cy.get('#phone').type('Zé').should('have.value', '')
  
  });





  
})
