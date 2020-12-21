import React from 'react'
import AppLayoutImage1 from '../../assets/img/iphonex-3.png'

const About = () => {
    return (
        <>
          <div class=" pattern-2 position-realive bg-image" >

<div class="page-section">
  <div class="container">
    <div class="row">
      <div class="col-lg-5 py-3">
        <div class="img-place mobile-preview shadow wow zoomIn">
          <img src={AppLayoutImage1} alt="App Layout"/>
        </div>
      </div>
      <div class="col-lg-6 py-3 mt-lg-5">
        <div class="iconic-list">
          <div class="iconic-item wow fadeInUp">
            <div class="iconic-md iconic-text bg-warning fg-white rounded-circle">
              <span class="mai-shield"></span>
            </div>
            <div class="iconic-content">
              <h5>Secure and Protected</h5>
              <p class="fs-small">Aflete allows you to transform your following and expertise into a profitable, automated online business, ensuring your content is secure and protected. </p>
            </div>
          </div>
          <div class="iconic-item wow fadeInUp">
            <div class="iconic-md iconic-text bg-info fg-white rounded-circle">
              <span class="mai-cube"></span>
            </div>
            <div class="iconic-content">
              <h5>Sales Increase</h5>
              <p class="fs-small">On average our Afletes who have made the switch have seen a 3x increase in sales compared to when they were selling PDF guides</p>
            </div>
          </div>
          <div class="iconic-item wow fadeInUp">
            <div class="iconic-md iconic-text bg-indigo fg-white rounded-circle">
              <span class="mai-desktop-outline"></span>
            </div>
            <div class="iconic-content">
              <h5>Going Digital</h5>
              <p class="fs-small">As the world continues to evolve and lean further and further towards digital, your business should do the same. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
  
        </>
    )
}

export default About
