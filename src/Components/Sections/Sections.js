import React from 'react'
import AppLayoutImage from '../../assets/img/iphonex-2.png'


const Sections = () => {
    return (
        <>
            
<div class="page-section">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 py-3">
        <div class="iconic-list">
          <div class="iconic-item wow fadeInUp">
            <div class="iconic-content">
              <h5>Brand Tools</h5>
              <p class="fs-small">Our team provides you with the necessary tools to give your business that professional look.</p>
            </div>
            <div class="iconic-md iconic-text bg-warning fg-white rounded-circle">
              <span class="mai-hammer"></span>
            </div>
          </div>
          <div class="iconic-item wow fadeInUp">
            <div class="iconic-content">
              <h5>Growth</h5>
              <p class="fs-small">Aflete allows you to transform your following and expertise into a profitable with ensuring your content is secure and protected. </p>
            </div>
            <div class="iconic-md iconic-text bg-info fg-white rounded-circle">
              <span class="mai-shield-checkmark"></span>
            </div>
          </div>
          <div class="iconic-item wow fadeInUp">
            <div class="iconic-content">
              <h5>Easy Development</h5>
              <p class="fs-small">We also design and develop your website, and provide you with dynamic promotional content in order for you to build the hype and create a real brand identity</p>

            </div>
            <div class="iconic-md iconic-text bg-indigo fg-white rounded-circle">
              <span class="mai-desktop-outline"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 py-3 wow zoomIn">
        <div class="img-place mobile-preview shadow">
          <img src={AppLayoutImage} alt="Application Weeks"/>
        </div>
      </div>
      <div class="col-lg-4 py-3">
        <div class="iconic-list">
          <div class="iconic-item wow fadeInUp">
            <div class="iconic-md iconic-text bg-warning fg-white rounded-circle">
              <span class="mai-stats-chart-outline"></span>
            </div>
            <div class="iconic-content">
              <h5>Sales and Reporting</h5>
              <p class="fs-small">Upon launch of your guide, you will have access to your own business dashboard.You can view the full backend of your business in real time.</p>
            </div>
          </div>
          <div class="iconic-item wow fadeInUp">
            <div class="iconic-md iconic-text bg-success fg-white rounded-circle">
              <span class="mai-earth"></span>
            </div>
            <div class="iconic-content">
              <h5>Worldwide Access</h5>
              <p class="fs-small"> You can view live traffic and sales from all over the world with payments being transferred to you within seconds of each transaction. </p>
            </div>
          </div>
          <div class="iconic-item wow fadeInUp">
            <div class="iconic-md iconic-text bg-indigo fg-white rounded-circle">
              <span class="mai-stats-chart-outline"></span>
            </div>
            <div class="iconic-content">
              <h5>Easy </h5>
              <p class="fs-small">The Aflete app allows you to scale your business to an unlimited degree.</p>
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

export default Sections
