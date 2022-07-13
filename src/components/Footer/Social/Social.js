import React from 'react';
import ContactUs from './ContactUs/ContactUs';
import Facebook from './FaceBook/Facebook';
import Information from './Information/Information';
import './Social.css'
import Twiter from './Twiter/Twiter';



function Social (){
    return(
        <div className='social_background'>
            <div className='contact_block'>
                
                    <Facebook />
                    <Twiter />
                    <Information />
                    <ContactUs />
                
            </div>
        </div>
    )
}

export default Social