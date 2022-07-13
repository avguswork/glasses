import React from "react";
import { useContext } from "react";
import LanguageContext from "../../../../context";


const styles ={

    block: {
        width: '100%',
        maxWidth: '240px',
        minWidth: '230px',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        alignItems: 'start',
    },

    header: {
        margin: '50px 0px 30px 0px',
    },

    btn: {
        margin: '0%',
        padding: '0%',
        border: 'none',
        backgroundColor: 'unset',
        cursor: 'pointer',
    },

    imageBlock: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10px',
    },

    imageRow: {
        display: 'flex',

    },

    item: {
        margin: '0px 10px 10px 0px',
    },




}


function Facebook (){

    const {translate} = useContext(LanguageContext)
return(
    <div style={styles.block}>
        <h4 style={styles.header} id="lng-soch1">{translate.soch1}</h4>
        <p id="lng-socp1">{translate.socp1}</p>
        <button style={styles.btn}><img src= { require('./image/like.png')} alt="like"/></button>
        <div style={styles.imageBlock}>
            <div style={styles.imageRow}>
            <div style={styles.item}><img src= { require(`./image/people1.png`)} alt="people1"/></div>
            <div style={styles.item}><img src= { require(`./image/people2.png`)} alt="people2"/></div>
            <div style={styles.item}><img src= { require(`./image/people3.png`)} alt="people3"/></div>
            <div style={styles.item}><img src= { require(`./image/people4.png`)} alt="people4"/></div>
            </div>
            <div style={styles.imageRow}>
            <div style={styles.item}><img src= { require(`./image/people5.png`)} alt="people5"/></div>
            <div style={styles.item}><img src= { require(`./image/people6.png`)} alt="people6"/></div>
            <div style={styles.item}><img src= { require(`./image/people7.png`)} alt="people7"/></div>
            <div style={styles.item}><img src= { require(`./image/people8.png`)} alt="people8"/></div>
            </div>
        </div>
        <h5 id="lng-socp2">{translate.socp2}</h5>
    </div>
)
}

export default Facebook