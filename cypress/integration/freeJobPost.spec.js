///<reference types='Cypress'/>
import FreeJobPost from '../POM/Pages/free_job_post'

describe('test free job posting site',()=>{
    const fjp= new FreeJobPost()
    it('open homepage and redirect to free job post page ', ()=>{
        //cy.viewport(375,812)
        cy.visit('https://staging.workex.ai/')
        cy.get('#header_hirestaff').click()
        fjp.getMobileNoField().type('8147898903')
        fjp.getPostJobNowButton().click()
        
    })
    it('select industry', ()=>{
        fjp.getIndustry().click()
        fjp.selectIndustry().click()
    })
    it('select specialization', ()=>{
        fjp.getSpecialization().click()
        fjp.selectSpecialization().click()
    })
    it('select role', ()=>{
        fjp.getRole().click()
        fjp.selectRole().click()
    })
    it('select company',()=>{
        fjp.getCompany().click()
        fjp.selectCompany().click()
        cy.wait(2000)
    })
    it('enter Location and click next',()=>{
        fjp.getLocation()
        cy.wait(2000)
        fjp.clickNext().click()
        cy.wait(2000)
    })
    it('Select the no of openings',()=>{
        
        fjp.getNoOfOpeneingsField().click()
        cy.wait(2000)
        fjp.selectNoOfHires().click()
    })

    it('Select qualification',()=>{
        
        fjp.getMinQualField().click()
        fjp.selectQual().click()
    })
    it('Enter min salary',()=>{
        
        fjp.getMinSalField()    
    })
    it('Enter max salary',()=>{
        
        fjp.getMaxSalField()    
    })
    it('get job basic info',()=>{
       fjp.getBasicInfo().click()
    })
    it('write job description ',()=>{
        fjp.getJDRequired().type("candidate with specified skills and experience is required")
       
    })
    it('click next second page',()=>{
        fjp.clickNext().click()
    })
    it('enter recruiter name',()=>{
        fjp.getRecName().type("abcd")
    })
    it('enter recruiter email',()=>{
        fjp.getRecEmail().type("kavya.b@workex.xyz")
    })
   
    it('Click on get OTP',()=>{
        fjp.getOTP().click()
    })

})