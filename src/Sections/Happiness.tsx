
//Components
import Container from "@/Components/Common/Container";
import Content from "@/Components/Happiness/Content";
import Images from "@/Components/Happiness/Images";

//Other Components
import Top from "@/Components/Common/Top";
import Bottom from "@/Components/Common/Bottom";

const Happiness = () => {
    return (
        <section>
            <Container className="!px-0 py-16 my-16 bg-hover relative overflow-hidden">
                <Top />
                <Container className="grid grid-cols-2 gap-8 items-center">
                    <Content />
                    <Images />
                </Container>
                <Bottom />
            </Container>
        </section>
    );
};

export default Happiness;