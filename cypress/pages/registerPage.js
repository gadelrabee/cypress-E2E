export class registerPage{
    weblocators={
        firstName:'#input-firstname',
        lastName:'#input-lastname',
        eMail:'#input-email',
        telePhone:'#input-telephone',
        passWord:'#input-password',
        passwordConfirm:'#input-confirm',
        policyCheckbox:'input[type="checkbox"]',
        continue:'.btn.btn-primary'
    }
     
    openURL() {
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    }
    enterFirstName(FName) {
        cy.get(this.weblocators.firstName).type(FName)
    }
    enterLastName(LName) {
        cy.get(this.weblocators.lastName).type(LName)
    }
    enterEmail(EMail) {
        cy.get(this.weblocators.eMail).type(EMail)
    }
    enterTelePhone(Telephone) {
        cy.get(this.weblocators.telePhone).type(Telephone)
    }
    enterPassword(password) {
        cy.get(this.weblocators.passWord).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)
    }
    selectCheckbox() {
        cy.get(this.weblocators.policyCheckbox).check()
    }
    clickContinue() {
        cy.get(this.weblocators.continue).click()
    }

}