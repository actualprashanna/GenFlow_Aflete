import React from 'react'
import Navigation from './Navigation/Navigation.js'
import Footer from './Footer/Footer.js'

const Layouts = (props) => {
    return (
        <>
        <Navigation/>
        {props.children}
        <Footer/>
        </>
    )
}

export default Layouts
