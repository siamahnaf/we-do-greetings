
//Components
import Container from "@/Components/Common/Container";
import Content from "@/Components/Video/Content";
import Play from "@/Components/Video/Play";

//Other Components
import Top from "@/Components/Common/Top";
import Bottom from "@/Components/Common/Bottom";

const Video = () => {
    return (
        <section>
            <div className="relative overflow-hidden">
                <Top />
                <div className="bg-[url('/images/slides/slide-1.jpg')] bg-cover bg-no-repeat bg-center flex items-center justify-center py-40">
                    <div className="text-center">
                        <Content />
                        <Play />
                    </div>
                </div>
                <Bottom />
            </div>
        </section>
    );
};

export default Video;