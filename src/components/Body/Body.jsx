import React, { Children } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Body = () => {
    return(
        <>
            <Header />
                {Children}
            <Footer />
        </>
    )
}

export default Body;