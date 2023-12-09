import React from "react";
import { Link } from "react-router-dom";
class Sidebar extends React.Component{
    render(){
        return(
            <>
<div class="container">
        <div class="row">
            <div class="col-sm-4">
                <div class="sidebar">
                    <header>
                        <h1 class="flash">FLASH</h1>
                    </header>
                    <div class="menu">
                        <div class="item"><Link to ="/"><i class="fas fa-home"></i>Home</Link></div>
                        <div class="item"><Link to ="/about"><i class="fa-solid fa-address-card"></i>About</Link></div>
                        <div class="item"><Link to ="/portfolio"><i class="fa-solid fa-toilets-portable"></i>Portfolio</Link></div>
                        <div class="item"><Link to ="/loginform"><i class="fa-solid fa-blog"></i>LoginForm</Link></div>
                        <div class="item"><Link to ="/contact"><i class="fa-solid fa-address-book"></i>Contact</Link></div>  
                    </div>
                    <div class="subscribe">subscribe for news letter</div>
                    <input type="email" placeholder="email" id="email"/>
                    <div class="copy">
                        Copy right @2023 all rights reserved this template made by bootstrap
                    </div>
                </div>
                </div>
                </div>
                </div>
            </>
        );
    }
}
export default Sidebar;