import {ImWhatsapp} from 'react-icons/im'
import React from 'react';
import './Whatsapp.css';
 
function Whatsapp(){

        return (

            <>
                <div id='navright'>
                    {/* <a href="https://wa.me/message/64CYIAHJPA33F1" target="_blank"><img src="https://img.icons8.com/color/50/000000/whatsapp.png"/>  </a> */}
                    <a href="https://wa.me/message/64CYIAHJPA33F1" target="_blank"><ImWhatsapp className='wtsp-icon'/>  </a>
                </div>
                
            </>
        );


}

export default Whatsapp;