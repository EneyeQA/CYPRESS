// describe('LOGIN',()=>{

//     it ('standard user', ()=>{
//         cy.visit('https://www.saucedemo.com/')
//         cy.get('[data-test="username"]').type('standard_user')
//         cy.get('[data-test="password"]').type('secret_sauce')
//         cy.get('[data-test="login-button"]').click()
//         cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
//         cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
//         cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
        

//     })
// })

// describe('LOGIN',()=>{

//     it ('standard user', ()=>{
//         cy.visit('https://www.saucedemo.com/')
//         cy.get('#user-name').type('standard_user')
//         cy.get('#password').type('secret_sauce')
//       cy.get('.submit-button').click()
        

//     })
// })

// describe('LOGIN',()=>{

//     it ('standard user', ()=>{
//         cy.visit('https://www.saucedemo.com/')
//         cy.get('#user-name').should ('be.visible').and('be.empty').type('standard_user')
//         cy.get('#password').type('secret_sauce')
//         cy.contains('Name')
//       cy.get('.submit-button').click()
//       cy.get('[data-test="title"]').should('exist')
//       cy.contains('Add to cart')
//       cy.get('.inventory_item').should('exist').and('have.length.greaterThan', 5)
     
//     })
// })


describe ('POM', ()=>{

    it ('createAccount', ()=>{

        cy.visit('https://osc-ultimate-demo.mageplaza.com/')
    })
})