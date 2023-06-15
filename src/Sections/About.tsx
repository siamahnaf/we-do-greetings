//Components
import Container from "@/Components/Common/Container";
import Content from "@/Components/About/Content";
import Images from "@/Components/About/Images";

const About = () => {
    return (
        <section className="pb-16 pt-24">
            <Container className="grid grid-cols-2 items-center">
                <Content />
                <Images />
            </Container>
        </section>
    );
};

export default About;