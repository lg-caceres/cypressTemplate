class homePage{


    elements ={

        formFieldsBtn : () => cy.contains('Form Fields')

    }

    clickOnFormFieldsBtn(){
        this.elements.formFieldsBtn().click()
    }


}


module.exports = new homePage();