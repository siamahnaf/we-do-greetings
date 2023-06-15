
//Components
import Container from "@/Components/Common/Container";
import Content from "@/Components/Video/Content";
import Play from "@/Components/Video/Play";
import Top from "@/Components/Video/Top";
import Bottom from "@/Components/Video/Bottom";

const Video = () => {
    return (
        <section>
            <Container className="!px-0 relative overflow-hidden">
                <Top />
                <div className="bg-[url('/images/slides/slide-1.jpg')] bg-cover bg-no-repeat bg-center flex items-center justify-center py-40">
                    <div className="text-center">
                        <Content />
                        <Play />
                    </div>
                </div>
                <Bottom />
            </Container>
        </section>
    );
};

export default Video;