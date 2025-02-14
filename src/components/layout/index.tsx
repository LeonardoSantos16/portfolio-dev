import { Children } from "react";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ Children }) => {
    <>
        <Header />
        <main>{Children}</main>
        <Footer />
    </>
}

export default Layout;