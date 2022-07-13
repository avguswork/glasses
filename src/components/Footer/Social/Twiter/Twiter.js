import React from "react";
import { useContext } from "react";
import LanguageContext from "../../../../context";

const styles = {
    twitterBlock: {
        width: '100%',
        maxWidth: '240px',
        minWidth: '230px',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
    },

    blockRow: {
        display: 'flex',
        alignItems: 'start',
        padding: '0%',
        margin: '20px 0px'
    },

    header: {
        margin: '50px 0px 30px 0px',
    },

    text: {
        margin: '0px 0px 0px 10px',
    }
}

function Twiter (){
    const {translate} = useContext(LanguageContext)
    return(
        <div style={styles.twitterBlock}>
        <h4 style={styles.header} id="lng-soch2">{translate.soch2}</h4>
            <div style={styles.blockRow}>
                <img src= { require(`./image/twitter.png`)} alt="twitter"/>
                <p style={styles.text} id="lng-soch2p1">{translate.soch2p1}</p>
            </div>
            <div style={styles.blockRow}>
                <img src= { require(`./image/twitter.png`)} alt="twitter"/>
                <p style={styles.text} id="lng-soch2p2">{translate.soch2p2}</p>
            </div>
        </div>
    )
}

export default Twiter