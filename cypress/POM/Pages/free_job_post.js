
class FreeJobPost{
     getMobileNoField() {
        return cy.get("#joblanding_entermobileno")
                 }

     getPostJobNowButton() {
  return   cy.get("#joblanding_Postajob")
         }
      getIndustry(){
        return  cy.get("#basicdetails_category")
      }
      selectIndustry(){
        return cy.get('#cdk-overlay-0 > wx-mobile-multi-select-dropdown > div > div.list_container > ul > li:nth-child(1) > div').contains(' Sales & Business Development ')
      }
      getSpecialization(){
         return cy.get("wxdropdown[formcontrolname='specialization']")
      }
      selectSpecialization(){
         return cy.get("div.list_container >ul >li").contains(" Retail - Field Sales ")
      }
      getRole(){
         return cy.get("wx-select[formcontrolname='role']")
      }
      selectRole(){
         return cy.get("div.list_container >ul >li").contains(" Business Advisor ")
      }
      getCompany(){
         return cy.get("wx-select[formcontrolname='company_name']")
      }
      selectCompany(){
         return cy.get("wx-multi-select-dropdown ul >li >div").contains(" Ifci ")
        //return  cy.get('.list-item--selected > div').contains("Ifci")
      }
      getLocation(){
          cy.get("#basicdetails_Location").as('loc')
       return  cy.get('@loc').type('Jaipur, R{enter}').click()
      }
      clickNext(){
         return cy.get(".next-btn.btn")
      }
      getJobRequirementsField(){
         return cy.get(".form-2__heading.secondary-heading").contains('Job Requirements')
      }
      getNoOfOpeneingsField(){
         return cy.get("#jobreq_no_of_openings > wxdropdown > div > button")
      }
      selectNoOfHires(){
         return cy.get("wx-multi-select-dropdown > div > ul > li:nth-child(1) > div").contains(' Hiring 1-2 ')
      }
      getMinQualField(){
         return cy.get("#jobreq_min_qualification > wxdropdown > div > button")
      }
      selectQual(){
         return cy.get("wx-multi-select-dropdown > div > ul > li:nth-child(1) > div").contains('Phd')
      }
      getMinSalField(){
         return cy.get("#jobreq_min_salary").type("10000")
      }
      getMaxSalField(){
         return cy.get("input[formcontrolname='salary_max']").type("20000")
      }
      getBasicInfo(){
         return cy.get("#Capa_1")
      }
      getJDRequired(){
         return cy.get("#jobreq_job_reqiurments")
      }
      getJDOptionalField(){
         return cy.get("#jobreq_add_details")
      }
      getRecName(){
         return cy.get("#name")
      }
      getRecEmail(){
         return cy.get("#email")
      }
      getRecPhone(){
         return cy.get("#number")
      }
      getOTP(){
         return cy.get("#your_details_get_otp")
      }

      
}
export default FreeJobPost