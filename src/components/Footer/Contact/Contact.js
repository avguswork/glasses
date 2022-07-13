import React from 'react';
import './style.css';
import { useContext } from 'react';
import LanguageContext from '../../../context';

function Contact (){
    const {translate} = useContext(LanguageContext)
    return(
        <div className='contact_background'>
            <div className='footer_contact_block'>
                <div className='cont_block_column'>
                    <p id="lng-copyrigh">{translate.copyrigh}</p>
                </div>
                <div className='cont_block_column'>
                <a  id="lng-abousUs">{translate.abousUs}</a>
                <div className='straight'>&nbsp; | &nbsp;</div>
                <a  id="lng-returns">{translate.returns}</a> 
                <div className='straight'>&nbsp; | &nbsp;</div>
                <a  id="lng-terms">{translate.terms}</a>
                <div className='straight'>&nbsp; | &nbsp;</div>
                <a  id="lng-contactUs">{translate.contactUs}</a>
                <div className='straight'>&nbsp; | &nbsp;</div>
                </div>
            </div>
        </div>
    )
}

export default Contact