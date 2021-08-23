import React from 'react'
import './Header.css';
import '../../TOPbRANDS.css';
import '../../shopbyCat.css';
export default function Header() {
    return (
        <>

        
            <header>
                <button type="submit"><i class="fa fa-search"></i></button>
                <label />
                <input class="search-field" placeholder="Search" name="search" />
                <img src="Home%20Page%20Pictures/SoH3.png" className="header-image" alt="logo"  />
                <a href="#" className="header-login-logout">Log in or Register</a> |
                <i class="fa" className="header-icon" >&#xf07a;</i>
                <span class='badge badge-warning' id='lblCartCount'> 5 </span>
            
            </header>
                
          
        </>
    )
}
