Cypress.Commands.add ('contactUs', ()=>{

    cy.get('#contact-us > .thumbnail > .section-title')
    cy.get('#contact-us').invoke('removeAttr', 'target').should('be.visible').click()
    cy.get('[name="first_name"]').type('Abdulwahab')
    cy.get('[name="last_name"]').type('Eneye')
    cy.get('[name="email"]').type('eneye38@gmail.com')
    cy.get('textarea.feedback-input').type('I am excited about exploring this web')
    cy.wait(2000)
    cy.get('[type="submit"]').click()
    cy.wait(2000)
})

Cypress.Commands.add ('Login', ()=>{

    cy.get('#login-portal > .thumbnail > .section-title')
    cy.get('#login-portal').invoke('removeAttr', 'target').should('be.visible').click()
    cy.get('#text').type('Suleiman')
    cy.get('#password').type('Yujasule')
    cy.get('#login-button').click()
    
})

Cypress.Commands.add ('DropDown', ()=>{

    cy.get('#dropdown-checkboxes-radiobuttons > .thumbnail > .section-title')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').should('be.visible').click()

    cy.get('#dropdowm-menu-1').select('Python')
    cy.wait(1000)
    cy.get('#dropdowm-menu-1').select('SQL')
    cy.wait(1000)
    cy.get('#dropdowm-menu-1').select('C#')
    cy.get('#dropdowm-menu-2').select('eclipse')
    cy.wait(1000)
    cy.get('#dropdowm-menu-2').select('Maven')
    cy.wait(1000)
    cy.get('#dropdowm-menu-2').select('TestNG')
    cy.wait(1000)
    cy.get('#dropdowm-menu-2').select('JUnit')
    cy.get('#dropdowm-menu-3').select('HTML')
    cy.wait(1000)
    cy.get('#dropdowm-menu-3').select('CSS')
    cy.wait(1000)
    cy.get('#dropdowm-menu-3').select('JavaScript')
    cy.wait(1000)
    cy.get('#dropdowm-menu-3').select('JQuery')
    cy.get('#checkboxes > :nth-child(1) > input').click()
    cy.wait(1000)
    cy.get(':nth-child(3) > input').click()
    cy.wait(1000)
    cy.get(':nth-child(7) > input').click()
    cy.get('[value="green"]').click()
    cy.wait(1000)
    cy.get('[value="blue"]').click()
    cy.wait(1000)
    cy.get('#radio-buttons > [value="orange"]').click()
    cy.wait(1000)
    cy.get('[value="purple"]').click()
    cy.get('[value="lettuce"]').click()
    cy.wait(1000)
    cy.get('#fruit-selects').select('Grape')
    cy.wait(1000)
    cy.get('#fruit-selects').select('Apple')
    cy.wait(1000)
    cy.get('#fruit-selects').select('Pear')
})

Cypress.Commands.add ('fileUpload', ()=>{

    cy.get('#file-upload > .thumbnail > .section-title')
    cy.get('#file-upload').invoke('removeAttr', 'target').should('be.visible').click()
    cy.get('#myFile').click()
    cy.get('#submit-button').click()
}) 



