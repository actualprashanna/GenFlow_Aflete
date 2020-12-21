import React from 'react'
import NavLink from './NavLinks/NavLinks'
import Logo from '../../assets/Logo/favicon.png'
import './Navigation.css' 

const Navigation = () => {
    return (
       <>
            <nav class="navbar navbar-expand-lg navbar-light navbar-floating">
                <div class="container">
                     <a class="navbar-brand" href="#">
                        <img src={Logo} alt="Logo" width="40"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
  
                    <div class="collapse navbar-collapse" id="navbarToggler">
                        <ul class="navbar-nav ml-lg-5 mt-3 mt-lg-0">
                            <NavLink link="/" title="Home"></NavLink>
                            <NavLink link="/about" title="About"></NavLink>
                            <NavLink link="/download" title="Download"></NavLink>
                            <NavLink link="/contact" title="Contact"></NavLink>                            
                            
                        </ul>
                        <div class="ml-auto my-2 my-lg-0">
                             <button class="btn btn-dark rounded-pill">Download Now</button>
                        </div>
                    </div>
                </div>
            </nav>
       </>
    )
}

export default Navigation