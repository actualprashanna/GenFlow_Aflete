import React from 'react'
import {Link} from 'react-router-dom'
const NavLinks = (props) => {
    return (
        <Link to={props.link}>
            <li class="nav-item">                
                <Link className ="nav-link">{props.title}</Link>
            </li>
        </Link>
    )
}

export default NavLinks
