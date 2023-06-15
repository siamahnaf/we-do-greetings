//Components
import Container from "@/Components/Common/Container";
import Logo from "@/Components/Header/Logo";
import Nav from "@/Components/Header/Nav";

const Header = () => {
    return (
        <header id="header" className="fixed top-0 left-0 w-full z-50">
            <Container className="flex gap-2 items-center py-3">
                <Logo />
                <Nav />
            </Container>
        </header>
    );
};

export default Header;