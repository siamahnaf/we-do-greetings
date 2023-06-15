import { ReactNode, Fragment } from "react";

//Components
import Header from "./Header";
import Footer from "./Footer";

//Interface
interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
};

export default Layout;