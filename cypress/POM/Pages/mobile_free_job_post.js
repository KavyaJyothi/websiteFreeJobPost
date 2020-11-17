class MobileFreeJobPost{
    getHamburger(){
        return cy.get("#mobile-nav-bar .menu-icon")
    }
    getHireStaff(){
        return cy.get("#header_hirestaff")
    }
    getMobileNoField() {
       return cy.get(".fold_landing_1_mobile_front_2_contact.body-h >input[formcontrolname='contact']")
                }

    getPostJobNowButton() {
 return   cy.get("div.fold_landing_1_mobile_front_2 > button")
        }
     getIndustry(){
       return  cy.get("wxdropdown[formcontrolname='category']")
     }
     selectIndustry(){
       return cy.get('div.list_container >ul >li').contains('Sales & Business Development')
     }
     getSpecialization(){
        return cy.get("#basicdetails_specialization > wxdropdown > div > button")
     }
     selectSpecialization(){
        return cy.get(" #cdk-overlay-1 > wx-mobile-multi-select-dropdown > div > div.list_container > ul > li:nth-child(1) > div").contains("Retail - Field Sales ")
       
      }
     getRole(){
        return cy.get("#basicdetails_role >wx-select div >input")
     }
     selectRole(){
        return cy.get("#cdk-overlay-2 > wx-mobile-multi-select-dropdown > div > div.list_container > ul > li:nth-child(1) > div").contains(" Area Sales Officer ")
     }
     getCompany(){
        return cy.get("wx-select[formcontrolname='company_name']")
     }
     selectCompany(){
        return cy.get("wx-mobile-multi-select-dropdown > div > div.list_container > ul > li:nth-child(1) > div").contains(" Ifci ")
       //return  cy.get('.list-item--selected > div').contains("Ifci")
     }
     getLocation(){
         cy.get("#basicdetails_Location").as('loc')
         cy.get('@loc').type('Jaipur, R')
         cy.wait(2000)
       return cy.get("wx-mobile-multi-select-dropdown > div > div.list_container > ul > li:nth-child(1) > div").should('contain', ' Jaipur, Rajasthan ')
       
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
        return cy.get("wx-mobile-multi-select-dropdown > div > div.list_container > ul > li:nth-child(1) > div").contains(' Hiring 1-2 ')
     }
     getMinQualField(){
        return cy.get("#jobreq_min_qualification > wxdropdown > div > button")
     }
     selectQual(){
        return cy.get("wx-mobile-multi-select-dropdown > div > div.list_container > ul > li:nth-child(2) > div").contains(' Masters ')
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
export default MobileFreeJobPost