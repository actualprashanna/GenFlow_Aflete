import React from 'react'
import PagesLink from './PagesLink/PagesLink'
import SocialLink from './SocialLink/SocialLink'

const Footer = () => {

  

const pageslink={
  "pages":["Features","Customers","Plans","Terms and Condition"],
  "Comapny":["About","Team","Leadership","Career"],
  "Contact":["Contact Us", "Location", "mail@aflete.com","+123 456"]
}
    return (
        <>
            
<div class="page-footer-section bg-dark fg-white">
  <div class="container">
    <div class="row mb-5 py-3">
      
      <PagesLink content={pageslink.pages}/>
      <PagesLink content={pageslink.Comapny}/>

      <PagesLink content={pageslink.Contact}/>
      <div class="col-md-6 col-lg-4 py-3">
        <h5 class="mb-3">Subscribe</h5>
        <p>Get some offers, news, or update features of application</p>
        <form method="POST">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Your email.."/>
            <div class="input-group-append">
              <button type="submit" class="btn btn-primary"><span class="mai-send"></span></button>
            </div>
          </div>
        </form>

        <div class="mt-4">
          <SocialLink social="facebook"/>
          <SocialLink social="google"/>

          <SocialLink social="instagram"/>

          <SocialLink social="twitter"/>

        </div>
      </div>
    </div>
  </div>

  <hr/>

  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 py-2">
        <img src="../assets/favicon-light.png" alt="" width="40"/>
      <p class="d-inline-block ml-2">Copyright &copy; <a class="fg-white fw-medium">Aflete</a>. All rights reserved</p>
      </div>
      <div class="col-12 col-md-6 py-2">
        <ul class="nav justify-content-end">
          <li class="nav-item"><a  class="nav-link">Terms of Use</a></li>
          <li class="nav-item"><a class="nav-link">Privacy Policy</a></li>
          <li class="nav-item"><a class="nav-link">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Footer
