/// <reference types="cypress" />

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.viewport(1366, 768)
    cy.visit('http://localhost:3000/')
    
    cy.get('#country').click()
    cy.get('#country-list').contains('Brazil').click()

    cy.get('#timezone').click()
    cy.get('#timezone-list').contains('Pacific Standard Time (PST)').click()
  })
})