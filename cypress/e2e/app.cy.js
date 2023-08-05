/// <reference types="cypress" />

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.viewport(1366, 768)
    cy.visit('http://localhost:3000/')

    cy.get('#firstName').type('John')
    cy.get('#lastName').type('Doe')

    cy.get('#email').type('john@doe.com')

    cy.get('#country').click()
    cy.get('#country-list').contains('Brazil').click()

    cy.get('#timezone').click()
    cy.get('#timezone-list').contains('Pacific Standard Time (PST)').click()

    cy.get('#bio').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec auctor, nisl eget aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl.')
  })

  it('should navigate to the about page', () => {
    // Start from the index page
    cy.viewport(375, 667)
    cy.visit('http://localhost:3000/')

    cy.get('#firstName').type('John')
    cy.get('#lastName').type('Doe')

    cy.get('#email').type('john@doe.com')

    cy.get('#country').click()
    cy.get('#country-list').contains('Brazil').click()

    cy.get('#timezone').click()
    cy.get('#timezone-list').contains('Pacific Standard Time (PST)').click()

    cy.get('#bio').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec auctor, nisl eget aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl.')
  })
})