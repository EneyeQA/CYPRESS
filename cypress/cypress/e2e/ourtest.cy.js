import {elements} from '../fixtures/task1'
describe ('POMTASK',()=>{
  beforeEach(()=>{
    cy.visit('https://osc-ultimate-demo.mageplaza.com/')
  })

  it ('Create Account', ()=>{
    cy.get(elements.createAccount).click()
    cy.get(elements.firstnameField).type(elements.firstname)
    cy.get(elements.lastnameField).type(elements.lastname)
    cy.get(elements.newslettercheckbox).click()
    cy.get(elements.dobField).type(elements.dob)
    cy.get(elements.allowremoteShopping).click()
    cy.get(elements.emailField).type(elements.email)
    cy.get(elements.passwordField).type(elements.password)
    cy.get(elements.confirmPasswordField).type(elements.confirmPassword)
    cy.get(elements.createAccountButton).click()
   
    
  })

  it ('Sign in' , ()=>{
    cy.get(elements.signin).click()
    cy.get(elements.signinemialField).type(elements.signinemail)
    cy.get(elements.signinpasswordField).type(elements.signinpassword)
    cy.get(elements.signinbutton).click()
    cy.get(elements.shopNowbutton).click()
    cy.get(elements.clickaddtocart).click()
    cy.get(elements.addtocart).click()
    cy.get(elements.city).type(elements.cityName)
    cy.get(elements.phonenumberField).type(elements.phonenumber)
    cy.get(elements.checkin).click()
    cy.get(elements.agreement).click()
    cy.get(elements.checkout).click()
  })
   
})
 