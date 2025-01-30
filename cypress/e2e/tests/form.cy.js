import homePage from '../pages/homePage'
import formFieldsPage from '../pages/formFieldsPage'
/// <reference types="cypress" />

describe('form fields', () => {
    const path = '/form-fields/'
    const formName = 'sampleForm'
    const password = 'welcome'
    beforeEach(() => {
        cy.visit('https://practice-automation.com/')
        homePage.clickOnFormFieldsBtn()
        cy.url().should('include',path)
    })
  
    it('fill form', () => {
        formFieldsPage.fillNameInput(formName)
        formFieldsPage.fillPasswordInput(password)
        formFieldsPage.selectSecondDrink()
        formFieldsPage.selectFirstFavoriteColor()
        formFieldsPage.selectAutomationOption('Yes')
        formFieldsPage.fillEmailInput('test@mail.com')
        formFieldsPage.fillMessageInput('Lorem ipsum generator')
        formFieldsPage.submitForm()
        
    })
})