///<reference types='Cypress'/>
import MobileFreeJobPost from '../POM/Pages/mobile_free_job_post'

describe('test free job posting mobile site',()=>{
    const mfjp= new MobileFreeJobPost()
    beforeEach('set the resolution',()=>{
      cy.viewport(375,812)
      
    })

    it('open homepage and redirect to free job post page ', ()=>{
      cy.visit('https://staging.workex.ai/')
        mfjp.getHamburger().click()
        mfjp.getHireStaff().click()
   
    })
    it('enter mobile no and click post  a job',()=>{
      mfjp.getMobileNoField().type("8147898903")
      mfjp.getPostJobNowButton().click()
    })
    it('select industry',()=>{
      mfjp.getIndustry().click()
      mfjp.selectIndustry().click()
    })
    it('select specialization', ()=>{
      mfjp.getSpecialization().click()
      mfjp.selectSpecialization().click()
  })
  it('select role', ()=>{
    mfjp.getRole().click()
    mfjp.selectRole().click()
})
it('select company',()=>{
  mfjp.getCompany().click()
  mfjp.selectCompany().click()
  cy.wait(2000)
})
it('enter Location and click next',()=>{
  mfjp.getLocation().click()
  cy.wait(2000)
  mfjp.clickNext().click()
   
})

it('no of openings',()=>{
  mfjp.getNoOfOpeneingsField().click()
  mfjp.selectNoOfHires().click()
})

it('Select qualification',()=>{
        
  mfjp.getMinQualField().click()
  mfjp.selectQual().click()
})
it('Enter min salary',()=>{
  
  mfjp.getMinSalField()    
})
it('Enter max salary',()=>{
  
  mfjp.getMaxSalField()    
})

it('get job basic info',()=>{
  mfjp.getBasicInfo().click()
})
it('write job description ',()=>{
   mfjp.getJDRequired().type("candidate with specified skills and experience is required")
  
})
it('click next second page',()=>{
   mfjp.clickNext().click()
})
it('enter recruiter name',()=>{
   mfjp.getRecName().type("abcd")
})
it('enter recruiter email',()=>{
   mfjp.getRecEmail().type("kavya.b@workex.xyz")
})

it('Click on get OTP',()=>{
   mfjp.getOTP().click()
})

   
})