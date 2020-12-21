import React from 'react'
import './Home.css'
import AppLayoutImage from '../../assets/img/iphonex-1.png'

const Home = () => {
    return (
        <>                
<div class="pattern-1 page-hero-section bg-image hero-home-1">
  <div class="hero-caption pt-5">
    <div class="container h-100">
      <div class="row align-items-center h-100">
        <div class="col-lg-6 wow fadeInUp">
          <div class="badge mb-2" style ={{"color":"rgb(26 61 76)"}}><span class="icon mr-1"><span class="mai-globe" ></span></span> Your Workouts, Your Customers, Your Brand.</div>
          <h1 class="mb-4">Your Workout <span style ={{"color":"#8a39fc"}}>Companion</span></h1>
          <p class="mb-4" >AFLETE is a fitness app exclusively used by influencers <br/>to show their fitness content.</p>
          <div classname="row">
          </div>

          <a href="https://apps.apple.com/us/app/aflete/id1144968481#?platform=iphone" class=" btn btn-dark rounded-pill m-1"><span class="mai-logo-apple"></span></a><t/>
          <a href="https://play.google.com/store/apps/details?id=com.aflete.afleteapp&hl=en&gl=US" class="btn btn-success rounded-pill m-1"><span class="mai-logo-google-playstore"></span></a>
         
        </div>
        <div class="col-lg-6 d-none d-lg-block wow zoomIn">
          <div class="img-place mobile-preview shadow floating-animate">
            <img src={AppLayoutImage} alt="Afelete App"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Home