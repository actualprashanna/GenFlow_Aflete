import React from 'react'
import LaptopImage from '../../assets/img/laptop.png'
import GetOnPlayStore from '../../assets/img/android.png'
import GetOnAppStore from '../../assets/img/apple.png'

const Growth = () => {
    return (
        <>
            <div class="page-section no-scroll">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-7 wow fadeIn">
        <div class="img-place">
          <img src={LaptopImage} alt=""/>
        </div>
      </div>
      <div class="col-lg-5 pl-lg-5 wow fadeInUp">
        <h2 class="mb-4">Growth</h2>
        <p class="mb-4">The Aflete app allows you to scale your business to an unlimited degree. No more are you confined to PTing in your local area, the Aflete app now gives you the means to reach a worldwide customer base. Serving an unlimited number of customers at once, with minimal effort across all corners of the world. </p>
        <p class="mb-4">Available on both The Google Play Store and The Apple store, your guide is always just a click away. </p>
        <a href="https://play.google.com/store/apps/details?id=com.aflete.afleteapp&hl=en&gl=US" class="btn"><img src={GetOnPlayStore} alt="Download from Play Store" width="150px"/></a>
        <a href="https://apps.apple.com/us/app/aflete/id1144968481#?platform=iphone" class="btn"><img src={GetOnAppStore} alt="Download from Play Store" width="130px"/></a>

      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Growth
