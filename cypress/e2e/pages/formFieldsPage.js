class formFieldsPage{


    elements = {

        nameInput : () => cy.get('[data-cy="name-input"]'),
        passwordInput : () => cy.get('[type="password"]'),
        waterCheckbox : () => cy.get('[data-cy="drink1"]'),
        milkCheckbox : () => cy.get('[data-cy="drink2"]'),
        redColorCheckbox : () => cy.get('[data-cy="color1"]'),
        blueColorCheckbox : () => cy.get('[data-cy="color2"]'),
        automationDropdown : () => cy.get('[data-cy="automation"]'),    
        yesAutomationOption : () => cy.get('[data-cy="automation-yes"]'),
        noAutomationOption : () => cy.get('[data-cy="automation-no"]'),
        emailInput : () => cy.get('[data-cy="email"]'),
        messageTextarea : () => cy.get('[data-cy="message"]'),
        submitBtn : ()=> cy.get('[data-cy="submit-btn"]')
        
    }

    fillNameInput(formName){
        this.elements.nameInput().type(formName)
    }

    fillPasswordInput(password){
        this.elements.passwordInput().type(password)   
    }

    selectFirstDrink(){
        this.elements.waterCheckbox().click()   
    }

    selectSecondDrink(){
        this.elements.milkCheckbox().click()
    }

    selectFirstFavoriteColor(){
        this.elements.redColorCheckbox().click()   
    }

    selectSecondFavoriteColor(){
        this.elements.blueColorCheckbox().click()
    }

    selectAutomationOption(option){
        this.elements.automationDropdown().select(option)
    }

    fillEmailInput(email){
        this.elements.emailInput().type(email)
    }

    fillMessageInput(message){
        this.elements.messageTextarea().type(message)
    }

    submitForm(){
        this.elements.submitBtn().click()
    }
}


module.exports = new formFieldsPage();