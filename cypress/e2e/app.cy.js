/// <reference types="cypress" />

describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.viewport(1366, 768);
    cy.visit("http://localhost:3000/");

    cy.get("#toogle-theme").click();
    cy.get("#toogle-theme").click();

    cy.contains("My details").click();
    cy.contains("Profile").click();
    cy.contains("Password").click();
    cy.contains("Team").click();
    cy.contains("Plan").click();
    cy.contains("Billing").click();
    cy.contains("Email").click();
    cy.contains("Notifications").click();
    cy.contains("Integrations").click();
    cy.contains("API").click();

    cy.get("input[name='firstName']").type("John");
    cy.get("input[name='lastName']").type("Doe");
    cy.get("input[name='email']").type("john@doe.com");
    cy.get("input[name='role']").type("Software Engineer");


    cy.get("#country").click();
    cy.get("#country-list").contains("Brazil").click();

    cy.get("#timezone").click();
    cy.get("#timezone-list").contains("Pacific Standard Time (PST)").click();

    cy.get("#bio").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec auctor, nisl eget aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl."
    );
    cy.screenshot();
  });

  it("should navigate to the about page", () => {
    // Start from the index page
    cy.viewport(375, 667);
    cy.visit("http://localhost:3000/");

    cy.get("input[name='firstName']").type("John");
    cy.get("input[name='lastName']").type("Doe");
    cy.get("input[name='email']").type("john@doe.com");
    cy.get("input[name='role']").type("Software Engineer");

    cy.get("#country").click();
    cy.get("#country-list").contains("Brazil").click();

    cy.get("#timezone").click();
    cy.get("#timezone-list").contains("Pacific Standard Time (PST)").click();

    cy.get("#bio").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec auctor, nisl eget aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl."
    );
  });
});
