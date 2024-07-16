import {registerPage} from "../pages/registerPage"
const registerObj = new registerPage()
import registerData from "../fixtures/registerData.json"



describe('test automation',()=>{



    it('register flow',()=>{

        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.eMail)
        registerObj.enterTelePhone(registerData.telePhone)
        registerObj.enterPassword(registerData.passWord)
        registerObj.selectCheckbox()
        registerObj.clickContinue()


        
    }) 

})