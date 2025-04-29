describe ('COM', ()=>{
   
 beforeEach (()=>{
    cy.visit('https://webdriveruniversity.com/index.html') 
 })

    it ('contactUs', ()=>{
        cy.contactUs()
    })

    it ('Login', ()=>{
        cy.Login()
    })

    it ('DropDown', ()=>{
        cy.DropDown()
    })

    it ('fileUpload',()=>{
        cy.fileUpload()
    })
})
