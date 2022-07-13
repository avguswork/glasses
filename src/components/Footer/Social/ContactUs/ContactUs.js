import React from "react";

const styles = {
    contactUsBlock: {
        width: '100%',
        maxWidth: '240px',
        minWidth: '230px',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
    },

    header: {
        margin: '50px 0px 30px 0px',
    },

    

    text: {
        margin: '0px 0px 0px 10px',
        lineHeight: '30px',
    },

    socialButtonBlock: {
        display: 'flex',

    },

    btn: {
        margin: '0px 10px 0px 0px',
        padding: '0%',
        border: 'none',
        backgroundColor: 'unset',
        cursor: 'pointer',
    },
} 

function ContactUs (){
    
    return(
        <div style={styles.contactUsBlock}>
            <h4 style={styles.header}>CONTACT US</h4>
            <div style={styles.text}>
                <p>  Leo Store
                    <br />
                     Leopards media
                    <br />
                    KVM Rpad, 4590GH
                    <br />
                    +1 489-8888-0099 
                    <br />
                    mail@email.com
                    <br />
                </p>
            </div>
            <hr />
            <div style={styles.socialButtonBlock}>
            <button style={styles.btn}><img src= { require('./image/1.png')} alt="like"/></button>
            <button style={styles.btn}><img src= { require('./image/2.png')} alt="like"/></button>
            <button style={styles.btn}><img src= { require('./image/3.png')} alt="like"/></button>
            <button style={styles.btn}><img src= { require('./image/4.png')} alt="like"/></button>
            </div>
        </div>
    )
}

export default ContactUs

