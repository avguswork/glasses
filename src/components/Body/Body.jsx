
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Body = ({children}) => {

    return(
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}
export default Body;