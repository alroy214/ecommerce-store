import React from 'react'
import './Navbar.css';
import '../../App.css';

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                    </div>
                    <ul class="nav navbar-nav">
                        <li><a href="#">Hair Color</a></li>
                        <li><a href="#">Shampoo & Conditioner</a></li>
                        <li><a href="#">Hair Accessories</a></li>
                        <li><a href="#">Find A Stylist</a></li>
                        <li><a href="#">About Us</a></li>

                    </ul>
                </div>
            </nav>
        </>
    )
}
