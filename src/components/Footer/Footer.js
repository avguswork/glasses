import React from 'react';
import CallInform from './CallInform/CalInform';
import Contact from './Contact/Contact';
import Social from './Social/Social';


import './style.css';


function Footer(){

    

    return(
        <footer>
            <CallInform />
            <Social />
            <Contact />
        </footer>
    )
}


export default Footer;