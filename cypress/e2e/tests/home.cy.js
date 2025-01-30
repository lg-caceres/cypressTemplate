import homePage from '../pages/homePage'
/// <reference types="cypress" />

describe('home page', () => {
    beforeEach(() => {
      cy.visit('https://practice-automation.com/')
    })
  
    it.only('open forms fields modal', () => {
        const path = '/form-fields/'
        homePage.clickOnFormFieldsBtn()
        cy.url().should('include',path)
    })
})
    